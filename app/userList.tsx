import { Link } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import Animated, { FadeInDown } from "react-native-reanimated";
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

          <Animated.View 
            key={index} 
            
            entering={FadeInDown.delay(index * 200).duration(2000)}
            style={{ width: '100%', maxWidth: 400 }}
          >
            <Link 
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
              <TouchableOpacity style={{ marginBottom: 10 }}>
                <Card 
                  style={[styles.card, { backgroundColor: user.bgColor }]}
                >
                  <Card.Title
                    title={user.name}
                    titleStyle={{ fontWeight: "bold", color: "white" }}
                    subtitle={`Tinggi: ${user.height} \nAsal: ${user.regional}`}
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
          </Animated.View>
        ))}

      </View>
    </ScrollView>
  );
}