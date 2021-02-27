
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
       <Text style={{fontSize: 30, textAlign: "center"}}>Create New Password</Text>
       <TextInput title="Password" placeholder="New Password"></TextInput>
	   <TextInput title="Password" placeholder="Re-type Password"></TextInput>
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
