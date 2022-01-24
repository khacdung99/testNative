import React, { Component } from 'react'
import { View,Text,StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    containerDetail: {
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5,
    },
    containerTitle: {
        fontSize:15,
        fontWeight:"300",
        color:"#FFFFFF",
    },
    containerContent: {
        fontSize:15,
        fontWeight:"300",
        color:"#FFFFFF",
        marginLeft:10
    },
    
  });
  
export class DetailOfDay extends Component {
    render() {
        let {value,title,unit}=this.props;
        return (
            <View style={styles.containerDetail}>
                <View>
                    <Text style={styles.containerTitle}>{title}</Text>
                </View>
                <View>
                    <Text style={styles.containerContent}>{value}&nbsp;{unit}</Text>
                </View>
            </View>
                   
        )
    }
}
export default DetailOfDay
