import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import {useStyles} from '../styles/index';

export default function Header() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    function handleDrawerOpen() {
        setOpen(true);
    }

    return (
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
            <Typography variant="h6" noWrap>
                MICFIN - MicroFinancing Dealer Platform
        </Typography>
        </Toolbar>
    );
}
