import { useEffect, useState, useMemo } from "react";

import { getRandomNumber } from "../utils/randomNumber";
import CardForPageTwoinfo from "../components/cardForPageTwo/cardForPageTwo";
import Navigation from "../components/navigationMenu/navigation";

export default function PageTwo() {
  const [name, setName] = useState<string>("");
  const [count, setCount] = useState<number>(-3);

  const nameArrayObj = [
    { name: "mario", surname: "d'errico" },
    { name: "michele", surname: "simeone" },
    { name: "giovanni", surname: "bianchi" },
  ];

  useEffect(() => {
    name === "" &&
      setName("randomic message " + getRandomNumber(0, 10).toString());

    setCount((prevCount) => prevCount + 1);
  }, [name]);

  // This useMemo hook adds upper case to nameArrayObj
  const upperCaseNames = useMemo(() => {
    return nameArrayObj.map((person) => ({
      ...person,
      name: person.name.toUpperCase(),
      surname: person.surname.toUpperCase(),
    }));
  }, [nameArrayObj]);

  return (
    <>
      <Navigation />
      <CardForPageTwoinfo
        titleOne={"Hook Showcase"}
        titleTwo={name}
        titleTree={`You used this hook ${count} times`}
        name={"Your Value"}
      >
        {upperCaseNames.map((value, index) => (
          <h1
            // inline css{old school practice}
            style={{ cursor: "pointer" }}
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
