import {red, blue, grey,indigo, cyan} from '@material-ui/core/colors'
import backgroundImage from './../images/background4.jpg'; // Import using relative path
import menuButtonImage from './../images/MenuIcon2.png'; // Import using relative path
const drawerWidth = 260;

export const styles = theme => ({
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
       // display: 'flex-center',
       // width: 1000,
        //p: 4,
        flexGrow: 1,
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
    menu: {
        display:'flex',
        wrap:'nowrap'
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
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    drawerBox: {
        background:theme.palette.background.secondary,
    },
    divider:{
        color: theme.palette.primary,
        light:false,
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
        color:'#000000' //black
       
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
    headerGrid: {
        color:grey[900],
        background: theme.palette.secondary,
        padding: theme.spacing(3),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
    },
    card: {
        //maxWidth: 345,
        padding: theme.spacing(3),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        
    },
    cardNoSpacing: {
        //maxWidth: 345,
        padding: theme.spacing(0),
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        
    },
    /* media: {
        height: 140,
    }, */
    box: {
        bgcolor: "text.hint",
        color: "background.paper",
        p: 2,
        m: 1,
    },
    box2: {
        bgcolor: "text.hint",
        color: "background.tertiary",
        p: 2,
        m: 1,
    },
    textField: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        //minWidth: 300,
        padding: 5,
        color: grey[900],
        display:'flex',
        wrap:'nowrap'


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
    paperHeader:{
        bgcolor: "text.hint",
        color: "background.tertiary",
        p: 2,
        m: 1,
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        minHeight: '24px',
        background: theme.palette.background.secondary,
      },
      adjustedRoot: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.main,
        marginTop: '10%'
      }, 
      adjustedRoot2: {
        flexGrow: 1,
        //backgroundColor: theme.palette.background.main,
        marginTop: '10%'
      }, 

  })