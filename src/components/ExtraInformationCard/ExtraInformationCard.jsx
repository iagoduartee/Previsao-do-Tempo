import { Box, Card, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import React from "react";

const ExtraInformationCard = ({ value, title, unit, icon }) => {
    const formattedIcon = React.cloneElement(icon, { style: { fontSize: '72px' }});

    return (
        <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
            <Typography variant="h5">{title}</Typography>
            <Card style={{ display: "flex", flexDirection: "row", padding: "16px", gap: "32px", minHeight:"130px", minWidth:"250px", justifyContent: "space-between"}}>
                <Box display={"flex"} flexDirection={"column"} >
                    <Typography style={{ fontWeight: "bold" }} variant="h2">{value}</Typography>
                    <Typography variant="body1">{unit.charAt(0).toUpperCase().concat(unit.slice(1))} </Typography>
                </Box>
                {formattedIcon}
            </Card>
        </Box>
    );
}

ExtraInformationCard.propTypes = {
    value: PropTypes.string || PropTypes.number,
    title: PropTypes.string,
    unit: PropTypes.string,
    icon: PropTypes.object
}

export default ExtraInformationCard;