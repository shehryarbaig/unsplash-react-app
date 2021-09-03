import { makeStyles } from '@material-ui/core/styles';

export const useScrollableTabsStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    tab:{
      textTransform:"none",
      // "& .MuiTab-textColorPrimary.Mui-selected":{
      //   color: theme.palette.primary.main
      // }
      fontSize:"14px",
      fontWeight:600
    },
    appBar:{
      boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 5px 5px 0px rgb(0 0 0 / 14%), 0px 1px 0px 0px rgb(0 0 0 / 12%)",
    },
  }));