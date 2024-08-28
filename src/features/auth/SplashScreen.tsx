import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@utils/Constants'
import { screenHeight, screenWidth } from '@utils/Scaling'
import Logo from '@assets/images/splash_logo.jpeg'
import GeoLocation from '@react-native-community/geolocation'
import { tokenStorage } from '@state/storage'
import { useAuthStore } from '@state/authStore'
import { resetAndNavigate } from '@utils/NavigationUtils'


GeoLocation.setRNConfiguration({
    skipPermissionRequests: false,
    enableBackgroundLocationUpdates: true,
    authorizationLevel: 'always',
    locationProvider: 'auto'
})
const SplashScreen = () => {
    // const { user, setUser } = useAuthStore();
    const tokenCheck = async () => {
        const accessToken = tokenStorage.getString('accessToken') as string;
        const refreshToken = tokenStorage.getString('refreshToken') as string;
        if (accessToken) {

        }
        resetAndNavigate("CustomerLogin")
        return false

    }
    useEffect(() => {
        const FetchGeoLocation = () => {
            try {
                GeoLocation.requestAuthorization();
                tokenCheck()
            }
            catch (err) {
                Alert.alert("Sorry we need location to give you better experience for shopping")
            }
        }
        const timeOutId = setTimeout(FetchGeoLocation, 1000);
        return () => { clearTimeout(timeOutId) }
    }, [])
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    logoImage: {
        height: screenHeight * 0.7,
        width: screenWidth * 0.7,
        resizeMode: "contain",

    }
})

export default SplashScreen

