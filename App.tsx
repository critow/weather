import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ActivityIndicator, Button } from 'react-native'
import { ErrorMessage, Search, Widget } from './components'
import { OpenWeatherData } from './services'
import OpenWeather from './services/open-weather/open-weather'
import * as Location from 'expo-location'

export default function App() {
    const [data, setData] = useState<OpenWeatherData>({})
    const [value, setValue] = useState<string>('')
    const [pending, setPending] = useState<boolean>(false)

    const weather = new OpenWeather()

    const getWeather = async (value: string | { lat: number; lon: number }) => {
        setPending(true)
        const response = await weather.getWeather(value)
        setData(response)
        setPending(false)
    }

    const getCurrentLocation = async () => {
        const { status } = await Location.requestPermissionsAsync()

        if (status !== 'granted') {
            console.error('Permission to access location was denied')
            return
        }

        const currentLocation: Location.LocationObject = await Location.getCurrentPositionAsync()

        if (currentLocation) {
            getWeather({
                lat: currentLocation.coords.latitude,
                lon: currentLocation.coords.longitude,
            })
        }
    }

    useEffect(() => {
        getCurrentLocation()
    }, [])

    return (
        <View style={styles.app}>
            <Search
                value={value}
                onChangeText={v => setValue(v)}
                onPress={() => {
                    getWeather(value)
                    setValue('')
                }}
            />
            <View style={styles.widget}>
                {pending && <ActivityIndicator size="large" />}
                {!pending &&
                    (data.cod && data.cod >= 200 && data.cod <= 299 ? (
                        <Widget data={data} />
                    ) : (
                        // <ErrorMessage
                        //     message={{ code: data.cod, text: data.message }}
                        // />
                        null
                    ))}
            </View>
            <Button
                title="Текущая геопозиция"
                onPress={() => getCurrentLocation()}
            />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: '#fff',
        paddingVertical: 60,
        paddingHorizontal: 20,
    },
    widget: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
    },
})
