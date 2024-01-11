import React, { useState, useEffect } from "react";
import TeacherList from '../components/TeacherList';
import { useData } from '../hooks/useData';
import { trobjarr } from '../data/data';
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


export default function TeacherPage() {

    const actionscol = {
        getActions: (params) => {
          const [isEditDialogOpen, setIsEditDialogOpen] = useState(false); //field edit

          getActions: (params) => {
            const [isEditDialogOpen, setIsEditDialogOpen] = useState(false); //field edit
        
    
            return [
              <EditTeacher
                open={isEditDialogOpen}
                setOpen={setIsEditDialogOpen}
                teacher={teacher}
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
                // send a request to BE to delete
                axios.delete(`api/teacher/${params.row.id}`)
                .then((response) => {
                    handleDeleteTeacher(params.row);
                  console.log("delete", params.row);
                });
              }}
            />,
          ];
        }},
    };

      // add our custom actions (including the delete function) to the original student table
     
  const teacherTableColumns = {...trobjarr, columns: trobjarr.columns.map(stucol => stucol.field == 'actions' ? {...stucol, ...actionscol} : stucol)}
  const { currentCP } = useCPContext();
  const [teacherTable, setTeacherTable] = useState(teacherTableColumns);
  
    //     const Teachers = useData('http://localhost:8080/api/teacher');
    //     trobjarr.rows = Teachers
    //     return (
    //         <>
    //             {Array.isArray(trobjarr.rows)?<TeacherList data={trobjarr} />:null}
    //         </>
    //     );
    //   }

    useEffect(() => {
        axios.get("/api/teacher").then((response) => {
          const teachers = response.data.data;
          setTeacherTable({ ...teacherTable, rows: teachers });
        });
      }, []);
      console.log(teacherTable)

      const [openDialog, setOpenDialog] = useState(false);

      const handleOpenDialog = () => {
        setOpenDialog(true);
      };
    
      const handleCloseDialog = () => {
        setOpenDialog(false);
       
      };
    

      const handleDeleteTeacher = (delteacher) => {
        setTeacherTable(prevTeacherTable => ({...prevTeacherTable, rows: prevTeacherTable.filter(teacher => teacher.id != delteacher.id)}))
      } //deleting the teacher ID that is not included
      
      
    
      return (
        <>
          {Array.isArray(trobjarr.rows) ? (
            <div>
              <TeacherList data={teacherTable} column={teacherTable.columns} onDeleteTeacher={handleDeleteTeacher} />
              {currentCP.teacherName ? (
                <>
                  {/* Add an Icon button for adding students */}
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton aria-label="add" size="small" onClick={handleOpenDialog}>
                      <PersonAddAlt1Icon fontSize="medium" />
                    </IconButton>
                  </Stack>
                </>
              ) : null}
            </div>
          ) : null}
        </>
      );
              }
    
        