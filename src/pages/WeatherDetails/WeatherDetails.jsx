import { useLocation } from "react-router-dom";
import ExtraInformationCard from "../../components/ExtraInformationCard/ExtraInformationCard";
import AirIcon from '@mui/icons-material/Air';
import { Box, Typography } from "@mui/material";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SunnyIcon from '@mui/icons-material/WbSunny';

const WeatherDetails = () => {
    const location = useLocation();
    const condition = location.state ? location.state.condition : null;
    const locationInformation = location.state ? location.state.locationInformation : null;

    console.log(locationInformation);

    return (
        <Box>
            <Typography variant="h5" style={{ padding: "32px" }}>Informações adicionais sobre o tempo em <span style={{ fontWeight: "bold" }}>{locationInformation?.name}</span>:</Typography>
            <Box display={"flex"} flexDirection={"row"} gap={"32px"} padding={"32px"}>
                <ExtraInformationCard value={condition.wind_kph} title="Vento" unit="km/h" icon={<AirIcon />} />
                <ExtraInformationCard value={condition.humidity + "%"} title="Umidade" unit="" icon={<WaterDropIcon />} />
                <ExtraInformationCard value={condition.pressure_in} title="Pressão Atm." unit="In/Hg" icon={<ArrowDownwardIcon />} />
                <ExtraInformationCard value={condition.uv} title="UV" unit="" icon={<SunnyIcon />} />
            </Box>
        </Box>
    )
}

export default WeatherDetails;