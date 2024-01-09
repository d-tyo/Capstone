import { earlyChildhoodTheme, earlyChildhoodSettings } from "./earlyChildhoodTheme";
import {primaryTheme, primarySettings} from "./primaryTheme";
import {secondaryTheme, secondarySettings} from "./secondaryTheme";
import {tertiaryTheme, tertiarySettings} from "./tertiaryTheme";
import {defaultTheme, defaultSettings} from "./defaultTheme";


export const themeList =  new Map();
themeList.set("Default" , [defaultTheme, defaultSettings])
themeList.set("Early Childhood" , [earlyChildhoodTheme, earlyChildhoodSettings])
themeList.set("Primary" , [primaryTheme, primarySettings])
themeList.set("Secondary" , [secondaryTheme, secondarySettings])
themeList.set("Tertiary" , [tertiaryTheme, tertiarySettings])
