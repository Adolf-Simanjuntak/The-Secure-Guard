import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Lengkapi semua data!");
      return;
    }

    alert("Akun berhasil dibuat!");
    router.replace("/LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Create Account ✨</Text>

        <TextInput
          placeholder="Name"
          placeholderTextColor="#aaa"
          style={styles.input}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#aaa"
          style={styles.input}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
        />

        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>

        <Text
          style={styles.link}
          onPress={() => router.replace("/LoginScreen")}
        >
          Already have account?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 30,
    borderRadius: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 25,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.08)",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    color: "#fff",
  },
  button: {
    backgroundColor: "#6366f1",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
  link: {
    marginTop: 20,
    color: "#a5b4fc",
    textAlign: "center",
  },
});