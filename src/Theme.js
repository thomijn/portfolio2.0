import { createMuiTheme } from "@material-ui/core";
import "././Components/App.css"

const theme = createMuiTheme({
    typography: {
        h2: {
            fontFamily: "Montserrat",
            fontSize: 12,
        },
        subtitle1: {
            fontWeight: "400",
            lineHeight: "184.69%",
            letterSpacing: "0.03em",
            fontFamily: "comic sans",
        },
        body1: {
        },
        button: {
            fontStyle: 'italic',
        },
    },
});

export default theme