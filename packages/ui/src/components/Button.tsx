"use client";
import React from "react";
import { theme } from "@turborepo-smanetting/ui/src/theme"; // Importa il tema comune

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <button
      onClick={() => (onPress ? onPress() : alert("Operazione eseguita!"))}
      style={{
        backgroundColor: theme.colors.primary,
        padding: "10px 20px",
        borderRadius: "5px",
        color: "#fff",
        fontSize: "16px",
        border: "none",
      }}
    >
      {title}
    </button>
  );
};

export default Button;
