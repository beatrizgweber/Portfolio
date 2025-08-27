import { View, Text, Image, Pressable, Linking } from "react-native";
import { homeStyles } from "../styles/homeStyles";

export default function HomeScreen() {
  const openLinkedIn = () =>
    Linking.openURL("https://www.linkedin.com/in/beatriz-gabrielli-a41b97164/");
  const openGitHub = () => Linking.openURL("https://github.com/beatrizgweber/");
  const sendEmail = () => {
    const email = "beatriz.gabrielliweber@email.com";
    const subject = "Assunto do email";
    const body = "Olá, estou entrando em contato...";
    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    Linking.openURL(url);
  };

  const renderButton = (text: string, onPress: () => void) => (
    <Pressable
      style={({ pressed }) => [
        homeStyles.btn,
        { backgroundColor: pressed ? "#E07A5F" : "#FDF6EC" },
      ]}
      onPress={onPress}
    >
      {({ pressed }) => (
        <Text
          style={[homeStyles.btnText, { color: pressed ? "#fff" : "#E07A5F" }]}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );

  return (
    <View style={homeStyles.container}>
      <Image
        source={require("../../assets/profile-picture.png")}
        style={homeStyles.profileImage}
      />
      <Text style={homeStyles.title}>Beatriz Gabrielli Weber</Text>
      <Text style={homeStyles.description}>
        Front-end Web and App Developer
      </Text>

      {renderButton("GitHub", openGitHub)}
      {renderButton("LinkedIn", openLinkedIn)}
      {renderButton("Send E-mail", sendEmail)}
    </View>
  );
}
