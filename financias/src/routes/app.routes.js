import React from "react";      
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle:{
                    backgroundColor: '#F4F0FF',
                    paddingTop: 20,
                },
                drawerActiveBackgroundColor: '#00b94a',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#131313',
                drawerInactiveBackgroundColor: '#F0F2FF',
            }}
        >
            <AppDrawer.Screen 
            name="Home" 
            component={Home}
            />

            <AppDrawer.Screen 
            name="Registrar" 
            component={New}
            />
        </AppDrawer.Navigator>
    )
}
export default AppRoutes;