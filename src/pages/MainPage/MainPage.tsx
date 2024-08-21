import { Box, Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import CurrentWeatherCard from "../../components/CurrentWeatherCard/CurrentWeatherCard";
import NextDaysForecast from "../../components/NextDaysForecast/NextDaysForecast";
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast";
import { useLocation, useNavigate } from "react-router-dom";

const MainPage = () => {
    const location = useLocation();
    const [forecast, setForecast] = useState(location.state ? location.state.forecast : null);
    const navigate = useNavigate();
    console.log(forecast);

    return (
        <>
            {
                forecast?.current && (
                    <Box width={"100%"} display={"flex"} flexDirection={"row"} padding={"32px"} gap={"32px"}>
                        <Box width={"65%"}>
                            <CurrentWeatherCard forecast={forecast} />
                            <HourlyForecast hour={forecast.forecast.forecastday[0].hour} />
                            <Box marginTop={"32px"}>
                                <Button variant="contained" onClick={() => navigate("/current-weather-details", { state: { condition: forecast.current, locationInformation: forecast.location } })}>Informações Extras</Button>
                            </Box>
                        </Box>
                        <Box width={"35%"} display={"flex"} flexDirection={"column"} gap={"32px"}>
                            <NextDaysForecast forecast={forecast} />
                        </Box>
                    </Box>
                )
            }
        </>

    )
}

export default MainPage;