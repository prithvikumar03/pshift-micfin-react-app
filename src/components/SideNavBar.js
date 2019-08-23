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
import {LogoIcon,HomeIcon} from './../styles/icons';
import Badge from '@material-ui/core/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';


export default function SideNavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
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

                    <LogoIcon/>
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
                                <HomeIcon className={classes.icon} color="secondary"/>
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge color="error" badgeContent={4}>
                                <MailIcon className={classes.icon} color="secondary"/>
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge color="error" badgeContent={17}>
                                <NotificationsIcon className={classes.icon} color="secondary"/>
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <ExitToAppIcon className={classes.icon} color="secondary"/>
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
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>


                    {Menu.map((item, index) => (
                        <ListItem component={item.external ? MaterialLink : Link} href={item.external ? item.pathname : null} to={item.pathname} button key={item.label}>
                            <ListItemText primary={item.label} />
                        </ListItem>
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