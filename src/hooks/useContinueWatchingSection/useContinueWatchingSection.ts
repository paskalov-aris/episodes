import { useContext, useEffect } from 'react';
import { Section } from '../../models/Section';
import { asyncStorageService } from '../../services/asyncStorage/asyncStorageService';
import { ContinueWatchingContext } from '../../contexts/ContinueWatchingContext';

export const useContinueWatchingSection = () => {
  const { continueWatchingSection, setContinueWatchingSection } = useContext(
    ContinueWatchingContext,
  );

  useEffect(() => {
    const getContinueWatchingBook = async () => {
      try {
        const section = await asyncStorageService.getData(
          'continueWatchingSection',
        );

        if (section) {
          const parsedSection: Section = JSON.parse(section);
          setContinueWatchingSection?.(parsedSection);
        }
      } catch {}
    };

    getContinueWatchingBook();
  }, [setContinueWatchingSection]);

  return continueWatchingSection;
};
