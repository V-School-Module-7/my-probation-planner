import React from 'react'
import { ImageBackground, Text, Button, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Quotes from '../components/Quotes'

export default function DashboardScreen(props){


    return(
        <ImageBackground style = {styles.background}>
            <Quotes />
            <Button style={styles.contactButton} title='Community Service Information'/>
            <Button style={styles.contactButton} title='Countdown for Days Sober'/>
            <Button style={styles.contactButton} title='Goal Tracking'/>
            <Button style={styles.contactButton} title='Journal'/>
            <Text>hello</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    contactButton:{
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65"
    }
})