import React from 'react'
import { View, StyleSheet, Image, StatusBar, Text } from 'react-native'
import moment from 'moment';
import { subDay } from '../.expo/functionUtil/util';
const styles = StyleSheet.create({
    tinyLogo: {
        width: 60,
        height: 60,
    },
    containerScroll: {
        flexDirection: "row",
        flex: 0.5,
        padding: 20,
        borderRadius: 5,
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1,
        width:300,
        height: "80%",
        marginHorizontal: 16,
        padding: 20,
        backgroundColor:"#494747",
        opacity:0.8,
        marginVertical:10,
        justifyContent:"space-between"
    },
    container: {
        color: "white",
        marginRight:25,
    },
    item:{
        flexDirection: "row",
        justifyContent:"space-between"
    }
});

export default function ScrollViewDetailOfDay(props) {
    let {value}=props;
    let weather;
    if(value.weather&&value.weather.length)
    {
       let data=value.weather;
        weather=data[0];
    }
    console.log( 'http://openweathermap.org/img/wn/'+value.weather[0].icon+"@2x.png");
    return (
        <View style={styles.containerScroll}>
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={weather?
                    {uri: 'http://openweathermap.org/img/wn/'+weather.icon+"@2x.png"}:
                    require('./../assets/images/cloud.png')}

                />
            </View>
            <View>
                <View>
                    <Text style={styles.container}>
                     {value.dt?moment(value.dt*1000).format("dd")==moment().format("dd")?"Hôm nay":subDay(moment(value.dt*1000).format("dd")):""}</Text>
                </View>
                <View style={styles.item}>
                    <View >
                        <Text style={styles.container}>
                            Sáng
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.container}>
                            {value.temp&&value.temp.morn?value.temp.morn:""}
                        </Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <View>
                        <Text style={styles.container}>
                            Chiều
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.container}>
                             {value.temp&&value.temp.eve?value.temp.eve:""}
                        </Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <View>
                        <Text style={styles.container}>
                            Đêm
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.container}>
                            {value.temp&&value.temp.night?value.temp.night:""}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
