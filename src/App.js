import "./App.css";
// import About from "./components/About";
import MyAlert from "./components/MyAlert";
import MyText from "./components/MyText";
import Navbar from "./components/Navbar";
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const[colorMode, chgColorMode] = useState({
    mode: "light",
    backGroundColor : '#FAF8F1'});
  const[alertText, chgAlertText] = useState(null);
  const setAlert=(type, message) => {
    chgAlertText({
      type : type,
      content : message
    })
    setTimeout(() => {
      chgAlertText(null)
    }, 1500);
  }
  const chgMode1 = () => { 
    chgColorMode({mode:"light",backGroundColor : '#FAF8F1'})
    document.body.style.backgroundColor = "#FAF8F1"
    setAlert("success", "Light Mode Activated!!")
  }
  const chgMode2 = () => { 
    chgColorMode({mode:"dark",backGroundColor : "#144272"})
    document.body.style.backgroundColor = "#144272"
    setAlert("success", "Dark Mode 1 Activated!!")
  }
  const chgMode3 = () => { 
    chgColorMode({mode:"dark",backGroundColor : "#4e5a66"})
    document.body.style.backgroundColor = "#4e5a66"
    setAlert("success", "Dark Mode2 Activated!!")
}
document.body.style.backgroundColor = colorMode.backGroundColor
return (
  <>
    {/* <Router> */}
      <Navbar title="My-App" colorInp={colorMode} colorScheme1={chgMode1} colorScheme2={chgMode2} colorScheme3={chgMode3}/> 
      <MyAlert alerts={alertText}/>
      <div className="container">
        {/* <Routes> */}
          {/* <Route exact path="/" element={<MyText colorInp={colorMode} setAlert={setAlert} />}> */}
          <MyText colorInp={colorMode} setAlert={setAlert} />
          {/* </Route> */}
          {/* <Route exact path="/about" element={<About />}> */}
          {/* </Route> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
  </>
);
}
export default App;
