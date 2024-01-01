import React, { useState } from 'react';
import StudentList from '../components/StudentList';
import { useData } from '../hooks/useData';
import { stuobjarr } from '../data/data';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export default function StudentPage() {
  const students = useData('http://localhost:8080/api/student');
  stuobjarr.rows = students;
  console.log(students);

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddStudent = () => {
    // Add logic to add a new student to the list
    // You can update the state or perform other actions here
    handleCloseDialog();
  };

  return (
    <>
      {Array.isArray(stuobjarr.rows) ? (
        <div>
          <StudentList data={stuobjarr} />
          <table>
            <tbody>
              {stuobjarr.rows.map((student) => (
                <tr key={student.id}>
                  <td>{student.teacherId}</td>
                  {/* Add a delete button next to TeacherId */}
                  <td>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <IconButton aria-label="delete" size="small">
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </Stack>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Add a plus button for adding students */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton aria-label="add" size="small" onClick={handleOpenDialog}>
              <AddIcon fontSize="inherit" />
            </IconButton>
          </Stack>
          {/* Dialog for adding a new student */}
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogContent>
              {/* Add form or input fields for adding a new student */}
              {/* For example: <input type="text" placeholder="Enter student name" /> */}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button onClick={handleAddStudent} color="primary">
                Add Student
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : null}
    </>
  );
}
