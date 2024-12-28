import { Button, Modal } from "@mantine/core";
import { useState } from "react";

type CardProps = {
  name: string;
  email: string;
  age: number;
  onClose: () => void; 
  opened: boolean; 
};

function CardUser({ name, email, age, onClose, opened }: CardProps) {
  return (
    <Modal 
      opened={opened} 
      onClose={onClose} 
      title="Register"
    >
      <p>{name}</p>
      <p>{email}</p>
      <p>{age}</p>
    </Modal>
  );
}

export default CardUser;
