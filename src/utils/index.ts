import { notification } from "antd";
type NotificationType = "success" | "info" | "warning" | "error";

export const Notification = (status: NotificationType, msg: any) => {
  if (status !== "error") {
    notification[status]({
      message: "Thông báo",
      description: msg,
    });
  } else {
    notification[status]({
      message: "Thông báo",
      description: msg,
    });
  }
};
export const wait = (timeout: number) => {
  return new Promise((resolve: any) => setTimeout(resolve, timeout));
};
