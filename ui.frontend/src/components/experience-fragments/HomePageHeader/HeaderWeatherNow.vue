<template>
    <div id="headerWeatherNowContainer">
      <p id="city" :key="cityLocation.city">{{ cityLocation.city }}</p>
      <div id="weatherContainer">
        <img id="weatherIcon" :key="weatherItem.current.condition.icon" :src="weatherItem.current.condition.icon"/>
        <p id="temperature" :key="weatherItem.current.temp_c">{{ weatherItem.current.temp_c }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderWeatherNow',
  data () {
    return {
      weatherItem: {},
      cityLocation: {}
    }
  },
  mounted () {
    // -------------- WEATHER API -------------- //
    fetch('https://api.weatherapi.com/v1/current.json?key=5a2ea3478ab34274adb234355220305&q=brazil&aqi=no')
      .then((resp) => resp.json())
      .then(weatherItems => { this.weatherItem = weatherItems })
      .catch((error) => { console.log(error) })

    // -------------- IP API INFO FOR CITY -------------- //
    fetch('https://ipinfo.io/json?token=8d2a7742e850ed')
      .then((response) => response.json())
      .then(cityLocation => { this.cityLocation = cityLocation })
  }
}
</script>

<style lang="scss" scoped>
@import "../../stylesUtils.scss";

#headerWeatherNowContainer{
  @include display-flex-column();

  #city{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 0;
    text-align: center;
    color: #222222;
    margin-bottom: 0;
  }

  #weatherContainer{
    @include display-flex-row();
    align-items: baseline;

      #weatherIcon{
        width: 2vw;
        @include for-size(min-320) { width: 8vw; }
        @include for-size(min-481) { width: 8vw; }
        @include for-size(min-769) { width: 6vw; }
        @include for-size(min-1024) { width: 4vw;}
      }

      #temperature{
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          font-size: 48px;
          line-height: 0;
          text-align: center;
          color: #222222;
      }
  }
}

</style>
