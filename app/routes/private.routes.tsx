import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Dashboard from 'app/screens/Dashboard';

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
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              size={size}
              color={color}
              name="format-list-bulleted"
            />
          ),
        }}
        name="Listagem"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="attach-money" />
          ),
        }}
        name="Cadastrar"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="pie-chart" />
          ),
        }}
        name="Resumo"
        component={Dashboard}
      />
    </Tab.Navigator>
  );
};

export default PrivateRoutes;
