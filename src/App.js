import React from "react";

// import axios from "./axios/axios";
import styles from './App.module.css';
import {Cards, Chart, CountryPicker} from './components'
import { fetchData } from './api';
import coronaImage from './images/image.png'
class App extends React.Component{
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountrychange = async (country) => {
    //console.log(country)
    
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data,country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={ coronaImage} alt='COVID-19'/>
        <Cards data={ data}/>
        <CountryPicker handleCountryChange ={this.handleCountrychange} />
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
