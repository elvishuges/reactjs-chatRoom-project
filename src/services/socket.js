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
    console.log("Websocket event received!");
    return cb(null, msg);
  });
};

export const disconnectSocket = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};

export const chatMessageFromRoom = (roomTitle, message) => {
  if (socket) socket.emit("chatMessageFromRoom", { roomTitle, message });
};
