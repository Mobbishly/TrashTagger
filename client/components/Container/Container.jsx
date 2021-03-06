import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome, Octicons, Entypo } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Map from '../Map/Map';
import Profile from '../Profile/Profile';
import KarmaPoints from '../KarmaPoints/KarmaPoints';
import CameraView from '../Camera/Camera';

const Tab = createBottomTabNavigator()

const Container = ({user, setIsLoggedIn}) => {
  
  return (
    <Tab.Navigator style={styles.nav}>
      
      <Tab.Screen 
        name="Map"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="map-marker-alt" size={24} color="gray" />
          ),
        }}
        >
          {(props) => <Map {...props} user={user}  />} 
        </Tab.Screen>


      <Tab.Screen 
      name="Profile"
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" size={24} color="gray" />
        ),
        headerShown: false

      }}
      >
        {(props) => <Profile {...props} user={user} setIsLoggedIn={setIsLoggedIn} />} 
      </Tab.Screen>
  
      <Tab.Screen 
        name="Karma"
        component={KarmaPoints} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="graph" size={24} color="grey" />
          ),
        }}
      />

      <Tab.Screen 
        name="Camera"
   
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="camera" size={24} color="grey" />
          ),
        }}
        >
          {(props) => <CameraView {...props} user={user}  />} 
        </Tab.Screen>
    </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
  button: {

    backgroundColor: '#223148',

},

  });


export default Container
