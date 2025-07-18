import { useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ChatScreen = () => {
  const [inputMessage, setInputMessage] = useState();
  const [messages, setMessgaes] = useState();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={80} // 헤더가 있다면 보정
    >
      <View style={{ flex: 1, justifyContent: 'flex-end', padding: 20 }}>
        <View style={styles.message_view}></View>
        <TextInput
          placeholder="메시지를 입력하세요"
          value={inputMessage}
          style={{
            height: 50,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
          }}
        />
        <Button title="보내기" onPress={() => {}} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  message_view: {
    flex: 1,
  },
  message_input: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
});
export default ChatScreen;
