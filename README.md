
This is a new React Native project, bootstrapped using @react-native-community/cli.

# Getting Started

## Prerequisites
NodeJS version 18

Ruby verison 2.7.6

## Set up dependencies

Install all the dependencies by the following `package.json` script:
```bash
  yarn deps:install
```

## Run the Metro server

```bash
  yarn start
```

## Run the app on Android or iOS simulator

```bash
  yarn ios
```

or

```bash
  yarn android
```

# To Do

## Mock data
As I've encountered some issues with getting mock data from Firebase Remote Config parameter, I decided to temporarily contain the data in the `sections.json` file

TODO: https://github.com/paskalov-aris/episodes/issues/22

## Playing m3u8 playlist episodes

On the `ViewEpisodesScreen` I've tried to fetch the m3u8 playlist files to parse them, extract and render episodes. For the video rendering, the [Expo Video](https://katherineoelsner.com/) module is used. The issue I've encountered is that I couldn't render videos in the MPEG-TS format. Need more time to investigate.

So, in order to implement at least some functionality, I decided to play entire playlists (m3u8 files).

TODO: https://github.com/paskalov-aris/episodes/issues/23

## "Continue watching" functionality

Implement the feature using Redux Toolkit and Redux Persist

TODO: https://github.com/paskalov-aris/episodes/issues/24
