export default function App() {
  const varrayModTwo: number | string | any[] = [];
  const numbers = [1, 2, 3, 4, 5, 6];
  numbers.some((value: number) => {
    if (value % 2 === 0) {
      /*TODO add a new array*/
      varrayModTwo.push("mod 2 value" + value);
    }
  });
  return <p>{varrayModTwo}</p>;
}
