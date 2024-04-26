import { FC, PropsWithChildren, useState } from 'react';
import { ContinueWatchingContext } from '../../contexts/ContinueWatchingContext';
import { Section } from '../../models/Section';

export const ContinueWatchingProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [continueWatchingSection, setContinueWatchingSection] =
    useState<Section>();

  return (
    <ContinueWatchingContext.Provider
      value={{ continueWatchingSection, setContinueWatchingSection }}>
      {children}
    </ContinueWatchingContext.Provider>
  );
};
