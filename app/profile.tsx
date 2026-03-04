import { Link, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

const imageMapping: any = {
  "f": require("../assets/images/f.jpg"),
  "c": require("../assets/images/c.jpg"),
  "sw": require("../assets/images/sw.jpg"),
  "s": require("../assets/images/s.jpg"),
};

export default function Profile() {
  const { userName, userHeight, userRegional, userPhotoId } = useLocalSearchParams<{ 
    userName: string, 
    userHeight: string, 
    userRegional: string, 
    userPhotoId: string 
  }>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      {/* Menampilkan Foto Avatar */}
      {userPhotoId && (
        <Avatar.Image 
          size={100} 
          source={imageMapping[userPhotoId]} 
          style={{ marginBottom: 15 }}
        />
      )}

      {/* Menampilkan Nama */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        {userName}&apos;s Profile
      </Text>
      
      {/* Menampilkan Tinggi dan Asal sesuai datamu */}
      <Text style={{ fontSize: 14, marginBottom: 5 }}>
        Tinggi: {userHeight}
      </Text>
      <Text style={{ fontSize: 14, marginBottom: 20 }}>
        Asal: {userRegional}
      </Text>
      
      <Link href="/home" push asChild>
        <Button title="Go to Home Screen" />
      </Link>
      
    </View>
  );
}