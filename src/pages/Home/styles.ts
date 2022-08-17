import styled from 'styled-components/native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
`;

export const TextWrapper = styled.View`
    height: 120px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #918B6A;
`;

export const InputSearch = styled.TextInput`
    height: 40px;
    width: 75%;
    border-radius: 8px;
    padding: 0 20px;
    background-color: #f3f3f3;
    color: #444;

`;

export const ButtonSearch = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 40px;
    align-items: center;
    justify-content: center;
    width: 15%;
    background-color: #f3f3f3;
    border-radius: 8px;
    margin-left: 10px;
`;

export const SearchIcon = styled(FA5Icon)`
    color: #444;
    font-size: 20px;
`;


export const Title = styled.Text`
    font-size: 20px;
    color: #444;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
`;
