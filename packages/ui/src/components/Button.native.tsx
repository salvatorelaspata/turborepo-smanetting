// Expo-specific component
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { theme } from "@turborepo-smanetting/ui/src/theme"; // Importa il tema comune

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
