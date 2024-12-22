import { useTranslation } from "react-i18next";
import Navigation from "../components/navigationMenu/navigation";

//this is a referral page, this show only navigation menu
function pageOne() {
  // const { t } = useTranslation();
  // console.log("asd");
  return (
    <>
      {/*this component show only landing page, consits in navigation component*/}
      <Navigation />
      <h1>{"choose option"}</h1>
    </>
  );
}
export default pageOne;
