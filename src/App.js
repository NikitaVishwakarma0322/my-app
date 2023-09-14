// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  };

  return (
    <>
      {/* <Navbar title="Nikzz" abouttext="About Nikzz" /> */}
      {/* <Navbar /> */}
      <Navbar title="Nikkzz" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to Analyse"
          mode={mode}
        />
      </div>

      {/* <About /> */}
    </>
  );
}

export default App;
