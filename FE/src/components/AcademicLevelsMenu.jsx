import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useCPContext } from '../context/CPContext';
import axios from 'axios';

export const levels = ['Early Childhood', 'Primary','Secondary', 'Tertiary', 'University'];

export default function AcademicLevelsMenu() {
  const { currentCP, handleUpdateCP } = useCPContext();



  const generateMenuItems = (popupState) => {
    const menuItems = levels.map(level => (
      <MenuItem key={level} onClick={() => handleChooseLevel(popupState, level)}>{level}</MenuItem>
    ))
    return menuItems;
  }

  const handleChooseLevel = async (popupState, level) => {
    handleUpdateCP({...currentCP, level: level});
    let response = await axios.post("/api/teacher/" + currentCP.id, {level:level})  
    console.log (response)
    popupState.close();
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Academic Level
          </Button>
          <Menu {...bindMenu(popupState)}>
            {generateMenuItems(popupState)}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}