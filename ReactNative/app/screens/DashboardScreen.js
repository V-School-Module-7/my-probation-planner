import React, { useState, useEffect } from 'react'
import { ImageBackground, Text, Button, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default function DashboardScreen(props){
const [quoteState, setQuoteState] = useState(['Always surround yourself with people who lift and inspire you. They remind us not to live in the past!','High protein and adequate liquid intake make for a successful UA! Do you test today?' ,
'Embrace the fact that you’ve overcome some serious obstacles that most can’t even comprehend.. Be someone for others to reach out to in their difficult times!', 'We spent years in our addiction so sobriety won’t happen overnight. Remember “One Day at a Time”']
)
const [randomQuote, setRandomQuote] = useState('')


// useEffect(() => {
//     fetch("https://type.fit/api/quotes")
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       setQuoteState(data);
//     });
    
// }, [])

const randomNumber = () => {
    setRandomQuote(quoteState[Math.floor(Math.random() * quoteState.length)])
}

    return(
        <ImageBackground style = {styles.background}>
            <Button onPress={randomNumber} title='Quote of the Day'/>
            <Text>{randomQuote}</Text>
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