import React, { useState, useEffect } from "react";
import { useData } from "../hooks/useData";
import { stuobjarr } from "../data/data";
import { useCPContext } from "../context/CPContext";
import { useTeacherContext } from "../context/TeacherContext";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import StudentList from "../components/StudentList";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import DateChange from "../components/DateChange";

import EditIcon from "@mui/icons-material/Edit";
import { GridActionsCellItem } from "@mui/x-data-grid";
import MUIDynamicDialog from "../components/MUIDynamicDialog";

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
  //const { teachers, handleUpdateCP } = useTeacherContext();

  const actionscol = {
    getActions: (params) => {
      const [isEditDialogOpen, setIsEditDialogOpen] = useState(false); //field edit

      return [
        <MUIDynamicDialog
          open={isEditDialogOpen}
          setOpen={setIsEditDialogOpen}
          student={params.row}
        />,

        <GridActionsCellItem
          showInMenu
          icon={<EditIcon />}
          label="Edit"
          onClick={() => {
            setIsEditDialogOpen(true);
            // console.log("Edit", params.row.studentName);
          }}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => {
            // send a request to BE to delete
            axios.delete(`api/student/${params.row.id}`)
            .then((response) => {
              handleDeleteStudent(params.row);
              console.log("delete", params.row);
            });
          }}
        />,
      ];
    },
  };

  // add our custom actions (including the delete function) to the original student table
  const studentTableColumns = {...stuobjarr, columns: stuobjarr.columns.map(stucol => stucol.field == 'actions' ? {...stucol, ...actionscol} : stucol)}

  const { currentCP } = useCPContext();
  const [customDate, setCustomDate] = useState(false);
  const [studentTable, setStudentTable] = useState(studentTableColumns);
  // const students = useData("http://localhost:8080/api/student");
  //const teacherarray = useData("http://localhost:8080/api/teacher");

  useEffect(() => {
    axios.get("/api/student").then((response) => {
      const students = response.data.data;
      setStudentTable({ ...studentTable, rows: students });
    });
  }, []);
  console.log(studentTable)

  //handleUpdateCP(teacherarray); // saved in Teacher Context

  // stuobjarr.rows = students; //stuobjarr changed = students
  // console.log("studentPage", students);

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    //window.location.reload(); //refresh the page
  };

  const handleAddStudent = async (event) => {
    // Add Student
    event.preventDefault();
    const data = new FormData(event.currentTarget);

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

    try {
      let response = await axios.post(
        //create the file path lists
        `http://localhost:8080/api/student/create`,
        {
          studentName: fullName,
          teacherId: currentCP.id,
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

      newStudent = response.data;
      // add new student to table
      setStudentTable(prevStudentTable => ({...prevStudentTable, rows: [...prevStudentTable.rows, newStudent]}))

      handleCloseDialog();
      console.log(newStudent);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDeleteStudent = (delstudent) => {
    setStudentTable(prevStudentTable => ({...prevStudentTable, rows: prevStudentTable.rows.filter(student => student.id != delstudent.id)}))
  }

  return (
    <>
      {Array.isArray(stuobjarr.rows) ? (
        <div>
          <StudentList data={studentTable} column={studentTable.columns} onDeleteStudent={handleDeleteStudent}/>
          {currentCP.teacherName ? (
            <>
              {/* Add an Icon button for adding students */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                  aria-label="add"
                  size="small"
                  onClick={handleOpenDialog}
                >
                  <PersonAddAlt1Icon fontSize="medium" />
                </IconButton>
              </Stack>
              {/* Dialog for adding a new student */}{" "}
            </>
          ) : null}

          <Dialog
            component="form"
            open={openDialog}
            onSubmit={handleAddStudent} //add student
            onClose={handleCloseDialog}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle>Add New Student</DialogTitle>
            <DialogContent>
              <br />
              <Grid container spacing={2}>
                <Grid item sx={12}>
                  <FormControl>
                    <TextField
                      name="fullName"
                      type="fullname"
                      label="Student Name"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 12, marginBottom: 2 }}
                    />
                    <TextField
                      name="userName"
                      type="userName"
                      label="User Name"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 12, marginBottom: 2 }}
                    />
                    <TextField
                      name="email"
                      type="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 12, marginBottom: 2, maxWidth: 400, }}
                    />
                    <TextField
                      name="password"
                      label="Password"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 12, marginBottom: 2 }}
                    />
                    <TextField
                      name="academicTeachingLevel"
                      type="academicTeachingLevel"
                      label="Grade"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 12, marginBottom: 2 }}
                    />
                    <TextField
                      name="capability"
                      type="capability"
                      label="Capability"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 12, marginBottom: 2 }}
                    />
                    <TextField
                      name="contact"
                      type="contact"
                      label="Contact"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 12, marginBottom: 2 }}
                    />
                    <DateChange setDueDate={setCustomDate} />
                    <TextField
                      name="location"
                      type="location"
                      label="Location"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 12, marginBottom: 2 }}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              {/* Add form or input fields for adding a new student */}
              {/* For example: <input type="text" placeholder="Enter student name" /> */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>

              <Button type="submit">Add Student</Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : null}
    </>
  );
}
