import styled from 'styled-components/native'
const Container = styled.SafeAreaView`
    display: flex;
    flex: 1;
    background-color: red;
`
const TitleText = styled.Text`
    font-weight: 700;
    font-size: 32;
    color: white;
`
const SubTitleText = styled.Text`
    color: rgb(219,234,254);
`
export default function LandingPage () {
    return(
        <Container>
            <TitleText>말랑톡</TitleText>
            <SubTitleText>전 세계 친구들과 말랑말랑한 대화</SubTitleText>
        </Container>
    )
    
}