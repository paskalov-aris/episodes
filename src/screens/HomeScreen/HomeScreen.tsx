import { FC } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './homeScreen.styles';

export const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home screen</Text>
      </View>
    </SafeAreaView>
  );
};
