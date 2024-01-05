import { createTheme, useTheme } from "@mui/material";
import { useMyThemeContext, themes } from "../context/MyThemeContext"
import { purpleThemeSettings } from "../themes/purpleTheme";
import { tealThemeSettings } from "../themes/tealTheme";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "./Switch";


function ThemeSwitch({onChangeTheme}) {
 
  console.log("Theme")

    const theme = useTheme();
    const themeDarkMode = theme.palette.mode == 'dark';

    const handleThemeChange = (e) => {
      console.log("ThemeChange")

      if (theme) {
        let newThemeSettings = { ...tealThemeSettings }; // clone the current settings

        if (
          theme.palette.primary.main == purpleThemeSettings.palette.primary.main
        ) {
          newThemeSettings = { ...purpleThemeSettings }; // switch to purple if activated
        }

        newThemeSettings.palette.mode =
          theme.palette.mode == "dark" ? "light" : "dark"; // override the mode in cloned settings

        const newTheme = createTheme(newThemeSettings); // create new theme with same settings but new mode
        onChangeTheme(newTheme); // update new theme in state
      }
    }
 
    return (
    //    <label><input type="checkbox" checked={themeDarkMode} onChange={handleThemeChange}/> Dark Mode?</label>
    // <FormControlLabel
    //   control={<Switch checked={!themeDarkMode} onClick={ handleThemeChange} />}
    //   // label={themeDarkMode? "Dark Mode" : "Light Mode" }
    // />
    <Switch onChange={handleThemeChange}/>
    )
}

export default ThemeSwitch