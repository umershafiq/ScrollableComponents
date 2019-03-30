import React, { Component } from 'react';
import { AppRegistry, ScrollView,StyleSheet, Image, Text } from 'react-native';
import Props from './Props';
import Props2 from './Props2';
import State from './State';
import Style from './Style';
import Height from './Height';
import Width from './Width';
import Flexbox from './Flexbox';
import Justifycontent from './Justifycontent';
import Alignitems from './Alignitems';
import HandlingText from './HandlingText';
import HandlingTouch from './HandlingTouch';
import Handling_Touch2 from './Handlingtouch2';
import Flate_list from './Flatelist';
import Sectionlist from './Sectionlist';
import Networking from './Networking';


export default class ScrollableComponents extends Component {
  render() {
      return (
        <ScrollView>
          <Text style={styles.textBlock}> BY Ahmed Shabbir </Text>
          <Text style={styles.textBlock}> Props1 </Text>
          <Props/>
          <Text style={styles.textBlock}> Props2 </Text>
          <Props2/>
          <Text style={styles.textBlock}> State </Text>
          <State/>
          <Text style={styles.textBlock}> Style </Text>
          <Style/>
          <Text style={styles.textBlock}> Height </Text>
          <Height/>        
          <Text style={styles.textBlock}> Width </Text>
          <Width/>
          <Text style={styles.textBlock}> Flexbox </Text>
          <Flexbox/>
          <Text style={styles.textBlock}> Justifycontent </Text>
          <Justifycontent/>
          <Text style={styles.textBlock}> Alignitems </Text>
          <Alignitems/>
          <Text style={styles.textBlock}> Handling_Text </Text>
          <HandlingText/>
          <Text style={styles.textBlock}> Handling_Touch </Text>
          <HandlingTouch/>
          <Text style={styles.textBlock}> Handling_Touch2 </Text>  
          <Handling_Touch2/>
          <Text style={styles.textBlock}> Flate_list </Text>  
          <Flate_list/>
          <Text style={styles.textBlock}> Section_list </Text>  
          <Flate_list/>
          <Text style={styles.textBlock}> Networking </Text>  
          <Networking/>


        </ScrollView>
    );
    
} 
}