import { PermissionsAndroid } from 'react-native';

const requestWallpaperPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SET_WALLPAPER,
      {
        title: 'Wallpaper Permission',
        message: 'App needs permission to set wallpaper.',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Wallpaper permission granted');
      // Call the method to set wallpaper here
    } else {
      console.log('Wallpaper permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};
