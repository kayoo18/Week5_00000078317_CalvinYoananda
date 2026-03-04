import { Stack } from "expo-router";
import { ScrollView, View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import styles from "./AppStyles";
import userData from "./data.json";

const imageMapping: any = {
  "f": require("../../assets/images/f.jpg"),
  "c": require("../../assets/images/c.jpg"),
  "sw": require("../../assets/images/sw.jpg"),
  "s": require("../../assets/images/s.jpg"),
};

export default function App() {
  return (
    <>
      <Stack.Screen options={{ title: "Waifs List" }} />

      <ScrollView>
        <View style={{ padding: 15, alignItems: "center" }}>
          
          {userData.map((user, index) => (
            <Card key={index} style={[styles.card, { backgroundColor: user.bgColor }]}>
              <Card.Title
                title={user.name}
                titleStyle={{ fontWeight: "bold" }}
                subtitle={`Tinggi: ${user.height} \nAsal: ${user.regional}`}
                subtitleNumberOfLines={2}
                left={(props) => (
                  <Avatar.Image {...props} source={imageMapping[user.photo_id]} />
                )}
              />
            </Card>
          ))}
          
        </View>
      </ScrollView>
    </>
  );
}