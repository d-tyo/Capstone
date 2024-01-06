import React, { useState } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { GridActionsCellItem } from "@mui/x-data-grid";
import MUIDynamicDialog from "../components/MUIDynamicDialog";
import StudentPage from "../pages/StudentPage";

// export const stuobjarr = (setDialogOpen) => ();

export const stuobjarr = {
  columns: [
    {
      field: "studentName",
      headerName: "Name",
      editable: true,
      width: 200,
    },
    {
      field: "userName",
      headerName: "UserName",
      editable: true,
      width: 120,
    },
    {
      field: "email",
      headerName: "Email",
      editable: true,
      width: 200,
    },
    {
      field: "contact",
      headerName: "Contact",
      editable: true,
      width: 120,
    },
    {
      field: "location",
      headerName: "Location",
      editable: true,
      width: 120,
    },
    {
      field: "grade",
      headerName: "Grade",
      editable: true,
      width: 120,
    },
    {
      field: "capability",
      headerName: "Capability",
      editable: true,
      width: 120,
    },
    {
      field: "DOB",
      headerName: "DOB",
      editable: true,
      width: 200,
    },
    {
      field: "teacherId",
      headerName: "TeacherId",
      editable: true,
      width: 120,
    },
    {
      field: "actions",
      type: "actions",
      getActions: (params) => {
        const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
        const [student, setStudent] = useState(params.row);
        const [delStudent, setDelStudent] = useState(null);

        return [
          <MUIDynamicDialog
            open={isEditDialogOpen}
            setOpen={setIsEditDialogOpen}
            student={student}
          />,

          <GridActionsCellItem
            showInMenu
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              setIsEditDialogOpen(true);
              // console.log("Edit", params.row.studentName);
              // send a request BE to edit
            }}
          />,
          <GridActionsCellItem
            showInMenu
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => {
              axios.delete(`http://localhost:8080/api/student/${params.row.id}`)
              .then(setDelStudent(params.row))
              window.location.reload()
              // send a request BE to delete
            }}
          />,
        ];
      },
    },
  ],
  rows: [],
};

export const trobjarr = {
  columns: [
    {
      field: "teacherName",
      headerName: "Name",
      editable: true,
      width: 200,
    },

    {
      field: "email",
      headerName: "Email",
      editable: true,
      width: 300,
    },
    {
      field: "contact",
      headerName: "Contact",
      editable: true,
      width: 200,
    },

    {
      field: "grade",
      headerName: "Grade",
      editable: true,
      width: 200,
    },
  ],
  rows: [],
};

export const lessobjarr = {
  columns: [

    {
      field: "id",
      headerName: "Lesson ID",
      editable: true,
      width: 120,
    },
    {
      field: "teacherId",
      headerName: "Teacher",
      editable: true,
      width: 120,
    },

    {
      field: "subject",
      headerName: "Subject",
      editable: true,
      width: 120,
    },
    {
      field: "grade",
      headerName: "Grade",
      editable: true,
      width: 120,
    },

    {
      field: "type",
      headerName: "Work",
      editable: true,
      width: 120,
    },

    {
      field: "title",
      headerName: "Title",
      editable: true,
      width: 120,
    },

    {
      field: "filePath",
      headerName: "Location",
      editable: true,
      width: 120,
    },

    {
      field: "comment",
      headerName: "Feedback",
      editable: true,
      width: 120,
    },
    {
      field: "actions",
      type: "actions",
      getActions: (params) => {
        const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
        const [student, setStudent] = useState(params.row);
        const [delStudent, setDelStudent] = useState(null);

        return [
          <MUIDynamicDialog
            open={isEditDialogOpen}
            setOpen={setIsEditDialogOpen}
            student={student}
          />,

          <GridActionsCellItem
            showInMenu
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              setIsEditDialogOpen(true);
              // console.log("Edit", params.row.studentName);
              // send a request BE to edit
            }}
          />,
          <GridActionsCellItem
            showInMenu
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => {
              axios.delete(`http://localhost:8080/api/lesson/${params.row.id}`)
              .then(setDelStudent(params.row))
              window.location.reload()
              // send a request BE to delete
            }}
          />,
        ];
      },
    },
  ],
  rows: [],
};


