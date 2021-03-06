import { baseURL } from "./config";
import io from 'socket.io-client';
const socket = io(baseURL, { transports: ['websocket'] });
export default socket
