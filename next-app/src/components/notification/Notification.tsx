import {Notification} from "@mantine/core";

export interface NotificationProps {
  color: string;
  radius: string;
  title: string;
  message: string;
  onClose?: () => void;
}

function NotificationInfo({
  color,
  radius,
  title,
  message,
  onClose,
}: NotificationProps) {
  return (
    <Notification color={color} radius={radius} title={title} onClose={onClose}>
      {message}
    </Notification>
  );
}

export default NotificationInfo;
