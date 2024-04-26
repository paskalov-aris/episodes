import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageItem } from './asyncStorageService.types';

// TODO: handle errors in catch blocks

const storeData = async (key: AsyncStorageItem, value: string | object) => {
  try {
    const isObject = typeof value === 'object';

    const valueToStore = isObject ? JSON.stringify(value) : value;

    await AsyncStorage.setItem(key, valueToStore);
  } catch (error) {}
};

const getData = async (key: AsyncStorageItem) => {
  try {
    const data = await AsyncStorage.getItem(key);

    return data;
  } catch (error) {}
};

const mergeData = async (key: AsyncStorageItem, value: string | object) => {
  try {
    const isObject = typeof value === 'object';

    const valueToStore = isObject ? JSON.stringify(value) : value;

    await AsyncStorage.mergeItem(key, valueToStore);
  } catch (error) {}
};

export const asyncStorageService = {
  storeData,
  mergeData,
  getData,
};
