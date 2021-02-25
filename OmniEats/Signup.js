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
       <Text style={{fontSize: 30, textAlign: "center"}}>Registration</Text>
       <TextInput title="First Name" placeholder="First Name"></TextInput>
       <TextInput title="Last Name" placeholder="Last Name"></TextInput>
       <TextInput title="Phone Number" placeholder="Phone Number"></TextInput>
       <TextInput title="Email Address" placeholder="Email Address"></TextInput>
       <TextInput title="Username" placeholder="Username"></TextInput>
       <TextInput title="Password" placeholder="Enter Password"></TextInput>
       <TextInput title="Password2" placeholder="Confirm Password"></TextInput>
       <Button title={'Register'}></Button>
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
