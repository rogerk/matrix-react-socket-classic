import express from "express";
import http from "http";
import socketIo from "socket.io";
import axios from "axios";

const port = process.env.PORT || 4001;

const app = express();

app.use(express.json);

const server = http.createServer(app);
const io = socketIo.listen(server);

io.on("connection", socket => {
    console.log("Client Connected");

    socket.on("INITIAL_MATRIX", () => {
        getMatrix(socket);
    });

    socket.on("disconnect", () => {
        console.log("Client Disconnected");
    });

    socket.on("UPDATE_PIXEL_COLOR", data => {
        const pixel = data.pixel;
        pixel.color = data.color;
        updatePixel(socket, pixel);
    });

    socket.on("RESET_MATRIX_COLOR", data => {
        const color = data.color;
        resetMatrix(socket, color);
    });
});

const getMatrix = async socket => {
    try {
        const res = await getMatrixData(socket);
        socket.emit("INITIAL_MATRIX", res.data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};

const updatePixel = async (socket, event) => {
    try {
        const res = await axios.put(
            `http://localhost:3000/matrix/${event.id}`,
            event
        );
        io.sockets.emit("UPDATE_PIXEL_COLOR", res.data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};

const resetMatrix = async (socket, event) => {
    try {
        let res = await getMatrixData(socket);
        const data = res.data;
        data.map(async element => {
            element.color = event;
            await axios.put(
                `http://localhost:3000/matrix/${element.id}`,
                element
            );
        });
        res = await getMatrixData(socket);
        socket.emit("RESET_MATRIX_COLOR", res.data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};

const getMatrixData = socket => {
    try {
        let res = axios.get("http://localhost:3000/matrix");
        return res;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
