import { Colors } from '@/constants/Colors';
import axios from 'axios';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type User = {
  email: string;
  imgUrl: string;
  userName: string;
};
const UsersScreen = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const fetchData = async () => {
    const targetUrl = 'http://localhost:3000/users'; // 실제 API URL로 변경 필요
    const res = await axios.get(targetUrl);
    if (res.status === 200) {
      setUserList(res.data);
    } else {
      Alert.alert('사용자 데이터를 가져오는 데 실패했습니다.');
    }
  };
  const userCardClickHandler = () => {
    router.push('/chat/ChatRoomPage');
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>대충 헤더가 올겁니다.</Text>
      </View>
      <ScrollView>
        {userList.length > 0 &&
          userList.map((user, index) => (
            <Pressable style={styles.user_card} onPress={userCardClickHandler}>
              <Image
                source={{ uri: user.imgUrl }}
                style={styles.card_user_img}
              />
              <View>
                <Text key={index} style={{ marginVertical: 5 }}>
                  {user.userName}
                </Text>

                <View style={styles.user_message_box}>
                  <Text key={index} style={{ marginVertical: 5 }}>
                    안녕하세요
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  header: {
    height: 50,
  },
  card_user_img: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    marginRight: 10,
  },
  user_card: {
    display: 'flex',
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: 'black',
    width: '100%',
    minHeight: 50,
  },
  user_message_box: {
    width: 'auto',
    color: Colors.light.content_text,
  },
});
export default UsersScreen;
