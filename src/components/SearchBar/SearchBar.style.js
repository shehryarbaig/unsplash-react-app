import { makeStyles } from '@material-ui/core/styles';

export const useSearchBarStyles = makeStyles((theme) => ({
  searchContainer: {
    flexGrow: 1,
    width:"100%"
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
    color: "#808080",
    width:"100%"
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
    width: '100%',
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
  }
}));