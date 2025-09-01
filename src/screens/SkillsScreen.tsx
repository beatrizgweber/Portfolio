import { View, Text, Image } from "react-native";
import { skillsStyles } from "../styles/skillsStyles";

export default function SkillsScreen() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "Python",
    "React",
    "React Native",
  ];

  return (
    <View style={skillsStyles.container}>
      <Image
        source={require("../../assets/profile-picture.png")}
        style={skillsStyles.profileImage}
      />
      <Text style={skillsStyles.title}>Skills</Text>

      <View style={skillsStyles.skillsContainer}>
        {skills.map((skill, index) => (
          <View key={index} style={skillsStyles.skillBadge}>
            <Text style={skillsStyles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
