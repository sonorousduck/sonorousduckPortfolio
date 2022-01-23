import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Icon,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { Link } from "react-router-dom";
import './Header.css';
import GitHubIcon from '@mui/icons-material/GitHub';


const Navbar = () => {

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar style={{backgroundColor: "#212121"}}> 
        <div className="logo" style={{cursor: "default"}}>
            <Typography variant="h5" className='logo' style={{cursor: "default"}}>
            Ryan Anderson
            </Typography>
            <Typography className="email" sx={{fontSize: 12}} style={{cursor: "default"}}><a className="mailTo" href="mailto: sonorousduck@gmail.com">sonorousduck@gmail.com</a></Typography>
        </div>
        <div className="navlinks">
          <Link to="/" className="link">
            <HomeIcon style={{marginRight: 4}}/> <Typography className="linkText">Home</Typography> 
          </Link>
          <Link to="/projects" className="link">
            <CollectionsBookmarkIcon style={{marginRight: 4}}/> <Typography className="linkText">Projects</Typography> 
          </Link>
          <Link to="/about" className="link">
            <HelpOutlineIcon style={{marginRight: 4}}/> <Typography className="linkText">About Me</Typography>
          </Link>
          <a href="https://github.com/sonorousduck" className="link"><GitHubIcon style={{marginRight: 4}}/> <Typography className="linkText"> My Github</Typography></a>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;