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

type inputForm = {
  nickname: string;
  email: string;
  pw: string;
};
const testImgUrl =
  'data:image/jpeg;base64,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';
const SignupScreen = () => {
  const [inputForm, setInputForm] = useState<inputForm>({
    nickname: '',
    email: '',
    pw: '',
  });
  const [state, setState] = useState<Object>();
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  useEffect(() => {
    console.log(state);
  }, [state]);
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
    if (!inputForm.nickname) {
      Alert.alert('닉네임을 입력해주세요');
      return;
    } else if (!inputForm.pw) {
      Alert.alert('비밀번호를 입력해주세요');
      return;
    } else if (!inputForm.email) {
      Alert.alert('이메일을 입력해주세요');
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
    const targetUrl = 'http://localhost:3000/signup'; // 실제 회원가입 API URL로 변경해야 합니다.
    const fetchData = {
      userName: inputForm.nickname,
      email: inputForm.email,
      pw: inputForm.pw,
      imgUrl: testImgUrl,
      type: 'malang',
    };
    const res = await axios.post(targetUrl, fetchData);
    if (res.status === 201) {
      Alert.alert('회원가입이 완료되었습니다!');
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
          <Text>닉네임</Text>
          <TextInput
            style={styles.inputFeild}
            value={inputForm.nickname}
            onChangeText={(v) => handleInputFrom(v, 'nickname')}
            placeholder="사용할 닉네임을 입력하세요"
            placeholderTextColor={Colors.light.placehorder_text}
          />
          <Text style={styles.infoText}>
            다른 사용자들에게 보여질 이름이에요
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
          <Text style={styles.infoText}>
            8자 이상의 안전한 비밀번호를 사용하세요
          </Text>
        </View>
        <TouchableHighlight
          style={styles.signup_button}
          underlayColor={Colors.light.title_color_hover}
          onPress={submitValidation}
        >
          <Text style={styles.signup_button_text}>계정 만들기</Text>
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
export default SignupScreen;
