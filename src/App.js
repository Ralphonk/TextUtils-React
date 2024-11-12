import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enable is or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing!';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils right now!';

      // }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light mode';

    }
  }

  return (
    <div>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
    </div>
  );
}

export default App;
