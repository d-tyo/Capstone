import React, { useState } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { GridActionsCellItem } from "@mui/x-data-grid";
import MUIDynamicDialog from "../components/MUIDynamicDialog";
import EditLesson from "../components/EditLesson";
import { Link } from "react-router-dom";
import TeacherList from "../components/TeacherList";

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
    }
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
      field: "level",
      headerName: "Grade",
      editable: true,
      width: 200,
      
    },

    {
      field: "actions",
      type: "actions",
    }
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
      renderCell: ({value}) => value ? <Link to={value} target="_blank"> (open PDF) </Link> : '(no PDF)'
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
        const [lesson, setLesson] = useState(params.row);
        const [delLesson, setDelLesson] = useState(null);

        return [
          <EditLesson
            open={isEditDialogOpen}
            setOpen={setIsEditDialogOpen}
            lesson={lesson}
          />,

          <GridActionsCellItem
            showInMenu
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              setIsEditDialogOpen(true);
               // send a request BE to edit
              // console.log("Edit", params.row.studentName);
             

            }}
          />,
          <GridActionsCellItem
            showInMenu
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => {
              axios.delete(`/api/lesson/${params.row.id}`)
              .then(setDelLesson(params.row))
            }}
          />,
        ];
      },
    },
  ],
  rows: [],
};


