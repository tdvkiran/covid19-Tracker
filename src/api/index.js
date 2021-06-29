import axios from '../axios/axios';

export const fetchData = async (country = '') => {
    const countryEndpoint = country?`countries/${country}`:'';
    try {
        const {
          data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(countryEndpoint);

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get('/daily');
        
        const modifiedData = data.map(dailyData => {
            return {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            };
        })
        return modifiedData;
        
    } catch (error) {
        
    }
}

export const fetchCountries = async () => {
    try {
        const {data:{countries}} = await axios.get('/countries');
        return countries.map(country=>country.name);
    } catch (error) {
        
    }
}