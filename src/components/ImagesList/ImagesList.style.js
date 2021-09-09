import { makeStyles } from '@material-ui/styles';

export const useImageListStyle = makeStyles((theme) => ({
    root: {
      display: "grid",
        backgroundColor: theme.palette.background.paper,
      },
      imageList: {
        width: 500,
        height: 450,
        transform: 'translateZ(0)',
      },
      titleBar: {
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
      icon: {
        color: 'white',
      },
  }));
  