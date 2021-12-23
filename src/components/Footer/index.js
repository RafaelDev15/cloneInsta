import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Footer(){
  return(
    <View style={styles.footer}>
            
            <Image 
            source={require('../../img/home.png')}
            style={styles.icon}
            />
            
            <Image 
            source={require('../../img/search.png')}
            style={styles.icon}
            />

            <Image 
            source={require('../../img/video.png')}
            style={styles.icon}
            />

            <Image 
            source={require('../../img/bag.png')}
            style={styles.icon}
            />

            <Image 
            source={{ uri: 'https://t2.tudocdn.net/576449?w=660&h=879' }}
            style={styles.profile}
            />


    </View>
  );
}

const styles = StyleSheet.create({
  footer:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 2
  },

  icon:{
    width: 23,
    height: 23,
  },

  profile:{
    width: 40,
    height: 40,
    borderRadius: 20
  }
})