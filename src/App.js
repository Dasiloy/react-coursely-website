import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Trainers from "./pages/Trainers";
import Contact from "./pages/Contact";

export const AppContext = React.createContext();

export default function App() {
  const [isActive, setIsActive] = useState(0);
  const [count, setCount] = useState(0);
  const handleClick = (id) => {
    setIsActive(id);
  };
  const changeCount = () => {
    setCount(count + 1);
  }



  return (
    <AppContext.Provider value={{ handleClick, isActive,count,changeCount }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route
            path='/courses'
            component={Courses}></Route>
          <Route
            path='/trainers'
            component={Trainers}></Route>
          <Route
            path='/contact'
            component={Contact}></Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}
