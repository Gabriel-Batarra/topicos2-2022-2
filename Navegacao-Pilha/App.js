import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack'
const Stack = createStackNavigator();

function Home({navigation}){
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
      <Text>Welcome to our Home Screen</Text>
        <Pressable onPress={ () => navigation.navigate('Conference')}
          style={{
            backgroundColor: 'plum',
            padding: 10,
            maginBottom: 10,
            marginTop: 10
          }}>
          <Text> Conference</Text>
        </Pressable>
          <Pressable onPress={ () => navigation.navigate('Story')}
          style={{
            backgroundColor: 'plum',
            padding: 10,
            maginBottom: 10,
            marginTop: 10
          }}>
            <Text> Story </Text>
          </Pressable>
    </View>
  )
}
function Conference() {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
      <Text> Conference Details </Text>
    </View>
  )
}

function Story() {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
      <Text> Story Details </Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions = {({navigation, route}) => ({
        headerLeft: (props) => {
          return (
            <>
              <Text> Menu </Text>
              {props.canGoBack && <HeaderBackButton {...props}/>}
              
            </>
          )
        }
      })}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Conference" component={Conference}/>
        <Stack.Screen name="Story" component={Story}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
