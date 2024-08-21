import { alpha, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apikey } from "../../constants/api";

const CustomSearch = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        width: '1000px',
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Search = () => {
    const [currentSearch, setCurrentSearch] = useState("");

    const [forecast, setForecast] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async (locationName) => {
        await axios.get("https://api.weatherapi.com/v1/forecast.json", {
            params: {
                key: apikey,
                days: 10,
                q: locationName
            }
        }).then((response) => {
            setForecast(response.data);
            navigate("/currentWeather", {state: { forecast: response.data } });
        })
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(currentSearch);
        }
    }

    return (
        <CustomSearch onChange={(e) => setCurrentSearch(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} style={{ width: "100%" }}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                style={{ width: "100%" }}
                placeholder="Qual cidade voce procura?"
                inputProps={{ 'aria-label': 'search' }}
            />
        </CustomSearch>
    )
}

Search.propTypes = {
    onSearch: PropTypes.func
}

export default Search;