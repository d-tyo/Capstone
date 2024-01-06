import axios from "axios";
import { useState } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useCPContext } from "../context/CPContext";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Container, CssBaseline, Box, TextField } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function LessonForm() {
const {currentCP} = useCPContext()
  const [lesson, setLesson] = useState({ preview: "", data: "" });
  const [lessonTitle, setLessonTitle] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // build up all form data to be sent to back end in a FormData object (comes built-in to browser-based JS)
    let formData = new FormData();
    formData.append("file", lesson.data);
    formData.append("lessonTitle", lessonTitle);

    try {
      // post everything from form (including image data) to backend, where we will save the image file to disk using multer middleware
      // https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/
      const response = await axios.post(
        `http://localhost:8080/api/lesson/4/uploadLesson`,
        formData
      ); // see backend for this route
      console.log(response.data);
      setStatus(response.data.result);
      //update current user with new profile photo details
    } catch (err) {
      setStatus(err.message);
    }
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    // create object with data from uploaded image and URL to preview it
    const file = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setLesson(file);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      {currentCP.teacherName ? (
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="LessonTitle"
            autoFocus
            label="Lesson Title"
            name="lessonTitle"
            value={lessonTitle}
            onChange={(e) => setLessonTitle(e.target.value)}
          />
          {/* {image.preview && <img src={image.preview} width='100' height='100' />} */}
         
         {/* Lesson 1 */}
         {lesson.preview === ""? "no file selected": lessonTitle ? lessonTitle: lesson.preview }
          <Button
            type="file"
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            name="lesson"
            onChange={handleFileChange}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      ) : (
        <p>Please log in first</p>
      )}
      <p>{status}</p>
    </Container>
  );
}

export default LessonForm;
