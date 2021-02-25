import React from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';



const App = () => {
  return (
    <>
     <View style={styles.screenContainer}>
       <Text style={{fontSize: 30, textAlign: "center"}}>Forgot Password?</Text>
       <TextInput title="Username" placeholder="Enter Your Email Address"></TextInput>
       <Button title={'Confirm'}></Button>
       
     </View>
    </>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  }
});
  
export default App;
