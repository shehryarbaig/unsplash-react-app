import {makeStyles} from "@material-ui/core";

export const useCategoryPageStyle = makeStyles((theme) => ({
    root: {
        paddingTop: 70,
        paddingRight: 55,
        paddingLeft: 55,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      categoryInfoContainer:{
          marginTop: 20,
      },
    categoryTitle: {
        fontSize: 46,
        lineHeight: 1.2,
        fontWeight: 700,
    },
    categoryDescription:{
        fontSize:18,
        fontWeight: 400,
        lineHeight: 1.6,
        maxWidth: 620,
    },
    imagesGrid:{
        paddingTop:70,
    },
    circularIcon: {
        marginLeft: "50%",
        marginTop: "2%"
      },
}));