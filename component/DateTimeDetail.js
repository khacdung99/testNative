import moment from 'moment';
import React, { Component } from 'react'
import { View,Text,StyleSheet,SafeAreaView } from 'react-native'
import { subDay } from '../.expo/functionUtil/util';
import DetailOfDay from './DetailOfDay';
const styles = StyleSheet.create({
    containerDetail: {
        flexDirection:"row",
        flex:1.5,
        marginTop:20,
        marginLeft:20,
        justifyContent:"space-between",
    },  
    heading: {
        fontSize:45,
        color:"#FFFFFF",
        fontWeight:"300"
    },
    subHeading: {
        fontSize:20,
        color:"#FFFFFF",
        fontWeight:"300"
    },
    rightAlign: {
        marginRight:20,
        textAlign:"right",
        marginTop:20,
    },
    timeZone: {
        fontSize:20,
        color:"#FFFFFF",
        fontWeight:"300"
    },
    location: {
        fontSize:25,
        color:"#FFFFFF",
        fontWeight:"500"
    },
    containerItemDetail: {
        backgroundColor:"#494747",
        opacity:0.8,
        borderRadius:10,
        padding:15,
        borderStyle:"solid",
        borderColor:"white",
        borderWidth:1,
        marginTop:10,
       
    },  
  });
  
  
export class DateTimeDetail extends Component {
    state={
            time:moment()
     }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: moment() }), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    render() {
        let {value}=this.props;
        let {time}=this.state;
        return (
            <View style={styles.containerDetail}>
                <View>
                    <View>
                        <View >
                            <SafeAreaView >
                                <View>
                                    <Text style={styles.heading}>{time?moment(time).format("HH:mm"):""}</Text>
                                </View>
                                <View>
                                    <Text style={styles.subHeading}>{subDay(moment(time).format("dd"))}&emsp;{moment(time).format("DD/MM/YYYY")}</Text>
                                </View>
                            </SafeAreaView>
                        </View>
                    </View>
                    <View style={styles.containerItemDetail}>
                    <DetailOfDay value={value.humidity?value.humidity:""} title={"Độ ẩm"} unit={"%"}/>
                    
                    <DetailOfDay value={value.temp?value.temp:""} title={"Nhiệt độ"} unit={"°C"}/>
                    
                    <DetailOfDay value={value.wind_speed?value.wind_speed:""} title={"Tốc độ gió"} unit={"m/s"}/>
                    
                    <DetailOfDay value={value.sunrise?moment(value.sunrise).format("HH:mm"):""} title={"Bình minh"} />
                    
                    <DetailOfDay value={value.sunset?moment(value.sunset).format("HH:mm"):""} title={"Hoàng hôn"} />
                    </View>
                </View>
                <View style={styles.rightAlign}>
                        <View >
                            <Text style={styles.timeZone}>Việt Nam</Text>
                        </View>
                        <View >
                            <Text style={styles.location}>Tp Hà Nội</Text>
                        </View>
                </View>
            </View>
        )
    }
}

export default DateTimeDetail
