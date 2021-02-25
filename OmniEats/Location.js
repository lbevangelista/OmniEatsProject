import React from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
  Image,
  StyleSheet
} from 'react-native';

const App = () => {
  return (
    <>
     <View style={styles.screenContainer}>
      <Text style={{fontSize: 30, flex: 1}}>Location</Text>
      <Image style={{height: 500, width: 380}} source = {require('./images/map.png')} />
       <TextInput title="Username" placeholder="Enter Alternative Location Here"></TextInput>
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
