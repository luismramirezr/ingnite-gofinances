import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Dashboard from 'app/screens/Dashboard';
import Register from 'app/screens/Register';

const Tab = createBottomTabNavigator();

const PrivateRoutes: React.FC = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.palette.orange,
        tabBarInactiveTintColor: theme.palette.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: theme.rfValue(70),
        },
      }}
    >
      <Tab.Screen
        options={{
          title: 'Listagem',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              size={size}
              color={color}
              name="format-list-bulleted"
            />
          ),
        }}
        name="dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          title: 'Cadastrar',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="attach-money" />
          ),
        }}
        name="register"
        component={Register}
      />
      <Tab.Screen
        options={{
          title: 'Resumo',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="pie-chart" />
          ),
        }}
        name="piechart"
        component={Dashboard}
      />
    </Tab.Navigator>
  );
};

export default PrivateRoutes;
