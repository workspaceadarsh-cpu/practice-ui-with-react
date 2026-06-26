import Main1 from "./main-container/Main1";
import Main2 from "./main-container/Main2";

const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <Main1 />
        <Main2 />
      </div>
    </div>
  );
};

export default Main;