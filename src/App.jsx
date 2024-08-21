import "./App.css";
import { Layout } from "./components/Layout/Layout";
import FutureWeatherDetails from "./pages/FutureWeatherDetails/FutureWeatherDetails";
import MainPage from "./pages/MainPage/MainPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WeatherDetails from "./pages/WeatherDetails/WeatherDetails";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/currentWeather" Component={MainPage} />
                    <Route path="/future-weather-details" Component={FutureWeatherDetails} />
                    <Route path="/current-weather-details" Component={WeatherDetails} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
