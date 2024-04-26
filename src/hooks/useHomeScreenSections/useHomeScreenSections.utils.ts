import { Section } from '../../models/Section';

export const inflateAdditionalSection = (
  sections: Section[],
  additionalSection: Section,
  position: number,
): Section[] => {
  const inflated = sections.reduce(
    (inflatedSections: Section[], section: Section, index) => {
      if (index === position) {
        inflatedSections.push(additionalSection);
        inflatedSections.push(section);
      } else {
        inflatedSections.push(section);
      }

      return inflatedSections;
    },
    [],
  );
  return inflated;
};
