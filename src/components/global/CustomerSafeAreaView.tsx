import { View, Text, ViewStyle, SafeAreaView, StyleSheet } from 'react-native'
import React, { FC, ReactNode } from 'react'

interface CustomSafeAreaViewProps {
    children: ReactNode,
    style?: ViewStyle,
}
const CustomerSafeAreaView: FC<CustomSafeAreaViewProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.container, style]}>
            {children}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
export default CustomerSafeAreaView