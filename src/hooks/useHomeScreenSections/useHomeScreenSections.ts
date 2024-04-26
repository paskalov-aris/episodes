import { useEffect, useState } from 'react';
import { Section } from '../../models/Section';
import { remoteConfigService } from '../../services/firebase/remoteConfig/remoteConfigService';
import { inflateAdditionalSection } from './useHomeScreenSections.utils';
import { useContinueWatchingSection } from '../useContinueWatchingSection/useContinueWatchingSection';

export const useHomeScreenSections = () => {
  const [homeScreenSections, setHomeScreenSections] = useState<Section[]>([]);
  const continueWatchingSection = useContinueWatchingSection();

  useEffect(() => {
    const getSectionsFromRemoteConfig = async () => {
      const sections = await remoteConfigService.getSections();

      const parsedSections: Section[] = JSON.parse(sections).sections;

      if (continueWatchingSection?.data.positionMillis) {
        const inflatedSections = inflateAdditionalSection(
          parsedSections,
          continueWatchingSection,
          1,
        );
        setHomeScreenSections(inflatedSections);
      } else {
        setHomeScreenSections(parsedSections);
      }
    };

    getSectionsFromRemoteConfig();
  }, [continueWatchingSection]);

  return homeScreenSections;
};
