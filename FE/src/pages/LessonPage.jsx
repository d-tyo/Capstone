import { useData } from "../hooks/useData";
import { lessobjarr } from "../data/data";
import { useCPContext } from "../context/CPContext";
import React, { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FormControl from "@mui/material/FormControl";
import LessonList from "../components/LessonList";
import LessonForm from "../components/LessonForm";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { Link } from "react-router-dom";

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
  const { currentCP } = useCPContext();
  const lessons = useData("http://localhost:8080/api/lesson", []);

  lessobjarr.rows = lessons.map (lesson => ({...lesson, filePath : <Link href={lesson.filePath}> (open PDF) </Link> }));
  console.log(lessobjarr.rows)

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    window.location.reload(); //refresh the page
  };

  const handleAddLesson = async (event) => { //Add lesson not a file 
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    let subject = data.get("subject");
    let academicTeachingLevel = data.get("academic teaching level");
    let type = data.get("type");
    let title = data.get("title");
    let filePath = data.get("filePath");
    let comment = data.get("comment");

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

      {/* Add an Icon button for adding lessons */}
     

      {Array.isArray(lessobjarr.rows) ? <LessonList data={lessobjarr} /> : null}
 

      <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
        <IconButton aria-label="add" size="small" onClick={handleOpenDialog}>
          <CreateNewFolderIcon fontSize="medium" />
        </IconButton>
      </Stack>

      <LessonForm />

      {/* Dialog for adding a new Lesson*/}
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
                name="academic teaching level"
                type="academic teaching level"
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
              <TextField 
              name="filePath" 
              type="filePath" 
              label="File Path" />
              <Grid />
              <br />

              <Grid item xs={12} />
              <TextField 
              name="comment" type="comment" label="Comment" />
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
