import { baseURL } from "./config";
import io from "socket.io-client";
// const socket = io(baseURL, { transports: ["websocket"] });
// export default socket;,
let socket;
export const initiateSocket = (data) => {
  socket = io(baseURL, { transports: ["websocket"] });
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

export const newUserInRoom = (cb) => {
  if (!socket) return true;
  socket.on("newUserInRoom", (msg) => {
    return cb(null, msg);
  });
};

export const userOutRoom = (cb) => {
  if (!socket) return true;
  socket.on("userOutRoom", (user) => {
    return cb(null, user);
  });
};

export const disconnectSocket = (user, roomTitle) => {
  console.log("Disconnecting socket...", roomTitle);
  if (socket) {
    socket.emit("userOutRoom", { user, roomTitle });
    socket.disconnect();
  }
};

export const chatMessageFromRoom = (
  roomTitle,
  message,
  userEmail,
  username
) => {
  if (socket)
    socket.emit("chatMessageFromRoom", {
      roomTitle,
      message,
      userEmail,
      username,
    });
};
