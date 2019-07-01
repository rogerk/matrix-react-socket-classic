# matrix

This project renders a matrix of pixels (represented as buttons) and a color control. Each pixel's color can be changed. The color changes are updated over socket-io to a node.js server accessing json-server DB.

## Technologies

- React/Redux (Client Front End)
- Node.js (Server Back End)
- json-server (Back End DB)
- Socket-io (Real-time Communication)

[Matrix Client](socket-io-client/README.md)

[Matrix Server](socket-io-server/README.md)
