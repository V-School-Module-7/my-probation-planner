import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashboardScreen from '../screens/DashboardScreen'
import Appointments from '../screens/Appointments'
import ImportantTasks from '../screens/ImportantTasks'
import Resources from '../screens/Resources'
import Contacts from '../screens/Contacts'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator()

export default function NavBar() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={DashboardScreen} />
            <Tab.Screen name='Calender' component={Appointments} />
            <Tab.Screen name='Important Tasks' component={ImportantTasks} />
            <Tab.Screen name='Resources' component={Resources} />
            <Tab.Screen name='Contacts' component={Contacts} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}