// App.js or index.js
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dashboard from './dashboard';
import Login from './login';
import Transaksi from './transaksi';
import Detail from './detail';
const Stack = createStackNavigator();

const App = () => {
    return (

        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Transaksi" component={Transaksi} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>

    );
};

export default App;
