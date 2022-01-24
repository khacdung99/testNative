import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, View } from "react-native";
import DateTimeDetail from "./component/DateTimeDetail";
import ScrollViewDateTime from "./component/ScrollViewDateTime";
const image = { uri: "https://reactjs.org/logo-og.png" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getWeather = async () => {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=21.0245&lon=105.841171&units=metric&exclude=minutely&appid=9437442521d3b3827e755f088f5019e2');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getWeather();
  }, []);

  console.log(data);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/images/photo-bg-1.jpg')}
        resizeMode="cover" style={styles.image}>
        <DateTimeDetail value={data.current?data.current:""} />
        <ScrollViewDateTime value={data.daily?data.daily:[]}/>
      </ImageBackground>
    </View>
  )
}
