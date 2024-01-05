import React from 'react'
import Switch from "./Switch";
import { useMyThemeContext } from '../context/MyThemeContext'


export default function ThemeSwitch() {
  const {theme, handleThemeChange, darkMode} = useMyThemeContext()

  return (
    <Switch onChange={handleThemeChange} />

  )
}
