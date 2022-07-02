import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Colorsmanager from '../collections/Colorsmanager'
import Coverbox from '../components/LOGINPAGE/Coverbox'
import LogoTitle from '../components/LOGINPAGE/LogoTitle'

export default function RegistrationScreen() {
    return (
        <View
            style={{ flex: 1, backgroundColor: Colorsmanager.secondary }}
        >
            <LogoTitle />
            <TextInput

            ></TextInput>
            <View>


            </View>
            <View style={{
                width: "100%",
                height: 90,
                backgroundColor: Colorsmanager.bluish,
                marginTop: "10%",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.8
            }}>
                <Text style={{ fontSize: 20, textAlign: "center", color: Colorsmanager.primary }}>REGISTRATION</Text>
            </View>
        </View >
    )
}
