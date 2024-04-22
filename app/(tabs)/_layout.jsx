import React from 'react'
import { View, Image, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'


export default function TabsLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#232533',
                        height: 75
                    }
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                name="Home"
                                color={color}
                                focused={focused}
                                icon={icons['home']}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='create'
                    options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                name="Create"
                                color={color}
                                focused={focused}
                                icon={icons['plus']}
                            />
                        )
                    }}

                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                name="Profile"
                                color={color}
                                focused={focused}
                                icon={icons['profile']}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='bookmark'
                    options={{
                        title: 'Bookmark',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                name="Bookmark"
                                color={color}
                                focused={focused}
                                icon={icons['bookmark']}
                            />
                        )
                    }}

                />
            </Tabs>
        </>
    )
}


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-1">
            <Image
                source={icon}
                tintColor={color}
                resizeMode='contain'
                className="h-5 w-5"
            />
            <Text
                className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
                style={{ color }}
            >
                {name}
            </Text>
        </View>
    )
}
