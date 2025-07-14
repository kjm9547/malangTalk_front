import SignupScreen from '@/screens/auth/SignupScreen';
import { Stack } from 'expo-router';

const SignupPage = () => {
  // SignupPage 컴포넌트 내용
  return (
    <>
      <Stack.Screen
        options={{
          title: '회원가입',
          headerStyle: { backgroundColor: '#2563EB' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />
      <SignupScreen />
    </>
  );
};
export default SignupPage;
