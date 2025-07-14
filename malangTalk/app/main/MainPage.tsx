import MainScreen from '@/screens/main/MainScreen';
import { Stack } from 'expo-router';

const MainPage = () => {
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
      <MainScreen />
    </>
  );
};
export default MainPage;
