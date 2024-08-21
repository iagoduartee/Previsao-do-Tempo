/* eslint-disable react/prop-types */
import { Box, Card, Typography } from '@mui/material';

import { extractHourFromDate } from '../../utils/extractHourFromDate';


const HourlyForecast = ({ hour: daysHour, showTitle = true }) => {
    const selectedHours = daysHour.filter((hour) =>
        ["04:00", "08:00", "12:00", "16:00", "18:00", "20:00", "24:00"].includes(extractHourFromDate(hour.time))
    );

    return (
        <Card style={{ display: "flex", flexDirection: "column", width: "100%", boxSizing: "border-box", justifyContent: "center", justifyItems: "center", marginTop: "32px" }}>
            <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                { showTitle ? <Typography variant="h5">Previsão para o tempo de hoje:</Typography> : null } 
            </Box>
            <Box style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", padding: "16px", boxSizing: "border-box", justifyContent: "space-between" }}>
                {
                    selectedHours.map((hour, index) => (
                        <Box key={index}>
                            <Box style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "16px", boxSizing: "border-box", justifyContent: "space-between" }}>
                                <Typography variant="body1">
                                    {extractHourFromDate(hour.time)}
                                </Typography>
                                <img style={{ width: "100px", height: "100px" }} src={hour.condition.icon}></img>
                                <Typography variant="body1">
                                    {Math.round(hour.temp_c)}°
                                </Typography>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Card>
    )
}

export default HourlyForecast