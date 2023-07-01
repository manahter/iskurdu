import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';

const Stack = createStackNavigator();

import Jobs from './pages/Jobs';
import Search from './pages/Search';
import Auth from './pages/auth/Auth';
import Profile from './pages/Profile';
import usePost from './hooks/usePost';
import Details from './pages/Details';
import FavSearches from './pages/FavSearches';
import SearchHistory from './pages/SearchHistory';
import SplashScreen from './containers/SplashScreen';
import {ThemeLight, ThemeDark} from './config/colors';

const initialize = async fetchOptions => {
  await fetchOptions();
};

function Router() {
  const {fetchOptions} = usePost();
  const [isAppReady, setIsAppReady] = useState(false);
  const colorScheme = useColorScheme();

  useEffect(() => {
    initialize(fetchOptions).then(() => {
      setIsAppReady(true);
    });
  }, []);

  if (!isAppReady) return <SplashScreen />;

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? ThemeDark : ThemeLight}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        {/* <Stack.Screen name="Test" component={Test} /> */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{
            title: 'Giriş Ekranı',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profil Sayfası',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: 'Arama Seçenekleri',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Jobs"
          component={Jobs}
          backBehavior=""
          options={{
            headerLeft: null,
            title: 'İş İlanları',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FavSearches"
          component={FavSearches}
          options={{
            title: 'Favori Aramalar',
          }}
        />
        <Stack.Screen
          name="SearchHistory"
          component={SearchHistory}
          options={{
            title: 'Arama Geçmişi',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
