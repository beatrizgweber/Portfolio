import { StyleSheet } from "react-native";

export const skillsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6EC",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
  },
  profileImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    resizeMode: "cover",
  },
  title: {
    fontSize: 36,
    color: "#E07A5F",
    fontFamily: "RalewayBold",
    textAlign: "center",
    marginBottom: 20,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
    marginTop: 60,
    marginHorizontal: 10,
  },
  skillBadge: {
    backgroundColor: "#e07b5fc2",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    margin: 5,
  },
  skillText: {
    color: "#fff",
    fontFamily: "RalewayBold",
    fontSize: 16,
  },
});
