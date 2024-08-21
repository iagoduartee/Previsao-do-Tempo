import { Box, Container } from "@mui/material"
import { CustomAppBar } from "../CustomAppBar/CustomAppBar"
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
    return (
        <Container
            style={{ width: "100%", height: "100%", maxWidth: "100%", margin: "0", padding: "0", display: "flex" }}
        >
            <Box width={"100%"} display={"flex"} flexDirection={'column'}>
                <CustomAppBar/>
                <Box>
                    {children}
                </Box>
            </Box>
        </Container>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}