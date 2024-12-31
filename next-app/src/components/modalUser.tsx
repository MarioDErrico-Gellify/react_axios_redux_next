import { Modal } from "@mantine/core";

type CardProps = {
  name: string;
  email: string;
  age: number;
  onClose: () => void;
  opened: boolean;
};

function ModalUser({ name, email, age, onClose, opened }: CardProps) {
  return (
    <Modal opened={opened} onClose={onClose} title="Added User">
      <p>{name}</p>
      <p>{email}</p>
      <p>{age}</p>
    </Modal>
  );
}

export default ModalUser;
