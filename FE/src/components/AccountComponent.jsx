import * as React from "react";
import { Popper } from "@mui/base/Popper";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Button from "@mui/material/Button";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AcademicLevelsMenu from "./AcademicLevelsMenu";
import { Paper } from "@mui/material";

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
    if (event.key === "Tab") {
      setOpen(false);
    } else if (event.key === "Escape") {
      buttonRef.current.focus();
      setOpen(false);
    }
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
      // data-testid="account-component-box"
    >
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
              data-testid="account-switch"
            />
          }
          label={auth ? "👶🏻" : "👦🏻"}
        />
      </FormGroup>

      <Button
        ref={buttonRef}
        id="composition-button"
        aria-controls={"composition-menu"}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <AccountCircleIcon />
      </Button>

      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={buttonRef.current}
        disablePortal
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
        ]}
      >
        <Paper>
          <ClickAwayListener
            onClickAway={(event) => {
              if (event.target !== buttonRef.current) {
                handleClose();
              }
            }}
          >
            <MenuList onKeyDown={handleListKeyDown}>
              <MenuItem
                onClick={handleClose}
                component={NavLink}
                to={"/profile"}
              >
                {" "}
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>Inbox</MenuItem>
              <MenuItem onClick={handleClose}>Calendar</MenuItem>
              <AcademicLevelsMenu />
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem
                onClick={handleClose}
                component={NavLink}
                to={"/logout"}
              >
                {" "}
                Logout{" "}
              </MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popup>
    </Box>
  );
}
