import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState<string | null>(null);
  const [cImage, setCImage] = useState<string | null>(null);

  const clickPicture = async () => {
    let permissionRes = await ImagePicker.requestCameraPermissionsAsync();
    console.log(permissionRes);
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
    })
    console.log(result);

    if (!result.canceled)
      setCImage(result.assets[0].uri);
  }

  const pickImage = async () => {
    let permissionRes = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(permissionRes);
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Click an image from camera" onPress={clickPicture} />
      {cImage && <Image source={{ uri: cImage }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
