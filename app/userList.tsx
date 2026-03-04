import { Link } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import styles from "./(tabs)/AppStyles";
import userData from "./(tabs)/data.json";

const imageMapping: any = {
  "f": require("../assets/images/f.jpg"),
  "c": require("../assets/images/c.jpg"),
  "sw": require("../assets/images/sw.jpg"),
  "s": require("../assets/images/s.jpg"),
};

export default function UserList() {
  return (
    <ScrollView>
      <View style={{ padding: 15, alignItems: "center" }}>
        
        {userData.map((user, index) => (
          <Link 
            key={index} 
            href={{
              pathname: "/profile", 
              params: { 
                userName: user.name,
                userHeight: user.height,
                userRegional: user.regional,
                userPhotoId: user.photo_id
              } 
            }} 
            asChild
          >
            {/* Tambahkan maxWidth: 400 agar rapi di tengah saat dibuka di browser */}
            <TouchableOpacity style={{ width: '100%', maxWidth: 400, marginBottom: 10 }}>
              <Card 
                style={[styles.card, { backgroundColor: user.bgColor }]}
              >
                <Card.Title
                  title={user.name}
                  // Tambahkan color: "white" pada titleStyle
                  titleStyle={{ fontWeight: "bold", color: "white" }}
                  
                  subtitle={`Tinggi: ${user.height} \nAsal: ${user.regional}`}
                  // Tambahkan subtitleStyle dengan color: "white"
                  subtitleStyle={{ color: "white" }}
                  
                  subtitleNumberOfLines={2}
                  left={(props) => (
                    <Avatar.Image
                      {...props}
                      source={imageMapping[user.photo_id]}
                    />
                  )}
                />
              </Card>
            </TouchableOpacity>
          </Link>
        ))}

      </View>
    </ScrollView>
  );
}