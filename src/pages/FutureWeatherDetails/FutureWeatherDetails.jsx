import { Box, Card, Typography } from "@mui/material";
import { useLocation } from "react-router-dom"
import { convertDate } from "../../utils/dateFormatter";
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast";

const FutureWeatherDetails = () => {
    const location = useLocation();
    if (!location.state) return null
    const { day } = location.state || {};
    const { locationInformation } = location.state || {};
    console.log(locationInformation)

    return (
        <Card style={{ display: "flex", flexDirection: "column", width: "100%", boxSizing: "border-box", justifyContent: "center", justifyItems: "center", marginTop: "32px", paddingTop: "32px" }}>
            <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Typography variant="h5">Previsão para o dia {convertDate(day.date)} em {locationInformation.name}</Typography>
            </Box>
            <HourlyForecast showTitle={false} hour={day.hour} />
        </Card>
    )
}

export default FutureWeatherDetails