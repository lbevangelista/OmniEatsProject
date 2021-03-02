import React, {useState} from 'react';

import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
} from 'react-native';

const App = () => {
  const [setTextUsername, setTextInputUsername] = useState('');
  const [setTextPassword, setTextInputPassword] = useState('');

const checkTextInput = () => {
  //Check for the Username TextInput
  if (!setTextUsername.trim()) {
    alert('Please Enter Username');
    return;
  }
  //Check for the Password TextInput
  if (!setTextPassword.trim()) {
    alert('Please Enter Password');
    return;
  }
  //Checked Successfully
  alert('Success');
};

  return (
    <>
     <View style={styles.screenContainer}>
       <Text style={{fontSize: 30, textAlign: "center"}}>OmniEats</Text>
       <TextInput title="Username" placeholder="Enter Username" onChangeText={
            (value) => setTextInputUsername(value)
          }></TextInput>
       <TextInput title="Password" placeholder="Enter Password" onChangeText={
            (value) => setTextInputPassword(value)
          } secureTextEntry={true}></TextInput>
       <Button title={'Sign In'} onPress={checkTextInput}></Button>
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
