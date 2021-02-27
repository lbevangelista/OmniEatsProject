import * as React from 'react';
import { Text, View, TextInput, ViewStyle, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements'

function MapScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		 <Text style={{fontSize: 30, flex: 1}}>Location</Text>
		 <Image style={{height: 500, width: 380}} source = {require('./images/map.jpg')} />
		  <TextInput title="Username" placeholder="Enter Alternative Location Here"></TextInput>
		</View>
	);
  }

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: 30, flex: 1}}>Marketplace</Text>
      


	<TouchableOpacity>
    <View
			style={{
				height: 100,
				width: '90%',
				backgroundColor: 'white',
				margin: 5,
				borderRadius: 10,
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center'
			}}>
			<View style={{ 
			height: '90%', width: '25%', backgroundColor: 'gray', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Image Here</Text>
			</View>
			<View style={{ height: '90%', width: '70%', justifyContent: 'center' }}>
				<Text>Merchant Name</Text>
				<Text>Location</Text>
				<Text>Telephone Number</Text>
			</View>
		</View>
		</TouchableOpacity>

		<TouchableOpacity>
    <View
			style={{
				height: 100,
				width: '90%',
				backgroundColor: 'white',
				margin: 5,
				borderRadius: 10,
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center'
			}}>
			<View style={{ 
			height: '90%', width: '25%', backgroundColor: 'gray', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Image Here</Text>
			</View>
			<View style={{ height: '90%', width: '70%', justifyContent: 'center' }}>
				<Text>Merchant Name</Text>
				<Text>Location</Text>
				<Text>Telephone Number</Text>
			</View>
		</View>
		</TouchableOpacity>

		<TouchableOpacity>
    <View
			style={{
				height: 100,
				width: '90%',
				backgroundColor: 'white',
				margin: 5,
				borderRadius: 10,
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center'
			}}>
			<View style={{ 
			height: '90%', width: '25%', backgroundColor: 'gray', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Image Here</Text>
			</View>
			<View style={{ height: '90%', width: '70%', justifyContent: 'center' }}>
				<Text>Merchant Name</Text>
				<Text>Location</Text>
				<Text>Telephone Number</Text>
			</View>
		</View>
		</TouchableOpacity>

		<TouchableOpacity>
    <View
			style={{
				height: 100,
				width: '90%',
				backgroundColor: 'white',
				margin: 5,
				borderRadius: 10,
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center'
			}}>
			<View style={{ 
			height: '90%', width: '25%', backgroundColor: 'gray', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Image Here</Text>
			</View>
			<View style={{ height: '90%', width: '70%', justifyContent: 'center' }}>
				<Text>Merchant Name</Text>
				<Text>Location</Text>
				<Text>Telephone Number</Text>
			</View>
		</View>
		</TouchableOpacity>

		<TouchableOpacity>
    <View
			style={{
				height: 100,
				width: '90%',
				backgroundColor: 'white',
				margin: 5,
				borderRadius: 10,
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center'
			}}>
			<View style={{ 
			height: '90%', width: '25%', backgroundColor: 'gray', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Image Here</Text>
			</View>
			<View style={{ height: '90%', width: '70%', justifyContent: 'center' }}>
				<Text>Merchant Name</Text>
				<Text>Location</Text>
				<Text>Telephone Number</Text>
			</View>
		</View>
		</TouchableOpacity>


  </View>
  );
}

function CartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: 30, flex: 1}}>Cart</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: 30, flex: 1}}>Profile</Text>
    </View>
  );
}
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator>

	  <Tab.Screen name='Map'
        children={() => <MapScreen />}
        options={{
          title: 'Map',
          tabBarIcon: ({ color, size }) => <Icon name='map' color={color} size={size} />
        }}
        />

        <Tab.Screen name="Home" 
        children={() => <HomeScreen />}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Icon name='store' color={color} size={size} />
        }}
        />

        <Tab.Screen name='Cart'
        children={() => <CartScreen />}
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, size }) => <Icon name='receipt' color={color} size={size} />
        }}
        />

        <Tab.Screen name='Profile'
        children={() => <ProfileScreen />}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <Icon name='person' color={color} size={size} />
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

