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
       <Text style={{fontSize: 30, textAlign: "center"}}>OmniEats</Text>
       <TextInput title="Username" placeholder="Enter Username"></TextInput>
       <TextInput title="Password" placeholder="Enter Password"></TextInput>
       <Button title={'Sign In'}></Button>
     </View>
     <View style={{margin: 10, justifyContent: 'space-between'}}>
     <Button color="red" title="Forgot Password"></Button>
     </View>
     <View style={{margin: 10, justifyContent: 'space-between'}}>
     <Button title={'Create Account'}></Button>
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
