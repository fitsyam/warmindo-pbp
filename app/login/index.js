import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth, signInWithEmailAndPassword } from "../config/FIREBASE"; // Correct import
import { Image } from "react-native";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            navigation.navigate("dashboard");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}></View>
            <Image source={require("../assets/indomie.png")} style={styles.image} />
            <Text style={styles.title}>WARMINDO INSPIRASI INDONESIA</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D80032",
        marginTop: 10,
        bottom: 60,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#F0DE36",
    },
    input: {
        height: 40,
        width: "80%",
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "#17B978",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 0,
    },
    imageContainer: {
    },
});

export default Login;
