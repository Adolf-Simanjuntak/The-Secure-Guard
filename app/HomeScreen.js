import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const { name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Hello, {name || "User"} 👋
        </Text>

        <Text style={styles.subtitle}>
          Your account is secure and ready.
        </Text>

        <Text style={styles.secure}>
          🔐 Security level: HIGH
        </Text>
      </View>

      <Pressable
        style={styles.logout}
        onPress={() => router.replace("/LoginScreen")}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
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
    padding: 35,
    borderRadius: 25,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    color: "#aaa",
    marginBottom: 15,
    textAlign: "center",
  },
  secure: {
    color: "#6366f1",
    fontWeight: "700",
  },
  logout: {
    marginTop: 60,
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 15,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "700",
  },
});