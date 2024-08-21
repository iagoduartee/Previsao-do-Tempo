import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import Search from '../Search/Search'

export const CustomAppBar = () => {
    return (
        <AppBar style={{ display: "flex", flexDirection: "row", alignItems: "center", position: "relative" }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Previsão do Tempo dos Cria
                </Typography>
            </Toolbar>
            <Box width={"25%"}>
                <Search />
            </Box>
        </AppBar>
    )
}