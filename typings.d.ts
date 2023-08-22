interface CurrentWeather {
    is_day: number;
    temperature: number;
    time: string;
    weathercode: number;
    winddirection: number;
    windspeed: number
  }
  
  interface Daily {
    temperature_2m_max: [number];
    time: [string];
    weathercode: [number];
  }
  
  interface DailyUnits {
    temperature_2m_max: String;
    time: String;
    weathercode: String;
  }
  
  interface Hourly {
    apparent_temperature: [number];
    dewponumber_2m: [number];
    precipitation_probability: [number];
    relativehumidity_2m: [number];
    temperature_2m: [number];
    time: [string];
    uv_index: [number];
    uv_index_clear_sky: [number];
  }
  
  interface HourlyUnits {
    apparent_temperature: String;
    dewponumber_2m: String;
    precipitation_probability: String;
    relativehumidity_2m: String;
    temperature_2m: String;
    time: String;
    uv_index: String;
    uv_index_clear_sky: String;
  }
  
  interface Root {
    current_weather: CurrentWeather;
    daily: Daily;
    daily_units: DailyUnits;
    elevation: number;
    generationtime_ms: number;
    hourly: Hourly;
    hourly_units: HourlyUnits;
    latitude: number;
    longitude: number;
    timezone: String;
    timezone_abbreviation: String;
    utc_offset_seconds: number;
  }