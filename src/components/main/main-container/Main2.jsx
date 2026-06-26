import "../../../styles/main/main-container/main2.css";

import PracticeFrontendArk from "./PracticeFrontendArk.jsx";
import PopularRecently from "./PopularRecently.jsx";
import HowItWorks from "./HowItWorks.jsx";
import ResourcesSpotlight from "./ResourcesSpotlight.jsx";
import LearnSay from "./LearnSay.jsx";

const Main2 = () => {
  return (
    <div className="main-2">
      <div className="main-container2">
        <PracticeFrontendArk />
        <PopularRecently />
        <HowItWorks />
        <ResourcesSpotlight />
        <LearnSay />
      </div>
    </div>
  );
};

export default Main2;