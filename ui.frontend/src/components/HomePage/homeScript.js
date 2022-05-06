// START DATE LOGIC
const zeroFill = n => {
  return ('0' + n).slice(-2)
}

const interval = setInterval(() => {
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
function Timer (callback, delay) {
  let timerId
  let start
  let remaining = delay

  this.pause = function () {
    window.clearTimeout(timerId)
    remaining -= new Date() - start
  }

  const resume = function () {
    start = new Date()
    timerId = window.setTimeout(function () {
      remaining = delay
      resume()
      callback()
    }, remaining)
  }
  this.resume = resume

  this.reset = function () {
    remaining = delay
  }
}

const timer = new Timer(function () {
  console.log('Chamou a função!')
  document.location.reload()
}, 600000)
timer.resume()

const duration = 600
let secondsRemaining = duration

function startCountDown (secondsRemaining, timerId) {
  const countInterval = setInterval(function () {
    // sec = parseInt(secondsRemaining % 60)

    timerId = document.querySelector('#count-down-timer')
    timerId.textContent = secondsRemaining

    secondsRemaining = secondsRemaining - 1
    if (secondsRemaining < 0) { clearInterval(countInterval) };
  }, 1000)
}

window.onload = function () {
  const timerId = document.querySelector('#count-down-timer')
  timerId.textContent = secondsRemaining

  startCountDown(--secondsRemaining, timerId)
}
