import { makeStyles } from '@material-ui/core/styles';
import { red,grey } from '@material-ui/core/colors'
import backgroundImage from './../images/background4.jpg'; // Import using relative path
import menuButtonImage from './../images/MenuIcon2.png'; // Import using relative path
const drawerWidth = 260;

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
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
        color:"#263238"
    },
    menuButtonImage: {
        marginRight: 36,
        backgroundImage: `url(${menuButtonImage})`,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        background:theme.palette.background.secondary,
    },
    drawerOpen: {
        width: drawerWidth,
        background:theme.palette.background.secondary,
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
        background:theme.palette.background.secondary,
        //background: 'linear-gradient(to right bottom, #1565c0, #82ffa1)',
        //background:theme.palette.primary.main,
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    drawerBox: {
        background:theme.palette.background.secondary,
       /*  p={1},
        m={0},
        border-bottom-color="#000000de",
        border-image-width={1},
        border-image-repeat="stretch", */
    },
    toolbarImage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-center',
       // width: drawerWidth,
        //padding: '3 1px',
        padding: '3',
        //background: theme.palette.secondary,
        background: grey[200],
        backgroundImage: `url(${backgroundImage})`,
        ...theme.mixins.toolbar,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-center',
        padding: '2',
        background: theme.palette.background.secondary,
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
        //color: theme.palette.secondary,
        color: "#000000",
        
    },
    sideBar: {
        margin: theme.spacing(0),
        color: grey[600],
    },
    iconHover: {
        margin: theme.spacing(2),
        '&:hover': {
            color: red[800],
        },
    },
    card: {
        //maxWidth: 345,
        padding: theme.spacing(3),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
    },
   /*  media: {
        height: 140,
    }, */
    box: {
        bgcolor: "text.hint",
        color: "background.paper",
        p: 2,
        m: 1,
    },
    textField: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        //minWidth: 300,
        padding: 3,
        color: grey[900]
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
    div:{
        padding: theme.spacing(2),
    },
    extradiv:{
        padding: theme.spacing(4),
    },
    typography:{
        color: theme.palette.secondary,
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        minHeight: '24px',
        background: theme.palette.background.secondary,
      }
}));
