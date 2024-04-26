import { FC } from 'react';
import { ContinueWatchingCardProps } from '../../components/ContinueWatchingCard/continueWatchingCard.types';
import { View } from 'react-native';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { ContinueWatchingCard } from '../../components/ContinueWatchingCard/ContinueWatchingCard';
import { styles } from './continueWatchingSection.styles';
import { useNavigation } from '@react-navigation/native';
import { useContinueWatchingSection } from '../../hooks/useContinueWatchingSection/useContinueWatchingSection';

export const ContinueWatchingSection: FC<ContinueWatchingCardProps> = props => {
  const navigation = useNavigation();

  const continueWatchingSection = useContinueWatchingSection();

  const handleCardPress = async () => {
    if (continueWatchingSection?.data.playlists) {
      const { playlists, currentVideoIndex, positionMillis } =
        continueWatchingSection.data;

      navigation.navigate('ViewEpisodes', {
        playlists,
        currentVideoIndex,
        positionMillis,
      });
    }
  };

  return (
    <View style={styles.container}>
      <SectionTitle title="Continue Watching" />
      <ContinueWatchingCard {...props} onCardPress={handleCardPress} />
    </View>
  );
};
