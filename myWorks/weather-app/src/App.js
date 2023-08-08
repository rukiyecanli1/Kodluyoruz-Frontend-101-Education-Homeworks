import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import Home from './pages/Home';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <header className="App-header">
          <h1>Hava Durumu Uygulaması</h1>
        </header>
        <main>
          <Home />
        </main>
  
      </div>
    </WeatherProvider>
  );
}

export default App;
