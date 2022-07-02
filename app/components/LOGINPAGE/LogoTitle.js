import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'



export default function LogoTitle() {
    return (
        <View style={styles.titlecontainer}>
            <View style={{
                height: 63,
                width: 83,
                top: "11%"
            }}>
                <Image
                    resizeMode="contain"
                    style={{ width: 83, height: 63 }}
                    source={(require("../../assets/icon.png"))} />
            </View>

            <View style={{
                height: 63,
                marginRight: 5,
                top: "10%",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 17,

                }}>AGRICULTURE NEPAL</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({


    titlecontainer: {


        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "row"


    },



})
