import { makeStyles } from '@material-ui/core/styles';
import { red,grey } from '@material-ui/core/colors'
const drawerWidth = 260;

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        /* justifyContent: 'center',
        alignItems: 'flex-end', */
    },
    grow: {
        flexGrow: 1,
    },
    grid: {
        width: 1000
    },
    spacer: {
        padding: 8,
        marginRight: 8
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-center',
       // width: drawerWidth,
        //padding: '3 1px',
        padding: '2',
        background: theme.palette.primary,
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    icon: {
        margin: theme.spacing(0),
        color: grey[700],
    },
    iconHover: {
        margin: theme.spacing(2),
        '&:hover': {
            color: red[800],
        },
    },
    card: {
        maxWidth: 345,
        padding: theme.spacing(1),
    },
    media: {
        height: 140,
    },
    box: {
        bgcolor: "text.hint",
        color: "background.paper",
        p: 2,
        m: 1,
    },
    textField: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        minWidth: 300,
        padding: 3,
    },
    dense: {
        marginTop: 16,
    },
    error: {
        color: 'red',
        /* height: 48,
        padding: '0 30px', */
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    
}));
