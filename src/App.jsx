import "./App.css";
// import Countries from "./components/Countries/Countries";
// import AppComponents from "./Components2/AppComponents.jsx";
import Header from "./Components3/Header";
import Bottels from "./Bottels/Bottles";

const App = () => {
  return (
    <div className="appStyles">
      <h1>React</h1>
      {/* <Countries/> */}
      {/* <AppComponents /> */}
      <Header />
      <div className="bottlesStyles">
        <Bottels />
      </div>
    </div>
  );
};

export default App;
