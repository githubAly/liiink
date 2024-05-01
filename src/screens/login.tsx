import { StyleSheet, ScrollView, Dimensions, TouchableOpacity, Text } from 'react-native';
import { Text as PaperText } from 'react-native-paper';
import React from 'react';


export default function LoginScreen() {

  return (
    <ScrollView >
      <TouchableOpacity > 
        <PaperText>By logging in, you accept the Terms and Conditions</PaperText> 
      </TouchableOpacity>
    </ScrollView>
  );
}