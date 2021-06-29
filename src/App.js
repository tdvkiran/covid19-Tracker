import React from "react";

// import axios from "./axios/axios";
import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from './components'

class App extends React.Component{

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
