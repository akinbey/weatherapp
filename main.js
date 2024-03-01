//-----------------ELEMENTLERİ SECELIM ---------------------//

const searchInput = document.querySelector("#searchInput")
const cityName = document.querySelector(".cityName")
const degree = document.querySelector(".degree")
const desc = document.querySelector(".desc")
const bodyImage = document.querySelector(".bgImage")

searchInput.addEventListener("keypress", findWeather)

const weatherApi = new WeatherAPI() //! nesne türettik

function findWeather(e) {
    if (e.keyCode == '13') { //! keycode 13 yani enter'a basıldıgında inputtan gelen değere göre arama yapsın
        const cityName = searchInput.value.trim(); //! şehir adı boşlukları da kaldırıyoruz
        weatherApi.getWeatherInfo(cityName) //! nesnemizin içindeki parametreli fonksiyonu alıyoruz
            .then(data => { //! başarılı ise data da tutuluyor
                console.log(data) //! data konsola yazdılırıyor
                display(data) //!  verileri ekrana bastırıyoruz
            })
    }
}

function display(data) {  //! veriyi ekrandaki elemanlara atayan ve ekrana bastırdığım functıon
    cityName.textContent = data.name; //! data'dan gelen name. cityName'in textcontentine yazdırılıyor
    const tempValue = Math.round(data.main.temp); //!  sıcaklık degerini tam sayıya çevirdik
    degree.textContent = tempValue + "°";
    desc.textContent = data.weather[0].description; //! hava durumu acıklaması
    searchInput.value = "" //! input value temizleniyor

    if (tempValue >= 0) { //! sıfır dereceden buyukse

        bodyImage.style.backgroundImage = "url('img/walpaper.jpg')";
    }
    else { //! sıfır dereceden kucukse
        bodyImage.style.backgroundImage = "url('img/wp1.jpg')";

    }

}

