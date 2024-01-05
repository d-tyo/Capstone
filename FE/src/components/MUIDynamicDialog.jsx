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

export default function MUIDynamicDialog({ open, setOpen, student }) {
  const [customDate, setCustomDate] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditStudent = async (event) => {
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
          studentName: fullName,
          userName: userName,
          email: Email,
          password: Password,
          grade: academicTeachingLevel,
          capability: capability,
          location: location,
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
        onSubmit={handleEditStudent}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Edit : {student.studentName}
        </DialogTitle>
        <DialogContent>
              <br />
              <Grid container spacing={2}>
                <FormControl>
                  <Grid item xs={12} />
                  <TextField
                    name="fullName"
                    type="fullname"
                    label="Student Name"
                    defaultValue = {student.studentName}
                    sx={{ borderRadius: 200 }}
                  />
                  <br />
                  <Grid item xs={12} />
                  <TextField
                    name="userName"
                    type="userName"
                    label="User Name"
                    defaultValue = {student.userName}
                    sx={{ borderRadius: 200, width: 400 }}
                  />
                  <Grid />
                  <br />

                  <Grid item xs={12} />
                  <TextField
                    name="email"
                    type="email"
                    label="Email"
                    defaultValue = {student.email}
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
                    defaultValue = {student.grade}
                    label="Grade"
                  />
                  <Grid />
                  <br />

                  <Grid item xs={12} />
                  <TextField
                    name="capability"
                    type="capability"
                    label="Capability"
                    defaultValue = {student.capability}
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
                    defaultValue = {student.contact}
                    sx={{ borderRadius: 200 }}
                  />
                  <Grid />
                  <br />

              

                  <Grid item xs={12} />
                  <TextField
                    name="location"
                    type="location"
                    label="Location"
                    defaultValue = {student.location}
                    sx={{ borderRadius: 200 }}
                  />
                  <Grid />
                  <br />
                </FormControl>
              </Grid>
              {/* Add form or input fields for adding a new student */}
              {/* For example: <input type="text" placeholder="Enter student name" /> */}
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
