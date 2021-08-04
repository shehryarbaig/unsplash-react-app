import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useImageListStyle = makeStyles((theme) => ({
    root: {
      display: "grid",
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      imageList: {
        width: 500,
        height: 450,
        // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
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
    // root: {
    //   height:"100%"
    // },
    // media: {
    //   height: 0,
    //   paddingTop: '100%', // 16:9
    //   backgroundColor:"transparent"
    // },
    // expand: {
    //   transform: 'rotate(0deg)',
    //   marginLeft: 'auto',
    //   transition: theme.transitions.create('transform', {
    //     duration: theme.transitions.duration.shortest,
    //   }),
    // },
    // expandOpen: {
    //   transform: 'rotate(180deg)',
    // },
    // avatar: {
    //   backgroundColor: red[500],
    // },
  }));