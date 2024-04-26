import { FC } from 'react';
import { FlatList, ListRenderItemInfo, SafeAreaView, View } from 'react-native';
import { styles } from './homeScreen.styles';
import { Section } from '../../models/Section';
import { Carousel } from '../../containers/Carousel/Carousel';
import { HomeScreenProps } from '../../navigators/screenTypes';
import { useHomeScreenSections } from '../../hooks/useHomeScreenSections/useHomeScreenSections';
import { ContinueWatchingSection } from '../../containers/ContinueWatchingSection/ContinueWatchingSection';

const components = {
  bannerCarousel: Carousel,
  bookCarousel: Carousel,
  continueWatching: ContinueWatchingSection,
};

const renderItem = ({ item }: ListRenderItemInfo<Section>) => {
  const Component = components[item.type];

  return <Component data={item.data} type={item.type} key={item.id} />;
};

const keyExtractor = (item: Section) => item.id.toString();

export const HomeScreen: FC<HomeScreenProps> = () => {
  const sections = useHomeScreenSections();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          data={sections}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </SafeAreaView>
  );
};
