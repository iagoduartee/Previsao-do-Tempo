import { Box, Card, Typography } from "@mui/material"
import PropTypes from 'prop-types';

const CurrentWeatherCard = ({ forecast }) => {
    return (
        <Card style={{display: "flex", flexDirection: "row", padding: "16px", paddingBottom: "0px", paddingLeft: "5%", paddingRight: "5%", boxSizing: "border-box", justifyContent: "space-between", height: 'fit-content' }}>
            <Box display={"flex"} flexDirection={"column"} gap={"32px"}>
                <Box style={{ height: '40%' }}>
                    <Typography variant="h4">
                        {forecast.location.name}
                    </Typography>
                    <Typography variant="h6">
                        {forecast.location.country}
                    </Typography>
                </Box>
                <Box style={{ height: '50%' }}>
                    <Typography variant="h1">
                        {Math.round(forecast.current.temp_c)}°
                    </Typography>
                </Box>
            </Box>
            <img style={{ width: "30%", height: "30%" }} src={forecast.current.condition.icon}></img>
        </Card>
    )
}

CurrentWeatherCard.propTypes = {
    forecast: PropTypes.object
}

export default CurrentWeatherCard;