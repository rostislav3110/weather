import React from 'react'
import { useApp } from '../utils/context';
import { dark_mode, light_mode } from "../utils/theme_style";
import Weather from './Weather';

export default function Layout() {

    const { isDarkMode } = useApp();
    const currentTheme = isDarkMode ? dark_mode : light_mode;

  return (
    <div style={{ ...currentTheme.app_box}}>
        <Weather/>
    </div>
  )
}
