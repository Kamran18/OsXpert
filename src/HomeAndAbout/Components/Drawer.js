import React from 'react';
import {Link} from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles, Drawer, Divider, List, ListItem, 
  ListItemIcon,ListItemText,IconButton} from '@material-ui/core';

import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundIcon from '@material-ui/icons/HomeRounded';
import MemoryOutlinedIcon from '@material-ui/icons/MemoryOutlined';
import FileCopyIcon from '@material-ui/icons/FileCopy';


const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  a:{
    textDecoration: 'none',
    color:'inherit',
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[['Home', <HomeRoundIcon/>, '/OsXpert'],
          ['Process Scheduling', <MemoryOutlinedIcon/>, '/ProcessScheduling'],
          ['Page Replacement', <FileCopyIcon/>, '/PageReplacement']]
          .map(([text, icon, link]) => (
          <ListItem button key={text} component={Link} to={link}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {[['Contact Me', <MailIcon />, 'mailto:umar17ash@gmail.com']]
          .map(([text, icon, link]) => (
          <a href={link} target='_blank' rel="noreferrer" 
            key={text} className={classes.a}>
            <ListItem button>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </a>  
        ))}
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment>
            <IconButton edge="start"
             className={classes.menuButton} 
             color="primary"
             aria-label="menu"
             onClick={toggleDrawer('left', true)}>
                <MenuIcon />
            </IconButton>    
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

