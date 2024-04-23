import { EMPTY_ARRAY } from '../../../constants/stubs';
import { RemoteConfigDefaults } from './remoteConfigService.types';

export const REMOTE_CONFIG_DEFAULTS: RemoteConfigDefaults = {
  sections: JSON.stringify({ sections: EMPTY_ARRAY }),
};
