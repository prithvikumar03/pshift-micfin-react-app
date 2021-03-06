import React from 'react';
import clsx from 'clsx';
import { Link, withRouter } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Menu from './Menu';
import { Link as MaterialLink } from '@material-ui/core'
import { useStyles } from '../styles/index';
import { getIcon, LogoIcon, HomeIcon } from './../styles/icons';
import Badge from '@material-ui/core/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';
import {Redirect} from 'react-router-dom'
import { connect, useSelector } from "react-redux";


export function SideNavBar(props) {
    
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [logOut, setlogOut] = React.useState(false);
    const user = useSelector(state => state.login.user);
  
    //alert('user'+JSON.stringify(user));

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    function handleClick() {
        setOpen(!open);
    }

    function handleProfileMenuOpen() {

    }

    function setLogout(props){
        //alert('inside logout2');
        setlogOut(true);
    }
    function renderLogout(props){
        if(logOut)
            return (<Redirect to="/logout" />);
    }



    function getListItem(item, index,loggedInUserGroup, isNested) {
        let isDisabled=false;
        if (item.header === null) {
            isDisabled=(item.userGroup && !item.userGroup.includes(loggedInUserGroup))?true:false;
            return (
                <ListItem disabled={isDisabled} className={isNested ? classes.nested : ''} component={item.external ? MaterialLink : Link} href={item.external ? item.pathname : null} to={item.pathname} button key={item.label}>
                    <ListItemIcon>
                        {getIcon(item.label, classes.icon)}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                </ListItem>
            );
        }
        else {
            let children = item.children;
            isDisabled=(item.userGroup && !item.userGroup.includes(loggedInUserGroup))?true:false;
            return (
                <div>
                    <ListItem disabled={isDisabled} button onClick={handleClick}>
                        <ListItemIcon>
                            {getIcon(item.label, classes.icon)}
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {
                                children.map((subItem, subIndex) => (
                                    getListItem(subItem, subIndex, true)))
                            }

                        </List>
                    </Collapse>
                </div>

            )

        }
    }

    return (
         
        <div className={classes.root}>
            <div>{renderLogout()}</div>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >

                <Toolbar className={classes.toolbarImage}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>

{/*                     <LogoIcon /> */}
                    
                   {/* <Typography variant="h5" noWrap>
                        MICFIN
                    </Typography>
                    <div className={classes.spacer}></div>
                    <Typography variant="h6" noWrap alignRight colorSecondary>
                        MicroFinancing Dealer Platform
                    </Typography>
 */}                <div>
                                <img src={require('./../images/micfinlogo10.png')} alt="Micfin logo"/>
                                <img src={require('./../images/addon8.png')} alt="Micfin logo"/>
                    </div>


                    {/* Right Section of Tool Bar */}

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop} >
                        <IconButton color="inherit">
                            <Badge color="secondary">
                               {/*  <HomeIcon className={classes.icon}/> */}
                                <img className={classes.icon} src={require('./../images/homeIcon.png')} alt="Home logo"/> 
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge color="error" badgeContent={4}>
                                {/* <MailIcon className={classes.icon}/> */}
                                <img className={classes.icon} src={require('./../images/mailIcon.png')} alt="Home logo"/>
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge color="error" badgeContent={17}>
                                <img className={classes.icon} src={require('./../images/notificationIcon.png')} alt="Home logo"/>
                                {/* <NotificationsIcon className={classes.icon} /> */}
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit" onClick={()=>setLogout()}>
                            <Badge color="secondary">
                                {/* <ExitToAppIcon className={classes.icon}/> */}
                                <img className={classes.icon} src={require('./../images/exitIcon2.png')} alt="Home logo"/>
                            </Badge>
                        </IconButton>

                    </div>



                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
              
                
                   {/*  <Box  className={classes.drawerBox} > */}
                   <Box> 
                        <Typography variant="subtitle2" noWrap className={classes.typography}>
                            Welcome!
                            <IconButton
                                edge="end"
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                        </Typography>   
                    
              
                <Divider /> 
                <List>
                    {Menu.map((item, index) => (
                        getListItem(item, index, user.userGroup,false)
                    ))}

                </List>

                <List>
                    <ListItem>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </ListItem>

                </List>


                <Divider />
                </Box>
            </Drawer>
         
        </div>
    );
}


const mapStateToProps = ({ login }) => ({
    login
  });

export default connect(
    mapStateToProps,
    null
  )(SideNavBar);