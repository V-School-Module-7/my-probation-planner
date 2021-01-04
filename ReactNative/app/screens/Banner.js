import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Bannner(props) {
    const [bannerVis, setBannerVis] = useState(true)

    const closeBanner = () => {
        setBannerVis(false)
    }   
    return (
        <>
            {
                bannerVis
                ?
                <View id='banner' style={styles.background}>
                    <Text style={styles.myText}>{props.bannerText}</Text>
                    <Icon style={styles.exitIcon} name="close-circle" size={25} color="white" onPress={closeBanner} />
                </View>
                :
                null
            }
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#9C7525',
        color: 'white',
        padding: 20
    },
    exitIcon: {
        margin: 'auto'
    },
    myText: {
        color: 'white'
    }
})