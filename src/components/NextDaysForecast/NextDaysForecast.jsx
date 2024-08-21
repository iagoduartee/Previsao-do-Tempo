import { Box, Button, Card, Typography } from "@mui/material"
import { convertDate } from "../../utils/dateFormatter"
import PropTypes from 'prop-types';
import ZoomIn from '@mui/icons-material/ZoomIn';
import { useNavigate } from "react-router-dom";

const NextDaysForecast = ({ forecast }) => {
    const navigate = useNavigate();

    return (
        <>
            <Card style={{ display: "flex", flexDirection: "column", width: "100%", boxSizing: "border-box", justifyContent: "center", justifyItems: "center" }}>
                <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Typography variant="h5">Previsão para os próximos dias:</Typography>
                </Box>
                {forecast.forecast.forecastday.map((day) => (
                    <Box key={day.date} style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", padding: "16px", boxSizing: "border-box", justifyContent: "space-between" }}>
                        <Box style={{width: "25%"}}>
                            <Typography variant="body1">
                                {convertDate(day.date)}
                            </Typography>
                        </Box>
                        <Box style={{width: "25%"}}>
                            <img style={{ width: "100px", height: "100px" }} src={day.day.condition.icon}></img>
                        </Box>
                        <Box style={{width: "25%"}}>
                            <Typography variant="body1">
                                {day.day.condition.text}
                            </Typography>
                        </Box>
                        <Box style={{width: "10%"}}>
                            <Typography variant="body1">
                                <span style={{ fontWeight: "bold" }}>{Math.round(day.day.maxtemp_c)}</span>/<span>{Math.round(day.day.mintemp_c)}</span>°
                            </Typography>
                        </Box>
                        <Box style={{width: "10%"}}>
                            <Button onClick={() => navigate(`/future-weather-details`, { state: { day: day, locationInformation: forecast.location } })}>
                                <ZoomIn />
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Card >
        </>

    )
}

NextDaysForecast.propTypes = {
    forecast: PropTypes.object
}

export default NextDaysForecast