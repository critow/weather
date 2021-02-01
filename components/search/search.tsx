import React from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    NativeSyntheticEvent,
    NativeTouchEvent,
} from 'react-native'

interface Props {
    value: string
    onChangeText: (value: string) => void
    onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}

export const Search: React.FC<Props> = ({ value, onChangeText, onPress }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
            <Button onPress={onPress} title="Поиск" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    input: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
    },
})
