import { useCallback, useContext } from 'react';
import { Section } from '../../models/Section';
import { asyncStorageService } from '../../services/asyncStorage/asyncStorageService';
import { CONTINUE_WATCHING_SECTION_ID } from './useCreateContinueWatchingSection.settings';
import { UseCreateContinueWatchingSectionArgs } from './useCreateContinueWatchingSection.types';
import { ContinueWatchingContext } from '../../contexts/ContinueWatchingContext';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export const useCreateContinueWatchingSection = () => {
  const navigation = useNavigation();

  const { setContinueWatchingSection } = useContext(ContinueWatchingContext);

  return useCallback(
    async ({
      playlists,
      bookName,
      bookImageUrl,
      bookAuthor,
    }: UseCreateContinueWatchingSectionArgs) => {
      if (playlists?.length) {
        const continueWatchingSection: Section = {
          id: CONTINUE_WATCHING_SECTION_ID,
          type: 'continueWatching',
          data: {
            playlists,
            bookAuthor,
            bookImageUrl,
            bookName,
          },
        };

        await asyncStorageService.storeData(
          'continueWatchingSection',
          continueWatchingSection,
        );
        setContinueWatchingSection?.(continueWatchingSection);

        navigation.navigate('ViewEpisodes', { playlists });
      } else {
        Alert.alert('No playlists provided');
      }
    },
    [navigation, setContinueWatchingSection],
  );
};
