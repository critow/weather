import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

interface Message {
    code?: number
    text?: string
}

interface Props {
    message: Message
}

export const ErrorMessage: React.FC<Props> = ({ message }) => {
    const { code, text } = message

    return (
        <View style={styles.container}>
            <Text style={styles.code}>Error code: {code}</Text>
            <Text style={styles.message}>Message: {text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    code: {
        color: 'red',
        fontSize: 32,
    },
    message: {
        color: 'red',
        fontSize: 13,
        textAlign: 'center',
    },
})
