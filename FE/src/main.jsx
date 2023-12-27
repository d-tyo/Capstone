import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { LicenseInfo } from '@mui/x-license-pro';

LicenseInfo.setLicenseKey('d3f7dd3b87b4cb6efb321f7424b89045Tz04MTIyMyxFPTE3MzUzNDM2MjQwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=');
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
