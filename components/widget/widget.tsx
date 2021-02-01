import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Icon } from '..'
import { OpenWeatherData } from '../../services'

interface Props {
    data: OpenWeatherData
}

export const Widget: React.FC<Props> = ({ data }) => {
    return (
        <>
            <Text style={styles.title}>{data.name}</Text>
            <Icon value={data.weather![0].icon} />
            <Text style={styles.description}>
                {data.weather![0].description}
            </Text>
            <Text style={styles.temp}>{Math.round(data.main!.temp)}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
    },
    description: {
        fontSize: 16,
    },
    temp: {
        fontSize: 28,
    },
})
