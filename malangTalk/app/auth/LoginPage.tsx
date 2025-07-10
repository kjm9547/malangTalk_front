import LoginScreen from "@/screens/auth/LoginScreen"
import { Stack } from "expo-router"
import { Text, View } from "react-native"

const LoginPage = () => {
    return(
        <>
        <Stack.Screen
            options={{
                title: '회원가입',
                headerStyle: { backgroundColor: '#2563EB' },
                headerTintColor: '#fff',
                headerTitleAlign: 'center'
            }}
        />
        <LoginScreen/>
        </>
    )
}
export default LoginPage