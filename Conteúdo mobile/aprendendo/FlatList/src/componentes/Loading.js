import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const LoadingSF2 = ({ isLoading }) => {
  return isLoading ? (
    <ActivityIndicator
      color="white"
      size={40}
      style={{ margin: 20 }}
    />
  ) : null;
};

const styles = StyleSheet.create({});

export default LoadingSF2;