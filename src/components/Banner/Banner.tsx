import { FC } from 'react';
import { BannerProps } from './banner.types';
import { ImageBackground, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './banner.styles';
import { OVERLAY_COLORS } from './banner.settings';

export const Banner: FC<BannerProps> = ({ title, author, genre, image }) => (
  <View style={styles.container}>
    <ImageBackground
      source={image}
      style={styles.backgroundImage}
      imageStyle={styles.image}>
      <View style={styles.bannerContent}>
        <View style={styles.genreWrapper}>
          <Text style={styles.genre}>{genre}</Text>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </View>
      <LinearGradient colors={OVERLAY_COLORS} style={styles.overlay} />
    </ImageBackground>
  </View>
);
