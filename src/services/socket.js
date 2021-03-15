import { baseURL } from "./config";
import io from "socket.io-client";
// const socket = io(baseURL, { transports: ["websocket"] });
// export default socket;,
let socket;
export const initiateSocket = (data) => {
  socket = io(baseURL, { transports: ["websocket"] });
  console.log(`Connecting socket...`);
  if (socket && data) socket.emit("onRoom", data);
};

export const subscribeToRoom = (cb) => {
  if (!socket) return true;
  socket.on("chatMessageToRoom", (msg) => {
    return cb(null, msg);
  });
};

export const logedUsersList = (cb) => {
  if (!socket) return true;
  socket.on("logedUsersList", (msg) => {
    return cb(null, msg);
  });
};

export const disconnectSocket = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};

export const chatMessageFromRoom = (roomTitle, message, userEmail) => {
  if (socket)
    socket.emit("chatMessageFromRoom", { roomTitle, message, userEmail });
};
