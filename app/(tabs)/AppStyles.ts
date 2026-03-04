import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  card: {
borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25, 
    paddingHorizontal: 15, 
    width: 350,
    marginBottom: 15,
    height: 100,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 999,
    marginRight: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default styles;