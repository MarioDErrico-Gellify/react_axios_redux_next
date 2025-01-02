import { Modal } from "@mantine/core";

type CardProps = {
  name: string;
  email: string;
  age: number;
  onClose: () => void;
  opened: boolean;
  messageToLocalStorage: boolean | string;
};

function ModalUser({
  name,
  email,
  age,
  onClose,
  opened,
  messageToLocalStorage = "unknown user",
}: CardProps) {
  return (
    <Modal opened={opened} onClose={onClose} title={messageToLocalStorage}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{age}</p>
    </Modal>
  );
}

export default ModalUser;
