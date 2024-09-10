import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

interface INotifications {
  title: string;
  message: string;
}

export const Notifications = ({ title, message }: INotifications) => {
  return notifications.show({
    title: title,
    message: message,
    autoClose: true,
    color: 'teal',
    withCloseButton: true,
    icon: <IconCheck size="1rem" />,
  });
};
