import React from "react";
import { AppBar, Tabs, Tab } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-router-dom";

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Tabs value={value}  aria-label="Main Tabs" onChange={handleChange}>
        <Link to="/Todo"><Tab label="Todo"/></Link>
        <Link to="/Board"><Tab label="Board"/></Link>
        <Link to="/Profile"><Tab label="Profile"/></Link>
    </Tabs>
    </AppBar>
  );
};

export default Header;