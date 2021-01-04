import { StackActions } from '@react-navigation/native'
import React from 'react'
import { Text, View, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ImportantTasksHome from './ImportantTasksComponents/ImportantTasksHome'
import Treatment from './ImportantTasksComponents/Treatment'

const Stack = createStackNavigator()

export default function ImportantTasks(props) {

    const {navigation} = props
    return(
        <>
        <Stack.Navigator initialRouteName='Important Tasks Home'>
            <Stack.Screen name="Important Tasks Home" component={ImportantTasksHome} />
            <Stack.Screen name="Treatment" component={Treatment} />

        </Stack.Navigator>
        <View>
            <Button title="Treatment" onPress={() => navigation.navigate('Treatment')} />
            <Text>important tasks home</Text>
            <Text>needs stack navigation to go between each page</Text>
            <Text>needs files and nav for each section: treatment, employment, community service, journal, sobriety tracker</Text>
        </View>
        </>
    )
}