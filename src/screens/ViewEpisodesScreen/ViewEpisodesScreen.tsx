import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './viewEpisodesScreen.styles';
import { FC } from 'react';
import { ViewEpisodesScreenProps } from '../../navigators/screenTypes';

export const ViewEpisodesScreen: FC<ViewEpisodesScreenProps> = ({
  route: {
    params: { playlistUrl },
  },
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>{playlistUrl}</Text>
      </View>
    </SafeAreaView>
  );
};
