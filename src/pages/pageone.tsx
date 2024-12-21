import Navigation from "../components/navigationMenu/navigation";

//this is a referral page, this show only navigation menu
function pageOne() {
  return (
    <>
      {/*this component show only landing page, consits in navigation component*/}
      <Navigation></Navigation>
      <h1>Welcome to react showcase app, choose options in nav bar link</h1>
    </>
  );
}
export default pageOne;
