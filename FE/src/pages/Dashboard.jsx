import React from 'react'
import bannerImage from "../assets/bannerImage.png";
import Typography from  "@mui/material/Typography"
import LessonAlert from '../components/LessonAlert';
import { useCPContext } from '../context/CPContext';
import Media from '../components/Media';


export default function Dashboard() {
  const {currentCP} = useCPContext()
  return (
<>
{currentCP.userName ? <LessonAlert/> : null} 
{currentCP.userName ?<Typography> WELCOME <strong>{currentCP.studentName}</strong> TO CIRCLE PLAY </Typography> : <Typography> WELCOME <strong>{currentCP.teacherName}</strong> TO CIRCLE PLAY </Typography>} 

<br/>
<img src={bannerImage} width="100%" alt="bannerImage" />
<h3> Circle Play Vision is to be a source of meaningful and interactive content that not only brings joy and entertainment to our users but also fosters learning, inspires creativity, and connects communities. We believe that every circle we create is an opportunity to bring people together and offer experiences that have a lasting, positive impact on their lives.</h3>
<br/>
<Media/>
</>
  )
}
