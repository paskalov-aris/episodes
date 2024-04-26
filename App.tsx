import React, { useEffect } from 'react';

import { RootStackNavigator } from './src/navigators/RootStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { remoteConfigService } from './src/services/firebase/remoteConfig/remoteConfigService';
import { ContinueWatchingProvider } from './src/containers/ContinueWatchingProvider/ContinueWatchingProvider';

function App(): React.JSX.Element {
  useEffect(() => {
    const initializeFirebaseRemoteConfig = async () => {
      await remoteConfigService.fetchAndActivate();
    };

    initializeFirebaseRemoteConfig();
  }, []);

  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <NavigationContainer>
        <ContinueWatchingProvider>
          <RootStackNavigator />
        </ContinueWatchingProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
