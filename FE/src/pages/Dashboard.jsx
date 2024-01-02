import React from 'react'
import bannerImage from "../assets/bannerImage.png";
import Typography from  "@mui/material/Typography"

export default function Dashboard() {
  return (
<>
<Typography> WELCOME TO CIRCLE PLAY </Typography>
<img src={bannerImage} width="100%" alt="banner image" />
<h3> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tooka galley of type and scrambled it to make a type specimen book</h3>
</>
  )
}
