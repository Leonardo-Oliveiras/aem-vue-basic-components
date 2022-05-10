window.onload = function () {
  // START DATE LOGIC
  const zeroFill = n => {
    return ('0' + n).slice(-2)
  }

  setInterval(() => {
    const now = new Date()

    const day = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'][now.getDay()]
    const dateFull = now.getDate()
    const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'][now.getMonth()]
    const year = now.getFullYear()

    const hour = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes())
    const date = day + ', ' + 'de ' + dateFull + ' de ' + month + ' de ' + year

    // Exibe na tela usando a div#data-hora
    document.getElementById('hour').innerHTML = hour
    document.getElementById('date').innerHTML = date
  }, 1000)

  // END DATE LOGIC

  // START WEATHER LOGIC
  const url = 'https://api.weatherapi.com/v1/current.json?key=5a2ea3478ab34274adb234355220305&q=brazil&aqi=no'

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      const temp = data.current.temp_c
      const img = document.createElement('IMG')
      img.src = data.current.condition.icon
      img.id = 'iconWeather'

      document.getElementById('temp').innerHTML = temp + '°'
      document.getElementById('weatherIcon').appendChild(img)
    })
  // END WEATHER LOGIC

  // START CITY LOGIC
  fetch('https://ipinfo.io/json?token=8d2a7742e850ed')
    .then(
      (response) => response.json())
    .then(function (jsonResponse) {
      document.getElementById('city').innerHTML = (jsonResponse.city)
    }
    )
  // END CITY LOGIC

  const duration = 600
  let secondsRemaining = duration

  function startCountDown (secondsRemaining, timerId) {
    const countInterval = setInterval(function () {
      timerId = document.querySelector('#count-down-timer')
      timerId.innerHTML = secondsRemaining
      secondsRemaining = secondsRemaining - 1

      if (secondsRemaining < 0) { window.location = 'Compass-Login.html' }

      const btn = document.getElementById('btnContinue')

      btn.onclick = function () {
        if (secondsRemaining > 0) { secondsRemaining = 600 }
      }
    }, 1000)
  }

  const timerId = document.querySelector('#count-down-timer')
  timerId.innerHTML = secondsRemaining
  startCountDown(--secondsRemaining, timerId)
}
