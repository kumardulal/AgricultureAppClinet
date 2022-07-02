import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'
import Colorsmanager from '../collections/Colorsmanager'
import Coverbox from '../components/LOGINPAGE/Coverbox'
import LogoTitle from '../components/LOGINPAGE/LogoTitle'
import RegistrationScreen from './RegistrationScreen'






export default function LoginScreen({ navigation }) {
    console.log()
    return (
        <SafeAreaView style={styles.maincontainer} >

            <View style={styles.whitebox}>
                <LogoTitle />
                <Coverbox />

            </View>

            {/* login form */}
            <View style={styles.loginformcontainer}>

                <View style={{
                    height: "27%",
                    width: "100%",
                    alignItems: "center",
                    marginTop: "20%"
                }}>
                    <TextInput
                        // onChangeText={ }
                        // value={ }


                        placeholder="username"
                        placeholderTextColor="#00716F"
                        style={styles.input}
                    >

                    </TextInput>
                    <TextInput
                        // onChangeText={ }
                        // value={ }


                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={styles.input}
                    >

                    </TextInput>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginRight: "10%",
                    marginLeft: "10%"
                }}>
                    <TouchableOpacity style={{
                        fontSize: 12,
                        color: Colorsmanager.primary

                    }}><Text style={{
                        fontSize: 12,
                        color: Colorsmanager.primary
                    }}>FORGOT PASSWORD</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('RegistrationScreen')}
                    >
                        <Text style={{ color: Colorsmanager.primary }}> LOGIN</Text>
                    </TouchableOpacity>

                </View>



                <TouchableOpacity
                    onPress={() => <RegistrationScreen />}
                >
                    <Text style={{ color: Colorsmanager.primary, fontSize: 18, marginTop: 20, textAlign: "center" }}> REGISTER</Text>
                </TouchableOpacity>







            </View>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    whitebox: {
        // height: 270,

        width: "100%",
        backgroundColor: Colorsmanager.blanksilver,
    },
    maincontainer: {
        flex: 1,
        // height: "100%",
        // width: "100%",


    },


    loginformcontainer: {

        height: "65%",
        width: "100%",
        backgroundColor: Colorsmanager.secondary,
        // borderTopLeftRadius: 1,
        // borderTopRightRadius: 300,
        // borderBottomLeftRadius: 500,







    },
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        width: "70%",
        borderTopRightRadius: 10,
        borderColor: Colorsmanager.primary,
        backgroundColor: Colorsmanager.primary,
        opacity: 0.9,
        paddingHorizontal: 10,
        textAlign: "center"
    }
    , button: {
        width: 100,
        height: 45,
        backgroundColor: Colorsmanager.buttontype1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        alignSelf: "center"

    }

})
