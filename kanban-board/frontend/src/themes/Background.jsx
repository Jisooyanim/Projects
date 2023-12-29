// Background.jsx
import { createTheme } from '@mui/material/styles';
import { colors } from "./colors";

export const Background = createTheme({
    palette: {
        background: {
            default: colors.black,
        },
    },
});
