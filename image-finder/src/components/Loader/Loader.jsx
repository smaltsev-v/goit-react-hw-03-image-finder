import {Component } from "react";
import { ImSpinner } from "react-icons/im";
import s from "./Loader.module.css";


export default class App extends Component {
 
  render() {
    return (
      <div className={s.loader}>
        <ImSpinner
           fill="#3f51b5"
          
          className="icon-spin"
        />
      </div>
    );
  }
}