import { makeStyles } from '@material-ui/core/styles';

export const useNavBarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarContainer: {
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    //flexGrow: 1,
    color: "#808080",
  },
  searchContainer: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: "20px",
    border: "1px solid",
    backgroundColor: "#F2F3F4",
    '&:hover': {
      backgroundColor: "white",
    },
    marginRight: theme.spacing(2),
    marginLeft: 15,
    width: '70%',
    color: "#808080",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#808080",
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  loginButton: {
    color: "#808080",
  },
}));