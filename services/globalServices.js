import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const pickImageFromGallery = async () => {
  // Request permission to access media library
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (status !== "granted") {
    Alert.alert(
      "Permission Denied",
      "We need access to your media to upload images."
    );
    return;
  }

  // Launch the image picker (images only)
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images, // Allow images only
    quality: 1,
  });

  if (!result.canceled) {
    const selectedImage = result.assets[0];
    return {
      success: true,
      type: "success",
      message: "Image selected successfully.",
      uri: selectedImage.uri,
    };
  } else {
    console.log("User canceled image picker");
    return {
      success: false,
      type: "error",
      message: "Image selected unSuccessfully.",
      uri: "",
    };
  }
};
