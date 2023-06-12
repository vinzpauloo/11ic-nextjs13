// ** MUI Imports
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiMenu: {
            styleOverrides: {
                list: {
                    paddingTop: 0,
                    paddingBottom: 0,
                },
            },
        },
    },
});
