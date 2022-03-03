const weather = (() => {
    function convertData(data) {
        const {
            name: cityName,
            main: {temp: temperature, feels_like: feelsLike, humidity},
            wind: {speed: windSpeed},
        } = data;
        return {cityName, temperature, feelsLike, humidity, windSpeed};
    }

    async function getData(city) {
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=6484604c5637f71fab3824f5547af2e1`;
        try {
            const response = await fetch(endpoint, {mode:"cors"});
            if (!response.ok) throw new Error(`City ${city} not found`);
            const data = convertData(await response.json());
            return data;
        } catch (error) {
            alert(error);
            return null;
        }
    }
    return {getData};
})();

export default weather;