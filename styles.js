import { StyleSheet,Dimensions } from "react-native";
const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end'
    },
    button:{
        backgroundColor: 'rgb(240,128,128)',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginVertical: 10,
        marginHorizontal: 30

    },
    text:{
        fontFamily:'Poppins',
        fontWeight:'500',
        letterSpacing: 0.5
    },
    bottom:{
        justifyContent: 'center',
        height: height / 3,

    },
    textinput:{
        height: 40,
        borderWidth: 1,
        borderColor: 'rgb(240,128,128)',
        marginHorizontal: 30,
        marginVertical:10,
        borderRadius: 25,
        paddingLeft: 10
    },
    formbutton:{
        backgroundColor: 'rgb(240,128,128)',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginVertical: 10,
        marginBottom:40,
        marginHorizontal: 30,
        shadowColor: '#000',
        shadowOffset:{
            width:0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    forminputContainer:{
        marginBottom:70,
        ...StyleSheet.absoluteFill,
        zIndex:-1,
        justifyContent:'center'
    },
    close:{
        height:40,
        width:40,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: 'rgb(240,128,128)',
        shadowOffset:{
            width:0,
            height: 4,
        },
        shadowOpacity: 0.35,
        shadowRadius: 6.27,
        elevation: 1,
        alignItems: 'center',
        top: -20,
        

    },
    title:{
        alignSelf:'center',
        marginVertical:210,
        marginHorizontal:90,
    },
    titletext:{
        fontSize: 50,
        fontWeight:60,
        // fontFamily:"Trebuchet MS",
    },
    
});

export default styles