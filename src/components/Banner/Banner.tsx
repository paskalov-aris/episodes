import { FC } from 'react';
import { BannerProps } from './banner.types';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './banner.styles';
import { OVERLAY_COLORS } from './banner.settings';

export const Banner: FC<BannerProps> = ({
  name,
  author,
  genre,
  imageUrl,
  additionalContainerStyle,
  playlists,
  onBannerPress,
}) => {
  const imageSource = { uri: imageUrl };

  const handleBannerPress = () => {
    if (onBannerPress) {
      onBannerPress({
        playlists: playlists || [],
        bookName: name,
        bookImageUrl: imageUrl,
        bookAuthor: author,
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={handleBannerPress}
      style={[styles.container, additionalContainerStyle]}>
      <ImageBackground
        source={imageSource}
        style={styles.backgroundImage}
        imageStyle={styles.image}>
        <View style={styles.bannerContent}>
          <View style={styles.genreWrapper}>
            <Text style={styles.genre}>{genre}</Text>
          </View>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
        </View>
        <LinearGradient colors={OVERLAY_COLORS} style={styles.overlay} />
      </ImageBackground>
    </TouchableOpacity>
  );
};
