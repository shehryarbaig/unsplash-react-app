import {makeStyles} from "@material-ui/core";
import { Block } from "@material-ui/icons";

export const useCategoryPageStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    // categoryInfo: {
    //     display: Block,
    //     height: "324px",
    //     width: "519.44px",
    //}
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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
    }
}));