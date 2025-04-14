# Real-time Weather Dashboard

A modern weather dashboard application that provides real-time weather updates for any city. Built with React, Node.js, and Tailwind CSS.

## Features

- Real-time weather data for any city
- Modern and responsive UI
- Beautiful gradient designs
- Interactive weather cards
- Detailed weather information including:
  - Temperature
  - Wind speed
  - Humidity
  - Weather conditions
  - Weather icons

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Project Structure

```
Realtime-weather-dashboard/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js        # Main application component
│   │   └── index.js      # Entry point
│   ├── package.json
│   └── tailwind.config.js
└── backend/               # Backend Node.js server
    ├── routes/           # API routes
    ├── server.js         # Server configuration
    ├── .env              # Environment variables
    └── package.json
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following content:
   ```
   OPENWEATHER_API_KEY=your_api_key_here
   PORT=4000
   ```

   Note: You need to get an API key from [OpenWeatherMap](https://openweathermap.org/api)

4. Start the backend server:
   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:4000`

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will open in your browser at `http://localhost:3000`

## API Endpoints

- `GET /weather?city={cityName}` - Get weather data for a specific city

## Environment Variables

### Backend (.env)
- `OPENWEATHER_API_KEY` - Your OpenWeatherMap API key
- `PORT` - Port number for the backend server (default: 4000)

## Technologies Used

- Frontend:
  - React
  - Tailwind CSS
  - Axios
  - React Icons

- Backend:
  - Node.js
  - Express
  - Axios
  - dotenv

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from [Heroicons](https://heroicons.com/)
