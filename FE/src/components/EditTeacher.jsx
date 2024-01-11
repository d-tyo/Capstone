import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DateChange from './DateChange';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {useState} from "react"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useTeacherContext } from "../context/TeacherContext";



function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function EditTeacher({ open, setOpen, teacher }) {
  const [customDate, setCustomDate] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload()
  };

  const handleEditTeacher = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    let fullName = data.get("fullName");
    let Email = data.get("email");
    let Password = data.get("password");
    let academicTeachingLevel = data.get("academic teaching level");
    let capability = data.get("capability");
    let userName = data.get("userName");
    let location = data.get("location");
    let registrationId = data.get("registration id");
    let dateOfBirth = customDate;
    let contact = data.get("contact");

    let loggedInUser = null;

    try {
      let response = await axios.put(
        `http://localhost:8080/api/student/${student.id}`,
        {
          teacherName: fullName,
          email: Email,
          password: Password,
          level: academicTeachingLevel,
        registrationId: registrationId,
          contact: contact,
          DOB: dateOfBirth,
        }
      );


      loggedInUser = response.data;
      handleClose()
      console.log(loggedInUser);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Dialog
        component="form"
        open={open}
        onClose={handleClose}
        onSubmit={handleEditTeacher}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Edit : {teacher.teacherName}
        </DialogTitle>
        <DialogContent>
              <br />
              <Grid container spacing={2}>
                <FormControl>
                  <Grid item xs={12} />
                  <TextField
                    name="fullName"
                    type="fullname"
                    label="Teacher Name"
                    defaultValue = {teacher.teacherName}
                    sx={{ borderRadius: 200 }}
                  />
                  <br />
               
                  <Grid item xs={12} />
                  <TextField
                    name="email"
                    type="email"
                    label="Email"
                    defaultValue = {teacher.email}
                    sx={{ borderRadius: 200, width: 400 }}
                  />
                  <Grid />
                  <br />

                  <Grid item xs={12} />
                  <TextField
                    name="password"
                    label="Password"
                    sx={{ borderRadius: 200 }}
                  />
                  <Grid />
                  <br />

                  <Grid item xs={12} />
                  <TextField
                    name="academic teaching level"
                    type="academic teaching level"
                    defaultValue = {teacher.level}
                    label="Level"
                  />
                  <Grid />
                  <br />

                  <Grid item xs={12} />
                  <TextField
                    name="capability"
                    type="capability"
                    label="Registration Id"
                    defaultValue = {teacher.capability}
                  />
                  <Grid />
                  <br />

                  <Grid item xs={12} />
                  <DateChange setDueDate = {setCustomDate}/>
                  <Grid />
                  <br />

                  <Grid item xs={12} />
                  <TextField
                    name="contact"
                    type="contact"
                    label="Contact"
                    defaultValue = {teacher.contact}
                    sx={{ borderRadius: 200 }}
                  />
                  <Grid />
                  <br />

              

                </FormControl>
              </Grid>
              {/* Add form or input fields for adding a new teacher */}
              {/* For example: <input type="text" placeholder="Enter teacher name" /> */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
           

              <Button 
               
                 type="submit
                 ">
                Edit
              </Button>
            </DialogActions>
      </Dialog>
    </>
  );
}
