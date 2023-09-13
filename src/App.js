// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title="Nikzz" abouttext="About Nikzz" /> */}
      {/* <Navbar /> */}
      <Navbar title="Nikkzz" />
      <div className="container">
        <TextForm heading="Enter the text to Analyse" />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
