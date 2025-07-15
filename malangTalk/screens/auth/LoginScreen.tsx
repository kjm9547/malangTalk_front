import SeperateLine from '@/components/SeperateLine';
import { Colors } from '@/constants/Colors';
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import axios from 'axios';
import { router } from 'expo-router';

type inputForm = {
  email: string;
  pw: string;
};

const LoginScreen = () => {
  const [inputForm, setInputForm] = useState<inputForm>({
    email: '',
    pw: '',
  });
  const [state, setState] = useState<Object>();
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        setState({ userInfo: response.data });
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        handleSignUpButtonClick();
        // an error that's not related to google sign in occurred
      }
    }
  };
  const handleInputFrom = (v: string, type: string) => {
    setInputForm((prev) => ({ ...prev, [type]: v }));
  };
  const submitValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputForm.email) {
      Alert.alert('이메일을 입력해주세요');
      return;
    } else if (!inputForm.pw) {
      Alert.alert('비밀번호를 입력해주세요');
      return;
    } else if (emailRegex.test(inputForm.email) === false) {
      Alert.alert('올바른 이메일 형식을 입력해주세요');
      return;
    } else if (inputForm.pw.length < 8) {
      Alert.alert('비밀번호는 8자 이상이어야 합니다');
      return;
    } else {
      // 모든 입력이 유효한 경우 fetch
      handleSignUpButtonClick();
    }
  };
  const handleSignUpButtonClick = async () => {
    const targetUrl = 'http://localhost:3000/login'; // 실제 회원가입 API URL로 변경해야 합니다.
    const fetchData = {
      email: inputForm.email,
      pw: inputForm.pw,
    };
    const res = await axios.post(targetUrl, fetchData);
    if (res.status === 200) {
      Alert.alert('로그인 성공!');
      router.push('/(tabs)/MainTab'); // 로그인 성공 후 이동할 페이지
      // 회원가입 성공 후 추가 작업 (예: 로그인 페이지로 이동)
    } else {
      Alert.alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };
  return (
    <ScrollView bounces={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleBox}>
          <View style={styles.logoCircle}></View>
          <Text style={styles.titleText}>말랑톡에 오신 걸 환영해요!</Text>
          <Text style={styles.subTitle}>
            새로운 친구들과 즐거운 대화를 시작해보세요
          </Text>
        </View>

        <View style={styles.inputBox}>
          <Text>이메일</Text>
          <TextInput
            style={styles.inputFeild}
            value={inputForm.email}
            onChangeText={(v) => handleInputFrom(v, 'email')}
            placeholder="이메일을 입력하세요"
            placeholderTextColor={Colors.light.placehorder_text}
          />
        </View>
        <View style={styles.inputBox}>
          <Text>비밀번호</Text>
          <TextInput
            style={styles.inputFeild}
            value={inputForm.pw}
            onChangeText={(v) => handleInputFrom(v, 'pw')}
            placeholder="비밀번호를 입력하세요"
            placeholderTextColor={Colors.light.placehorder_text}
          />
          <Text style={styles.infoText}>1</Text>
        </View>
        <TouchableHighlight
          style={styles.signup_button}
          underlayColor={Colors.light.title_color_hover}
          onPress={submitValidation}
        >
          <Text style={styles.signup_button_text}>로그인하기</Text>
        </TouchableHighlight>
        <View style={styles.seperate}>
          <SeperateLine styles={styles.seperateLine} />
          <Text style={styles.seperateText}>또는</Text>
          <SeperateLine styles={styles.seperateLine} />
        </View>

        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {
            signIn();
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  logoCircle: {
    display: 'flex',
    width: 75,
    height: 75,
    borderRadius: '50%',
    backgroundColor: Colors.light.title_color_light,
    marginBottom: 15,
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 700,
    color: Colors.light.title_text,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: Colors.light.subTitle_text,
  },
  inputBox: {
    width: '90%',
    gap: 5,
    marginBottom: 25,
  },
  inputFeild: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: Colors.light.input_border,
    borderRadius: 15,
  },
  infoText: {
    color: Colors.light.info_text,
    fontSize: 12,
  },
  signup_button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: Colors.light.title_color_default,
    width: '90%',
    height: 60,
    borderRadius: 15,
  },
  signup_button_text: {
    fontSize: 18,
    fontWeight: 700,
    color: Colors.light.white,
  },
  seperate: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  seperateLine: {
    width: '40%',
    height: 1,
    borderBottomWidth: 0.4,
    color: Colors.light.seperate_line,
    marginVertical: 40,
  },
  seperateText: {
    color: Colors.light.info_text,
  },
});
export default LoginScreen;
