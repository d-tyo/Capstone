import React, { useState } from "react";
import StudentList from "../components/StudentList";
import axios from "axios";
import { useData } from "../hooks/useData";
import { stuobjarr } from "../data/data";
import { useCPContext } from "../context/CPContext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FormControl from "@mui/material/FormControl";
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
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

export default function StudentPage() {
  const {teachers,handleUpdateCP} = useTeacherContext()
  const { currentCP } = useCPContext;
  const students = useData("http://localhost:8080/api/student");
  const teacherarray = useData("http://localhost:8080/api/teacher");

  handleUpdateCP(teacherarray) // saved in Teacher Context

  stuobjarr.rows = students;
  console.log("studentPage", students);

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddStudent = async (event) => {
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
    let dateOfBirth = data.get("date of birth");
    let contact = data.get("contact");

    let loggedInUser = null;

    try {
      let response = await axios.post(
        `http://localhost:8080/api/student/create`,
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

      stuobjarr.rows.push(response.data)

      loggedInUser = response.data;
      handleCloseDialog()
      console.log(loggedInUser);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {Array.isArray(stuobjarr.rows) ? (
        <div>
          <StudentList data={stuobjarr} />

          {/* Add an Icon button for adding students */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
              aria-label="add"
              size="small"
              onClick={handleOpenDialog}
            >
             <PersonAddAlt1Icon fontSize="medium"/>
             
            </IconButton>
          </Stack>
          {/* Dialog for adding a new student */}

          <Dialog
            component="form"
            open={openDialog}
            onSubmit={handleAddStudent}
            onClose={handleCloseDialog}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle>Add New Student</DialogTitle>
            <DialogContent>
              <br />
              <Grid container spacing={2}>
                <FormControl>
                  <Grid item xs={12} />
                  <TextField
                    name="fullName"
                    type="fullname"
                    label="Student Name"
                    sx={{ borderRadius: 200 }}
                  />
                  <br />
                  <Grid item xs={12} />
                  <TextField
                    name="userName"
                    type="userName"
                    label="User Name"
                    sx={{ borderRadius: 200, width: 400 }}
                  />
                  <Grid />
                  <br />

                  <Grid item xs={12} />
                  <TextField
                    name="email"
                    type="email"
                    label="Email"
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
                    label="Grade"
                  />
                  <Grid />
                  <br />

                  <Grid item xs={12} />
                  <TextField
                    name="capability"
                    type="capability"
                    label="Capability"
                  />
                  <Grid />
                  <br />

                  <Grid item xs={12} />
                  <TextField
                    name="contact"
                    type="contact"
                    label="Contact"
                    sx={{ borderRadius: 200 }}
                  />
                  <Grid />
                  <br />

                  <Grid item xs={12} />
                  <TextField
                    name="date of birth"
                    type="date of birth"
                    label="Date Of Birth"
                    sx={{ borderRadius: 200 }}
                  />
                  <Grid />
                  <br />

                  <Grid item xs={12} />
                  <TextField
                    name="location"
                    type="location"
                    label="Location"
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
              <Button onClick={handleCloseDialog}>Cancel</Button>
           

              <Button
      
                type="submit"
             
              
              >
                Add Student
              </Button>
            </DialogActions>
          </Dialog>

     
        </div>
      ) : null}
    </>
  );
}
