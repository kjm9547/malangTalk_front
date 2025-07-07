import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import LandingPage from './screens/landing/LandingPage';

export default function Landing() {
  const router = useRouter();

  return (
    
        <LandingPage/>
    
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  title: { fontSize:24, marginBottom:20 },
});
