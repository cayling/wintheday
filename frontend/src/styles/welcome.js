import { StyleSheet} from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    image: {
      padding: 5,
      fontSize: 45
    },
    nav: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      height: responsiveHeight(25)
    },
    nav2: {
        flexDirection: "row",
        marginLeft: responsiveFontSize(12),
        
        height: responsiveHeight(25)
      },
    text: {
      textAlign: "left",
      margin: responsiveFontSize(2),
      marginHorizontal: responsiveFontSize(7),
      fontSize: responsiveFontSize(2.9),
      fontWeight: "bold"
    },
    container: {
      flexGrow: 1,
      justifyContent: "space-between"
    },
    title: {
      marginHorizontal: responsiveFontSize(7),
      textAlign: "left",
      fontSize: responsiveFontSize(5),
      fontWeight: "bold"
    },
    top: {
      marginTop: 30,
      height: responsiveHeight(75),
     
    },
    right: {
        marginLeft: responsiveFontSize(4)
        
        
    },
    yeah: {
        fontSize: responsiveFontSize(3),
        
    }
  });

  export default styles