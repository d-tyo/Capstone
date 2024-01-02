import React from 'react'
import Typography from '@mui/material/Typography'


export default function SingleLessonComponent(props) {
console.log(props.lesson[0])

  return (
    <div> 
    <Typography>
        Subject:
        {/* {props.lesson[0].subject} */}
        <br/>
        Title:
        <br/>
        Type:
        <br/>
        Grade:
        <br/>
        Completed By Student Name
        <br/>
        Comment: 
        <br/>
    </Typography>
    </div>
  )
}
