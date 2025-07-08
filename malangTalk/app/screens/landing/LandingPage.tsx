import { Button, Pressable, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import styled from 'styled-components/native'
const Container = styled.SafeAreaView`
    display: flex;
    flex: 1;
    align-items: center;
`
const TitleText = styled.Text`
    font-weight: 700;
    font-size: 32px;
    color: #111827;
    margin-bottom: 10px;
    margin-top: 80px;
`
const SubTitleText = styled.Text`
    color: #4B5563;
    margin-bottom: 60px;
`
const RoundCard = styled.View`
    display: flex;
    
    margin-bottom: 10px;
    width: 70%;
    height: 70px;
    border-radius: 15px;
    background-color: #F9FAFB;
    align-items: center;
    padding-left: 10px;
    flex-direction: row;
`
const CardIcon = styled.View`
    width: 50px;
    height: 50px;
    background-color: #DBEAFE;
    border-radius: 50%;
    margin-right: 10px;
`
const CardTitle = styled.Text`
    color: #111827;
    font-weight: 600;
`
const CardSubTitle = styled.Text`
    color: #4B5563;
`

const StartBtn = styled.TouchableHighlight`
width: 70%;
height: 50px;
border-radius: 20px;
margin-top: 30px;
display: flex;
align-items: center;
justify-content: center;
    background-color: #3B82F6;
    color: #ffffff;
`
const BtnText = styled.Text`
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
`

const LinkText = styled.Text`
    color:#3B82F6;
    margin-top: 10px;
`

const InfoText = styled.Text`
margin-top: 10px;
    color :#4B5563;
`
export default function LandingPage () {
    const data = [
        {
            title: "즉시 연결",
            subTitle: "버튼 하나로 새로운 친구와 바로 대화"
        },
        {
            title: "전 세계 사용자",
            subTitle: "다양한 나라의 사람들과 소통"
        },
        {
            title: "안전한 채팅",
            subTitle: "익명으로 안전하게 대화하세요"
        }
    ]
    return(
        <Container>
            <TitleText>말랑톡</TitleText>
            <SubTitleText>전 세계 친구들과 말랑말랑한 대화</SubTitleText>
            {
                data.map((v, i)=>(
                    <RoundCard key={`${v.title}${i}`}>
                    <CardIcon>
                       
                    </CardIcon>
                    <View>
                        <CardTitle>
                            {v.title}
                        </CardTitle>
                        <CardSubTitle>
                            {v.subTitle}
                        </CardSubTitle>
                    </View>
                </RoundCard>
                ))
            }
            <StartBtn underlayColor={"#2563EB"} onPress={()=>console.log("???")}><BtnText>시작하기</BtnText></StartBtn>
        
          <LinkText>이미 계정이 있어요</LinkText>
        <InfoText>지금 <Text></Text>1,247명이 말랑톡에서 대화 중이에요</InfoText>    
        </Container>
    )
    
}