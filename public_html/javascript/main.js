const socket = io();

socket.on("connect", () => {
  console.log(
    `Successfully connected to wss/socket.io server with the id ${socket.id}`
  );
});

// socket.on("disconnect", () => {
//   console.log(
//     `Successfully disconnected to wss/socket.io server with the id ${socket.id}`
//   );
// });