import React from 'react';

import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from 'app/theme';
import PrivateRoutes from 'app/routes/private.routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <PrivateRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
