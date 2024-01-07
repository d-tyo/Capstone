import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DateChange from "./DateChange";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useTeacherContext } from "../context/TeacherContext";
import { useCPContext } from "../context/CPContext";

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

export default function EditLesson({ open, setOpen, lesson }) {
    const { currentCP } = useCPContext();
   
  const [customDate, setCustomDate] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(); //refresh page
  };

  const handleEditLesson = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    let subject = data.get("subject");
    let academicTeachingLevel = data.get("grade");
    let type = data.get("type");
    let title = data.get("title");
    let filePath = data.get("filePath");
    let comment = data.get("comment");

    let loggedInUser = null;

    try {
      let response = await axios.put(
        `http://localhost:8080/api/lesson/${lesson.id}`,
        {
          teacherId: currentCP.id,
          subject: subject,
          grade: academicTeachingLevel,
          type: type,
          title: title,
          filePath: filePath,
          comment: comment,
        }
      );

      loggedInUser = response.data;
      handleClose();
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
        onSubmit={handleEditLesson}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Edit :  {lesson.title}
        </DialogTitle>
        <DialogContent>
          <br />
          <Grid container spacing={2}>
            <FormControl>
              <Grid item xs={12} />
              <TextField
                name="teacherId"
                type="teacherId"
                label="Teacher Id"
                defaultValue = {lesson.teacherId}
                sx={{ borderRadius: 200 }}
              />
              <br />
              <Grid item xs={12} />
              <TextField
                name="subject"
                type="subject"
                label="Subject"
                defaultValue = {lesson.subject}
                sx={{ borderRadius: 200, width: 400 }}
              />
              <Grid />
              <br />

              <Grid item xs={12} />
              <TextField
                name="grade"
                type="grade"
                label="Grade"
                defaultValue = {lesson.grade}
                onChange={e => console.log(e.target.value)}
                sx={{ borderRadius: 200, width: 400 }}
              />
              <Grid />
              <br />

              <Grid item xs={12} />
              <TextField
                name="type"
                type="type"
                label="Type"
                defaultValue = {lesson.type}
                sx={{ borderRadius: 200 }}
              />
              <Grid />
              <br />

              <Grid item xs={12} />
              <TextField
                name="title"
                type="title"
                label="Title"
                defaultValue = {lesson.title}
                sx={{ borderRadius: 200 }}
              />
              <Grid />
              <br />

              <Grid item xs={12} />
              <TextField name="filePath" type="filePath" label="File Path" />
              <Grid />
              <br />

              <Grid item xs={12} />
              <TextField name="comment" type="comment" label="Comment"     defaultValue = {lesson.comment} />
              <Grid />
              <br />
            </FormControl>
          </Grid>
          {/* Add form or input fields for adding a new lesson */}
          {/* For example: <input type="text" placeholder="Enter lesson name" /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          <Button
            type="submit
                 "
          >
            Edit File
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
