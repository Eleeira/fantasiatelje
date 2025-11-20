// useWeather.js
import { useState, useEffect } from 'react'

export function useWeather(lat=59.3293, lon=18.0686) {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=celsius`)
      .then(res => res.json())
      .then(data => {
        setWeather({
          temp: data.current_weather.temperature,
          icon: data.current_weather.weathercode
        })
      })
  }, [lat, lon])

  return weather
}
