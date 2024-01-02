import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function DropDown() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Academic Level
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>ECE</MenuItem>
            <MenuItem onClick={popupState.close}>Primary</MenuItem>
            <MenuItem onClick={popupState.close}>Secondary</MenuItem>
            <MenuItem onClick={popupState.close}>Tertiary</MenuItem>
            <MenuItem onClick={popupState.close}>University</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}