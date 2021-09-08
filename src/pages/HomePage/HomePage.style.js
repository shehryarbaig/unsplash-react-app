import {makeStyles} from "@material-ui/styles";

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
    UnsplashTitle: {
        fontSize: 46,
        lineHeight: 1.2,
        fontWeight: 700,
    },
    titleDescription1: {
        fontSize: 18,
        lineHeight: 1.6,
        fontWeight: 450,
        marginTop:"16px",
    },
    titleDescription2: {
        fontSize: 18,
        lineHeight: 1.6,
        fontWeight: 450,
    },
    imageShadow: {
       boxShadow:"10px 10px 5px #ccc",
       MozBoxShadow:"10px 10px 5px #ccc",
       WebkitBoxShadow:"10px 10px 5px #ccc",

    },
    searchBar:{
        marginTop:"24px",
        width:"100%"
    },
    heading:{
        width:"60%"
    },
    bottomRight:{
        position: "absolute",
        bottom: "8px",
        right: "16px",
        paddingBottom:"12px"
    },
    bottomRightContainer:{
        height:"58px",
        alignItems:"flex-end",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-end"
    },
    squareSpaceImg:{
        height:"34px",
        width:"150px"
    },
    bottomText:{
        fontSize:"13px",
        height:"20px",
        textShadow:"0 1px 8px rgb(0 0 0 / 10%)",
        fontWeight:450
    },
    bottomLeft:{
        position:"absolute",
        bottom:"8px",
        left:"16px",
        paddingBottom:"12px"
    },
    imagesContainer:{
        display:"flex",
        justifyContent:"center",
        marginTop:"48px"
    },
    progressBar:{
        display:"flex",
        justifyContent:"center",
    }
    
}));