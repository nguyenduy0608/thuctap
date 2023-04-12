import Cookie from "js-cookie";
import { SESSION_ID } from "../features/Auth/login/AuthSlice";
import io, { Socket } from "socket.io-client";

export class WebSocket {
  public static socketClient: Socket;
  private static currentToken: string;

  public static async init(token: string) {
    if (!this.socketClient && this.currentToken !== token) {
      this.currentToken = token;
      this.socketClient = io("https://dev.httapi.winds.vn/api/v1/" as string, {
        auth: { token: Cookie.get(SESSION_ID) },
        path: "/socket.io",
        transports: ["websocket"],
        secure: true,
      });
    }
  }
  public static async disconnect() {
    if (this.socketClient) {
      this.socketClient.disconnect();
    }
  }
}
// export const environment = {
//   api_host: process.env.REACT_APP_API_HOST,
//   ws_host: process.env.REACT_APP_WS_HOST,
//   api_host_test_spam: process.env.REACT_APP_API_TEST_SPAM,
//   ws_host_test_spam: process.env.REACT_APP_WS_TEST_SPAM,
// };
