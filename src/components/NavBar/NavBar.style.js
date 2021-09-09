import { makeStyles } from '@material-ui/styles';

export const useNavBarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBarContainer: {
    backgroundColor: "white",
  },
  searchBarContainer: {
    marginLeft: 15,
    flexGrow:1
  },
  searchBarWidth:{
    width:"70%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "#808080",
  },
  loginButton: {
    color: "#808080",
  },
}));
