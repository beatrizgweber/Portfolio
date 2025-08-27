import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
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
  },
  title: {
    fontSize: 36,
    color: "#E07A5F",
    fontFamily: "RalewayBold",
    marginBottom: 5,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 24,
    color: "#81B29A",
    paddingVertical: 10,
    fontFamily: "RalewayRegular",
    paddingHorizontal: 10,
    textAlign: "center",
    marginBottom: 20,
  },
  btn: {
    borderColor: "#E07A5F",
    borderWidth: 2,
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 16,
    fontFamily: "RalewayBold",
  },
});
