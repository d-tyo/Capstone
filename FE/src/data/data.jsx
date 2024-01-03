import React from "react"
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { GridActionsCellItem } from "@mui/x-data-grid";
import MUIDynamicDialog from "../components/MUIDynamicDialog";



  export const stuobjarr = {
    columns: [
      {
        field: "studentName",
        headerName: "Name",
        editable: true,
        width: 120,
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
        width: 120,
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
        field: "teacherId",
        headerName: "TeacherId",
        editable: true,
        width: 120,
      },
      {
        field: "actions",
        type: "actions",
        getActions: (params) => [
          <GridActionsCellItem
            showInMenu
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => {
            // axios.delete(`http://localhost:8080/api/student/${params.row.id}`)
              console.log("delete", params.row);
              // send a request BE to delete 
            }}
          />,
          <GridActionsCellItem
            showInMenu
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              const open = true;
           return <MUIDynamicDialog student = {params.row} open = {open}/>
             
              // console.log("Edit", params.row.studentName);
                 // send a request BE to edit
            }}
          />,
        ],
  
        width: 120,
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
      width: 120,
    },

    {
      field: "email",
      headerName: "Email",
      editable: true,
      width: 120,
    },
    {
      field: "contact",
      headerName: "Contact",
      editable: true,
      width: 120,
    },

    {
      field: "grade",
      headerName: "Grade",
      editable: true,
      width: 120,
    },
  ],
  rows: [],
};

export const lessobjarr = {
  columns: [
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
  ],
  rows: [],
};
