import React, { useState } from 'react'
import { View, Button, Text, StyleSheet} from 'react-native'


export default function Quotes(props) {
    const [quoteState, setQuoteState] = useState(
        ['Always surround yourself with people who lift and inspire you. They remind us not to live in the past!',
        'High protein and adequate liquid intake make for a successful UA! Do you test today?' ,
        'Embrace the fact that you’ve overcome some serious obstacles that most can’t even comprehend. Be someone for others to reach out to in their difficult times!', 
        'We spent years in our addiction so sobriety won’t happen overnight. Remember “One Day at a Time”']
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

        return (
            <View style={styles.quoteBackground}>
                <Button  onPress={randomNumber} title='Quote of the Day'/>
                <Text style={styles.randomQuoteText}>{randomQuote}</Text>
            </View>


        )
     
}

const styles = StyleSheet.create({
    quoteBackground:{
        justifyContent: 'flex-start',
        alignItems: 'center'   
    },
    randomQuoteText: {
        textAlign: 'center'
    }
})   