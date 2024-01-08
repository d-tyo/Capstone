import { createTheme, useTheme } from "@mui/material";
import { purpleThemeSettings } from "../themes/purpleTheme";
import { tealThemeSettings } from "../themes/tealTheme";

function DarkModeSwitch({onChangeTheme}) {
 
    const theme = useTheme();
    const themeDarkMode = theme.palette.mode == 'dark'; // if custom theme, use darkMode boolean, otherwise check MUI theme mode

    const handleThemeChange = (e) => {
       

        // if we're using the MUI theming, dark mode should activate the MUI dark mode in the current theme
        if (theme) {
            let newThemeSettings = {...tealThemeSettings}; // clone the current settings

            if (theme.palette.primary.main == purpleThemeSettings.palette.primary.main) {
                newThemeSettings = {...purpleThemeSettings}; // switch to purple if activated
            } 

            newThemeSettings.palette.mode = theme.palette.mode == 'dark' ? 'light' : 'dark'; // override the mode in cloned settings

            const newTheme = createTheme(newThemeSettings); // create new theme with same settings but new mode
            onChangeTheme(newTheme) // update new theme in state         
        }
    }

    return (
        <label><input type="checkbox" checked={themeDarkMode} onChange={handleThemeChange}/> Dark Mode?</label>
    )
}

export default DarkModeSwitch