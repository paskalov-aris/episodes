export type RemoteConfigParameter = 'sections';

export type RemoteConfigParameterValue = number | string | boolean;

export type RemoteConfigDefaults = Record<
  RemoteConfigParameter,
  RemoteConfigParameterValue
>;
