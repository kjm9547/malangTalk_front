import LoginScreen from '@/screens/auth/LoginScreen';
import { Stack } from 'expo-router';

const LoginPage = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: '로그인',
          headerStyle: { backgroundColor: '#2563EB' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerShown: true,
        }}
      />
      <LoginScreen />
    </>
  );
};
export default LoginPage;
