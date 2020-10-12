import React, { useCallback} from 'react'
import { makeStyles, withStyles} from'@material-ui/core/styles'
import {useHistory} from 'react-router-dom';

import SortIcon from '@material-ui/icons/Sort';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { IconButton } from '@material-ui/core';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
      
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
       
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          
        },
      },
    },
  }))(MenuItem);

const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#000000',
    fontSize: '3.5rem',
  },
}));

export default function MenuForSite(){

  const classes = useStyles();
  const history = useHistory();
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOnClickHome = useCallback(() => history.push('/'), [history]);
  const handleOnClickContact = useCallback(() => history.push('/contact/'), [history]);
  const handleOnClickProjects = useCallback(() => history.push('/projects/'), [history]);

  
  return (
      <div>
        <IconButton >
            <SortIcon className={classes.icon} onClick={handleClick}/>
        </IconButton>
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <StyledMenuItem onClick={handleOnClickHome} >
                <ListItemIcon>
                <HomeIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Home Page" />
            </StyledMenuItem>
            
            <StyledMenuItem onClick={handleOnClickProjects}>
                <ListItemIcon>
                <MenuBookIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="I Nostri Progetti" />
            </StyledMenuItem>

            <StyledMenuItem onClick={handleOnClickContact}>
                <ListItemIcon>
                <SendIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Contattaci" />
            </StyledMenuItem>

        </StyledMenu>
      </div>
    
    
  );
}
