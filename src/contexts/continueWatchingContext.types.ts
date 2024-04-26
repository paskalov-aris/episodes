import { Section } from '../models/Section';

export interface ContinueWatchingContextData {
  continueWatchingSection?: Section;
  setContinueWatchingSection?: (section: Section) => void;
}
