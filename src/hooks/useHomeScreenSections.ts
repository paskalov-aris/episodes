import { useEffect, useState } from 'react';
import { Section } from '../models/Section';
import { remoteConfigService } from '../services/firebase/remoteConfig/remoteConfigService';

export const useHomeScreenSections = () => {
  const [homeScreenSections, setHomeScreenSections] = useState<Section[]>([]);

  useEffect(() => {
    const getSectionsFromRemoteConfig = async () => {
      const sections = await remoteConfigService.getSections();

      const parsedSections: Section[] = JSON.parse(sections).sections;

      setHomeScreenSections(parsedSections);
    };

    getSectionsFromRemoteConfig();
  }, []);

  return homeScreenSections;
};
