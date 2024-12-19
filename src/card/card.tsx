interface myNewProps {
  name: string;
  surname?: string;
  age?: number;
}

function Card({ name, surname, age }: myNewProps) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{surname}</h2>
      <h3>{age}</h3>
    </>
  );
}

export default Card;
