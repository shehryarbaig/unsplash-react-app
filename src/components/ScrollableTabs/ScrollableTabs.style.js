import { makeStyles } from '@material-ui/core/styles';

export const useScrollableTabsStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));