import React from 'react'
import bannerImage from "../assets/bannerImage.png";
import Typography from  "@mui/material/Typography"
import LessonAlert from '../components/LessonAlert';
import { useCPContext } from '../context/CPContext';

export default function LandingPage() {
 
  return (
    <div className="LandingPage">
    <img src={bannerImage} width="100%" alt="banner image" />
   <h1> ▶ Spinning Circles, Playing Joy: Where Fun Takes Center Stage! ▶</h1>
   <p>
     Welcome to Circle Play and explore our <em>New</em> amazing features and have fun translating text with our cool
     translator!⋆｡°✩
   </p>
 </div>

  )
}
