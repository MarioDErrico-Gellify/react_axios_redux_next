import { useEffect, useState, useMemo } from "react";
import Navigation from "../components/navigation";
import { getRandomNumber } from "../utils/randomNumber";
import CardForPageTwoinfo from "../components/cardForPageTwo/cardForPageTwo";

export default function PageTwo() {
  const [name, setName] = useState<string>("");
  const [count, setCount] = useState<number>(-3);

  const nameArrayObj = [
    { name: "mario", surname: "d'errico" },
    { name: "michele", surname: "simeone" },
    { name: "giovanni", surname: "bianchi" },
  ];

  useEffect(() => {
    if (name === "") {
      setName("randomic message " + getRandomNumber(0, 10).toString());
    }
    setCount((prevCount) => prevCount + 1);
  }, [name]);

  // This useMemo hook adds upper case to nameArrayObj
  const upperCaseNames = useMemo(() => {
    return nameArrayObj.map((person) => ({
      ...person,
      name: person.name.toUpperCase(),
    }));
  }, [nameArrayObj]);

  return (
    <>
      <Navigation />
      <CardForPageTwoinfo
        titleOne={"Hook Showcase"}
        titleTwo={name}
        titleTree={`You used this prop ${count} times`}
        name={"Your Value"}
      >
        {upperCaseNames.map((value, index) => (
          <h1
            key={index}
            onClick={() => {
              setName(value.name + index);
            }}
          >
            {value.name} {value.surname}
          </h1>
        ))}
      </CardForPageTwoinfo>
    </>
  );
}
