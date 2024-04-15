import { FC } from 'react';
import { FlatList, ListRenderItemInfo, SafeAreaView, View } from 'react-native';
import { styles } from './homeScreen.styles';
import sections from '../../../sections.json';
import { Section } from '../../models/Section';
import { Carousel } from '../../components/Carousel/Carousel';

const renderItem = ({ item }: ListRenderItemInfo<Section>) => {
  return <Carousel {...item} key={item.id} />;
};

export const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          data={sections.sections as Section[]}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};
