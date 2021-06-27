import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import UniversityList from "../screens/UniversityList";
import cv from "../screens/cv";

const Drawer = createDrawerNavigator();

export default function Sidebar() {
    return (
        <Drawer.Navigator>
            {/*<Drawer.Screen name="Feed"  />*/}
            <Drawer.Screen name="Universities" component={UniversityList} />
            <Drawer.Screen name="Courses" component={cv} />

        </Drawer.Navigator>
    );
}