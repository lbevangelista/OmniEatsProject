import React, {useState} from 'react';

import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
} from 'react-native';


const App = () => {
  const [setTextFName, setTextInputFirstName] = useState('');
  const [setTextLName, setTextInputLastName] = useState('');
  const [setTextNumber, setTextInputNumber] = useState('');
  const [setTextEmail, setTextInputEmail] = useState('');
  const [setTextUsername, setTextInputUsername] = useState('');
  const [setTextPassword, setTextInputPassword] = useState('');
  const [setTextRPassword, setTextInputRPassword] = useState('');


const checkTextInput = () => {

  //Check for the First Name TextInput
  if (!setTextFName.trim()) {
    alert('Please fill all necessary fields!');
    return;
  }
  //Check for the Last Name TextInput
  if (!setTextLName.trim()) {
    alert('Please fill all necessary fields!');
    return;
  }
  //Check for the Phone Number TextInput
  if (!setTextNumber.trim()) {
    alert('Please fill all necessary fields!');
    return;
  }
  //Check for the Email Address TextInput
  if (!setTextEmail.trim()) {
    alert('Please fill all necessary fields!');
    return;
  }
  //Check for the Username TextInput
  if (!setTextUsername.trim()) {
    alert('Please fill all necessary fields!');
    return;
  }
  //Check for the Password TextInput
  if (!setTextPassword.trim()) {
    alert('Please fill all necessary fields!');
    return;
  }
  //Check for the Retype Password TextInput
  if (!setTextRPassword.trim()) {
    alert('Please fill all necessary fields!');
    return;
  }
  //Checked Successfully
  alert('Success');
};

  return (
    <>
     <View style={styles.screenContainer}>
       <Text style={{fontSize: 30, textAlign: "center"}}>Registration</Text>
       <TextInput title="First Name" placeholder="First Name" onChangeText={
            (value) => setTextInputFirstName(value)}></TextInput>
       <TextInput title="Last Name" placeholder="Last Name" onChangeText={
            (value) => setTextInputLastName(value)}></TextInput>
       <TextInput title="Phone Number" placeholder="Phone Number" onChangeText={
            (value) => setTextInputNumber(value)}></TextInput>
       <TextInput title="Email Address" placeholder="Email Address" onChangeText={
            (value) => setTextInputEmail(value)}></TextInput>
       <TextInput title="Username" placeholder="Username" onChangeText={
            (value) => setTextInputUsername(value)}></TextInput>
       <TextInput title="Password" placeholder="Password" onChangeText={
            (value) => setTextInputPassword(value)} secureTextEntry={true}></TextInput>
       <TextInput title="Retype Password" placeholder="Retype Password" onChangeText={
            (value) => setTextInputRPassword(value)} secureTextEntry={true}></TextInput>
       <Button title={'Register'} onPress={checkTextInput}></Button>
     </View>
     <View style={{margin: 10, justifyContent: 'space-between'}}>
     <Button title="Back to Login"></Button>
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
