import React from "react";
import { View, SafeAreaView, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";

const Header = () => {
  const { width, height } = useWindowDimensions();

  const styles = StyleSheet.create({
    header: {
      height: height * 0.1,
      backgroundColor: "#00C20D",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingRight: 10,
      paddingLeft: 10,
      borderBottomWidth: 2,
      borderBottomColor: "#fff",
    }
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={router.back}>
        <Ionicons name="arrow-back-sharp" size={24} color="white" /> 
        </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  );
};

export default Header;
