import LessonList from "../components/LessonList";
import { useData } from "../hooks/useData";
import { lessobjarr } from "../data/data";
import LessonForm from "../components/LessonForm";
import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";


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

export default function LessonPage() {
  const Lessons = useData("http://localhost:8080/api/lesson");

  lessobjarr.rows = Lessons;

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    window.location.reload(); //refresh the page
  };

  const handleAddLesson = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    let subject = data.get("subject");
    let academicTeachingLevel = data.get("academic teaching level");
    let type = data.get("type");
    let title= data.get("title");
    let filePath = data.get("filePath");

    let loggedInUser = null;

    try {
      let response = await axios.post(
        `http://localhost:8080/api/lesson/create`,
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

      // stuobjarr.rows.push(response.data);

      loggedInUser = response.data;
      handleCloseDialog();
      console.log(loggedInUser);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {Array.isArray(lessobjarr.rows) ? <LessonList data={lessobjarr} /> : null}
      <LessonForm />

      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton aria-label="add" size="small" onClick={handleOpenDialog}>
          <PersonAddAlt1Icon fontSize="medium" />
        </IconButton>
      </Stack>
      {/* Dialog for adding a new student */}

      <Dialog
        component="form"
        open={openDialog}
        onSubmit={handleAddLesson}
        onClose={handleCloseDialog}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle>Add New Lesson</DialogTitle>
        <DialogContent>
          <br />
          <Grid container spacing={2}>
            <FormControl>
              <Grid item xs={12} />
              <TextField
                name="teacherId"
                type="teacherId"
                label="Teacher Id"
                sx={{ borderRadius: 200 }}
              />
              <br />
              <Grid item xs={12} />
              <TextField
                name="subject"
                type="subject"
                label="Subject"
                sx={{ borderRadius: 200, width: 400 }}
              />
              <Grid />
              <br />

              <Grid item xs={12} />
              <TextField
                name="grade"
                type="grade"
                label="Grade"
                sx={{ borderRadius: 200, width: 400 }}
              />
              <Grid />
              <br />

              <Grid item xs={12} />
              <TextField
                name="type"
                type="type"
                label="Type"
                sx={{ borderRadius: 200 }}
              />
              <Grid />
              <br />

              <Grid item xs={12} />
              <TextField
                name="title"
                type="title"
                label="Title"
                sx={{ borderRadius: 200 }}
              />
              <Grid />
              <br />

              <Grid item xs={12} />
              <TextField name="file Path" type="file Path" label="File Path" />
              <Grid />
              <br />

              <Grid item xs={12} />
              <TextField name="comment" type="comment" label="Comment" />
              <Grid />
              <br />
            </FormControl>
          </Grid>
          {/* Add form or input fields for adding a new lesson */}
          {/* For example: <input type="text" placeholder="Enter lesson name" /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>

          <Button type="submit">Add Lesson</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
