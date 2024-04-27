import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import PasswordGenerator from "./components/PasswordGenerator/GeneratePassword";
import ToDoApp from "./components/ToDoApp/ToDoApp";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/projects" element={<Projects />}/>
        <Route path="/projects/randompassword" element={<PasswordGenerator/>}/>
        <Route path="/projects/todo" element={<ToDoApp/>}/>
      </Routes>
    </div>
  );
}

export default App;
