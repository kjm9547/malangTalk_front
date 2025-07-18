import ChatScreen from '@/screens/chat/ChatScreen';
import { Stack } from 'expo-router';

const ChatRoomPage = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: '채팅방',
          headerStyle: { backgroundColor: '#2563EB' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerShown: true,
        }}
      />
      <ChatScreen />
    </>
  );
};

export default ChatRoomPage;
