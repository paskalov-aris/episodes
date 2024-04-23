import remoteConfig from '@react-native-firebase/remote-config';
import { REMOTE_CONFIG_DEFAULTS } from './remoteConfigService.settings';
import { RemoteConfigParameter } from './remoteConfigService.types';

const fetchAndActivate = async () => {
  await remoteConfig().setDefaults(REMOTE_CONFIG_DEFAULTS);
  await remoteConfig().fetchAndActivate();
};

const getRemoteParameterValue = (parameter: RemoteConfigParameter) => {
  return remoteConfig().getValue(parameter);
};

const getSections = async () => {
  await remoteConfig().ensureInitialized();
  return getRemoteParameterValue('sections').asString();
};

export const remoteConfigService = {
  fetchAndActivate,
  getSections,
};
