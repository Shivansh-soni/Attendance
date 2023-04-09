import "./App.css";
import Hero from "./component/Hero";

const App = () => {
  return (
    <div className="App flex flex-col lg:flex-row lg:mt-10 justify-center items-center gap-10 ">
      <Hero />
    </div>
  );
};

export default App;
