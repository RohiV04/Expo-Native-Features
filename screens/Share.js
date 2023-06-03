import { StyleSheet, Text, View,Button,Image,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';

import * as Sharing from 'expo-sharing';
const Share = () => {
  const [image, setImage] = useState(null);
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();



  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  
  const pickImage = async () => {
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
    Sharing.shareAsync(image)
  };

  return (
    <>

   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image to Share" onPress={pickImage} />
      {image && <><Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
       </>}

    </View>
   
    </>
  )
}

export default Share;

