import React from 'react';
import clsx from 'clsx';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Menu from './Menu';
import ListItemLink from './ListItemLink';
import { Link as MaterialLink } from '@material-ui/core'
import { useStyles } from '../styles/index';
import Header from './Header';
import { getIcon, LogoIcon, HomeIcon } from './../styles/icons';
import Badge from '@material-ui/core/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Box from '@material-ui/core/Box';


export default function SideNavBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

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


    function getListItem(item, index,loggedInUserGroup, isNested) {
        let isDisabled=false;
        if (item.header === null) {
            isDisabled=(item.userGroup && loggedInUserGroup!==item.userGroup)?true:false;
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
            isDisabled=(item.userGroup && loggedInUserGroup!==item.userGroup)?true:false;
            return (
                <div>
                    <ListItem disabled={isDisabled} button onClick={handleClick}>
                        <ListItemIcon>
                            {getIcon(item.label, classes.sideBar)}
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
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >

                <Toolbar>
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

                    <LogoIcon />
                    <div className={classes.spacer}></div>
                    <Typography variant="h5" noWrap>
                        MICFIN
                    </Typography>
                    <div className={classes.spacer}></div>
                    <Typography variant="h6" noWrap alignRight colorSecondary>
                        MicroFinancing Dealer Platform
                    </Typography>


                    {/* Right Section of Tool Bar */}

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop} >
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <HomeIcon className={classes.icon}/>
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge color="error" badgeContent={4}>
                                <MailIcon className={classes.icon}/>
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge color="error" badgeContent={17}>
                                <NotificationsIcon className={classes.icon} />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <ExitToAppIcon className={classes.icon}/>
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
                <div>
                {/* <div className={classes.toolbar}> */}
                    <Box bgcolor="primary.main" p={1} m={0} border-bottom-color="#000000de" border-image-width={1} border-image-repeat="stretch">
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
                    </Box>
                </div>
                <Divider /> 
                <List>
                    {Menu.map((item, index) => (
                        getListItem(item, index, props.userGroup,false)
                    ))}

                </List>
                <Divider />

            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />

            </main>
        </div>
    );
}