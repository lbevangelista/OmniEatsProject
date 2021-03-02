import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';



const App = () => {
  return (
    <>
     <View style={styles.screenContainer}>
       <Text style={{fontSize: 30, textAlign: "center"}}>User Creation Success!</Text>
       <Text style={{fontSize: 15, textAlign: "center"}}>We have sent a verification link to your email address. Please confirm to start using OmniEats.</Text>
       <Button title={'Done'}></Button>
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
