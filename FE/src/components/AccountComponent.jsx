import * as React from 'react';
import { Popper } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { styled } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import MenuList from '@mui/joy/MenuList';
import MenuItem from '@mui/joy/MenuItem';
import MenuButton from '@mui/joy/MenuButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Dropdown from '@mui/joy/Dropdown';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Popup = styled(Popper)({
  zIndex: 1000,
});

export default function AccountComponent() {
  const buttonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(false); // Managing authentication state

  const handleChange = () => {
    setAuth((prevAuth) => !prevAuth);
    setOpen(false); // Close the account options menu on login/logout
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      setOpen(false);
    } else if (event.key === 'Escape') {
      buttonRef.current.focus();
      setOpen(false);
    }
  };

  const SIZES = ['Small', 'Medium', 'Large', 'X-Large'];
  const [size, setSize] = React.useState('Medium');

  
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
  
      <Button
        ref={buttonRef}
        id="composition-button"
        aria-controls={'composition-menu'}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={() => {
          setOpen(!open);
        }}
        endIcon={<AccountCircleIcon />}
      >
        {auth ? 'Logout' : <AccountCircleIcon />}
      </Button>
  
      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={buttonRef.current}
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ]}
      >
        <ClickAwayListener
          onClickAway={(event) => {
            if (event.target !== buttonRef.current) {
              handleClose();
            }
          }}
        >
          <MenuList
            variant="outlined"
            onKeyDown={handleListKeyDown}
            sx={{ boxShadow: 'md' }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Inbox</MenuItem>
            <MenuItem onClick={handleClose}>Calendar</MenuItem>
            <Dropdown>
              <MenuButton endDecorator={<ArrowDropDown />}>Academic</MenuButton>
              <Menu sx={{ minWidth: 160, '--ListItemDecorator-size': '24px' }}>
                <MenuItem
                  onClick={() => {
                    const nextIndex = SIZES.indexOf(size) + 1;
                    const value = nextIndex > SIZES.length - 1 ? SIZES[0] : SIZES[nextIndex];
                    setSize(value);
                  }}
                >
                  Larger
                </MenuItem>
                <ListDivider />
                <ListItem nested>
                  <List aria-label="Font sizes">
                    {SIZES.map((item) => (
                      <MenuItem
                        key={item}
                        role="menuitemradio"
                        aria-checked={item === size ? 'true' : 'false'}
                        onClick={() => {
                          setSize(item);
                        }}
                      >
                        <ListItemDecorator>
                          {item === size && <ArrowRight />}
                        </ListItemDecorator>{' '}
                        {item}
                      </MenuItem>
                    ))}
                  </List>
                </ListItem>
              </Menu>
            </Dropdown>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Popup>
    </Box>
  );
}