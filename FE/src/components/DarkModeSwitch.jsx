import { createTheme, useTheme } from "@mui/material";
import { purpleThemeSettings } from "../themes/purpleTheme";
import { tealThemeSettings } from "../themes/tealTheme";
import { themeList } from "../themes/themeList";
import { useCPContext } from "../context/CPContext";

function DarkModeSwitch({onChangeTheme}) {
 
    const theme = useTheme();
    const themeDarkMode = theme.palette.mode == 'dark'; // if custom theme, use darkMode boolean, otherwise check MUI theme mode
    const { currentCP, handleUpdateCP } = useCPContext();

    const handleThemeChange = (e) => {
       

        // if we're using the MUI theming, dark mode should activate the MUI dark mode in the current theme
        if (theme) {
            let [,newThemeSettings] = themeList.get(currentCP.level ? currentCP.level : "Default")
            // , ignore the first arr

            newThemeSettings.palette.mode = theme.palette.mode == 'dark' ? 'light' : 'dark'; // override the mode in cloned settings

            const newTheme = createTheme(newThemeSettings); // create new theme with same settings but new mode
            onChangeTheme(newTheme) // update new theme in state         
        }
    }

    return (
        <label><input type="checkbox" checked={themeDarkMode} onChange={handleThemeChange} style={{ borderRadius: "100%"}}/> Dark Mode</label>
    )
}

export default DarkModeSwitch