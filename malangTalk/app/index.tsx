import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import LandingPage from './landing/LandingPage';



export default function Landing() {
  const router = useRouter();
  // router.push('/경로') → 새 페이지로 이동
  // router.replace() → 히스토리 교체
  // router.back() → 뒤로가기
  return (
        <LandingPage/>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  title: { fontSize:24, marginBottom:20 },
});
