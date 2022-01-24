import React from 'react';
import { View, StyleSheet, SafeAreaView ,FlatList,Text  } from 'react-native';
import ScrollViewDetailOfDay from './ScrollViewDetailOfDay';
const styles = StyleSheet.create({
    containerScroll: {
        padding:20,
        flex:0.5,
        borderRadius:10,
        borderStyle:"solid",
        borderColor:"white",
        borderWidth:1,
        margin:10,
        marginBottom:30
    },  
    header: {
      color:"white",
      padding:5,
  },    
  containDetail: {
    flexDirection:"row",
    flex:1,
  },  
  divider:{
    borderBottomColor: 'white',
    opacity:0.5,
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom:10
  }
});
export default function ScrollViewDateTime(props=this.props) {
  let value=props.value;
    return (
      <View style={styles.containerScroll}>
        <View><Text style={styles.header}>Dự báo 7 ngày trong tuần</Text></View>
        <View style={styles.divider}/>
        <View style={styles.containDetail}>
          <FlatList
        data={value}
        horizontal={true}
        renderItem={({item}) =>  <ScrollViewDetailOfDay value={item}/>}
      />
        </View>

      </View>
    )
}
