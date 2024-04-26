import { createContext } from 'react';
import { ContinueWatchingContextData } from './continueWatchingContext.types';

export const ContinueWatchingContext =
  createContext<ContinueWatchingContextData>({});
