class WeatherAPI{
    constructor(){
        this.baseUrl="https://api.openweathermap.org/data/2.5/weather"; //! apideki base url'imiz
        this.apiKey="23d3399dcb00b2597ca379c9fff5f365" //! bizim api anahtarımız
    }

    async getWeatherInfo(cityName){ //! parametreli fonksiyonumuz
        const response = await fetch(`${this.baseUrl}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`) //! baseUrl'den gelen veri + 
                                                    //!  fonksiyondaki parametremiz + api id'miz + 
                                                    //!  bizim apiKey'imiz + units + dil secimi
        const data = await response.json();
        return data;
    }
}