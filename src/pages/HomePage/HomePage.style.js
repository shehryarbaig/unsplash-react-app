import {makeStyles} from "@material-ui/core";
import { Translate } from "@material-ui/icons";

export const useHomePageStyle = makeStyles((theme) => ({
    container: {
        position: "relative",
        color: "white",
      },
      headingContainer:{
        position: "absolute",
        top: "25%",
        width:"100%",
        display: "flex",
        justifyContent: "center",

    },
    title: {
        fontSize: 46,
        lineHeight: 1.2,
        fontWeight: 700,
        //marginRight:"480px"
    },
    titleDescription1: {
        fontSize: 18,
        lineHeight: 1.6,
        fontWeight: 450,
        marginTop:"10px",
        //marginRight:"300px"
    },
    titleDescription2: {
        fontSize: 18,
        lineHeight: 1.6,
        fontWeight: 450,
        //marginRight:"395px"
    },
    imageShadow: {
       boxShadow:"10px 10px 5px #ccc",
       MozBoxShadow:"10px 10px 5px #ccc",
       WebkitBoxShadow:"10px 10px 5px #ccc",

    },
    searchBar:{
        marginTop:"12px",
        width:"100%"
    },
    heading:{
        width:"60%"
    }
    
}));