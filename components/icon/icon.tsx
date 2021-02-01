import React from 'react'
import { Image, StyleSheet } from 'react-native'

interface Props {
    value: string
}

export const Icon: React.FC<Props> = ({ value }) => {
    return (
        <Image
            style={styles.icon}
            source={{
                uri: `http://openweathermap.org/img/wn/${value}@2x.png`,
            }}
        />
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 100,
        height: 100,
    },
})
