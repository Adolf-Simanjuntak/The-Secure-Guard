import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Isi semua data!");
      return;
    }

    router.push({
      pathname: "/HomeScreen",
      params: { name: email.split("@")[0] },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back 👋</Text>

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

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Text
          style={styles.link}
          onPress={() => router.push("/RegisterScreen")}
        >
          Create new account
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
    padding: 30,
    borderRadius: 25,
    backdropFilter: "blur(10px)",
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
    marginTop: 10,
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