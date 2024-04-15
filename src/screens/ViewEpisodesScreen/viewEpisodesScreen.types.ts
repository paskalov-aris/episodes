import { ViewToken } from 'react-native';

export interface OnViewableItemsChangedArgs {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
