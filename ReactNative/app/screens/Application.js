import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashboardScreen from '../screens/DashboardScreen'
import Appointments from '../screens/Appointments'
import ImportantTasks from '../screens/ImportantTasks'
import Resources from '../screens/Resources'
import Contacts from '../screens/Contacts'
import Profile from '../screens/Profile'
import Banner from '../screens/Banner'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

export default function NavBar() {
    return (
        <>
        <Banner bannerText='"We adhere to the COVID-19 protocols specified by the CDC and FDA."' />
        <Tab.Navigator
            style={styles.navBar}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home';
                    } else if (route.name === 'Calender') {
                    iconName = focused ? 'calendar-month' : 'calendar-month';
                    } else if (route.name === 'Important Tasks') {
                    iconName = focused ? 'clipboard-check' : 'clipboard-check';
                    } else if (route.name === 'Resources') {
                    iconName = focused ? 'pencil-circle' : 'pencil-circle';
                    } else if (route.name === 'Contacts') {
                        iconName = focused ? 'contacts' : 'contacts';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account-circle' : 'account-circle';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                })}
                tabBarOptions={{
                activeTintColor: '#439B96',
                inactiveTintColor: 'black',
                showLabel: false,
                }}
                style={styles.navBar}
            >

                <Tab.Screen name='Home' component={DashboardScreen} />
                <Tab.Screen name='Calender' component={Appointments} />
                <Tab.Screen name='Important Tasks' component={ImportantTasks} />
                <Tab.Screen name='Resources' component={Resources} />
                <Tab.Screen name='Contacts' component={Contacts} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: 'pink'
    }
})