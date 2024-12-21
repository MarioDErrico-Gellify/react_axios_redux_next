import { useEffect, useState, useMemo } from "react";

import { getRandomNumber } from "../utils/randomNumber";
import CardForPageTwoinfo from "../components/cardForPageTwo/cardForPageTwo";
import Navigation from "../components/navigationMenu/navigation";

export default function PageTwo() {
  const [name, setName] = useState<string>("");
  const [count, setCount] = useState<number>(-3);

  const users = [
    { firstName: "Emma", lastName: "Taylor" },
    { firstName: "Liam", lastName: "Williams" },
    { firstName: "Olivia", lastName: "Jones" },
  ];

  useEffect(() => {
    if (name === "") {
      setName("Random message " + getRandomNumber(0, 10).toString());
    }

    setCount((prevCount) => prevCount + 1);
  }, [name]);

  const upperCaseNames = useMemo(() => {
    return users.map((user) => ({
      ...user,
      firstName: user.firstName.toUpperCase(),
    }));
  }, [users]);

  return (
    <>
      <Navigation />
      <CardForPageTwoinfo
        titleOne={"Hook Showcase"}
        titleTwo={name}
        titleTree={`You have used this hook ${count} times`}
        name={"Your Value"}
      >
        {upperCaseNames.map((user, index) => (
          <h1
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => {
              setName(user.firstName + " & index value: " + index);
            }}
          >
            {user.firstName} {user.lastName}
          </h1>
        ))}
      </CardForPageTwoinfo>
    </>
  );
}
