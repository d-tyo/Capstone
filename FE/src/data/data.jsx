import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { GridActionsCellItem } from "@mui/x-data-grid";

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
            console.log("delete uek", params.row.studentName);
            // send a request BE to delete 
          }}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<DeleteIcon />}
          label="Edit"
          onClick={() => {
            console.log("Edit uek", params.row.studentName);
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