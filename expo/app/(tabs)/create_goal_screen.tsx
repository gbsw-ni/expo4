import React, { useState } from 'react';
import {
View,
Image,
StyleSheet,
Text,
SafeAreaView,
Pressable,
TextInput,
} from 'react-native';
import {
widthPercentageToDP as wp,
heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';

const Create_Goal_Screen = ({ navigation }: any) => {
const [selectedOption, setSelectedOption] = useState<string | null>(null);
const options = ['inside', 'outside']; 

const [textInputValue1, setTextInputValue1] = useState('');

const [textInputValue2, setTextInputValue2] = useState('');

const [imageUri, setImageUri] = useState<string | null>(null);

const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    console.log(selectedOption);
};

const handleTextInputChange1 = (text: string) => {
    setTextInputValue1(text);
};

const handleTextInputChange2 = (text: string) => {
    setTextInputValue2(text); 
};

const handleChooseImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
    alert("사진을 올려주세요!");
    return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
    setImageUri(result.assets[0].uri);
    } else {
    console.log('이미지 선택이 취소되었습니다.');
    }
};

return (
    <SafeAreaView>
    {/* 돌아가기 버튼 */}
    <Pressable
        onPressIn={() => navigation.navigate('Goal')}
        style={{
        backgroundColor: 'white',
        width: wp(5),
        margin: wp(10),
        marginLeft: wp(8),
        }}>
        <Image source={require('../icons/back_icon.png')} />
    </Pressable>
    <Text
        style={{
        fontSize: hp(2.5),
        fontWeight: 'bold',
        color: 'black',
        marginLeft: wp(10),
        marginBottom: wp(5),
        }}>
        목표를 <Text style={{color: '#0066FF'}}>직접</Text> 만들어보세요!
    </Text>
    <View style={styles3.create_goal_container}>
        <View style={{flexDirection: 'row', marginLeft: wp(5)}}>
        {options.map((option, index) => (
            <View
            key={index}
            style={{
                flexDirection: 'row',
                marginHorizontal: wp(5),
                marginTop: wp(8),
            }}>
            <Pressable
                style={[
                styles3.radio_button,
                {
                    backgroundColor:
                    selectedOption === option ? '#0066ff' : 'white',
                    borderColor:
                    selectedOption === option ? '#0066ff' : 'black',
                    borderWidth: wp(0.2),
                    marginTop: wp(1),
                },
                ]}
                onPress={() => handleSelectOption(option)}
            />
            <Text
                style={{
                fontSize: hp(2.4),
                fontWeight: 'bold',
                color: selectedOption === option ? '#0066FF' : 'black',
                }}>
                {options[index]}
            </Text>
            </View>
        ))}
        </View>
        <View style={styles3.input_container}>
        <Text style={styles3.textInput_title}>목표 이름</Text>
        <TextInput
            style={[styles3.textInput_style, {height: wp(10)}]}
            value={textInputValue1}
            onChangeText={handleTextInputChange1}
            placeholder="목표 이름을 작성해주세요!"
        />
        </View>
        <View>
        <Text style={styles3.textInput_title}>목표 설명</Text>
        <TextInput
            style={[styles3.textInput_style, {height: wp(23)}]}
            value={textInputValue2}
            onChangeText={handleTextInputChange2}
            placeholder="목표에 대해 상세하게 작성해주세요!"
        />
        </View>
        <Text style={styles3.textInput_title}>이미지 선택</Text>
        <Pressable
        onPress={handleChooseImage}
        style={[
            styles3.textInput_style,
            {
            height: wp(23),
            flexDirection: 'row',
            justifyContent: 'space-between',
            },
        ]}>
        <Text style={{fontSize: hp(1.3), marginTop: wp(2.5)}}>
            목표와 관련된 이미지를 첨부해주세요!
        </Text>
        <View style={{marginLeft: wp(8), marginTop: wp(4)}}>
            <Text style={{fontSize: hp(1.2), marginLeft: wp(2)}}>click!</Text>
            <Image
            source={require('../icons/image_icon.png')}
            style={{width: wp(10), height: wp(10)}}
            />
        </View>
        </Pressable>

        {imageUri && (
        <View style={{width: wp(40)}}>
            <Image source={{uri: imageUri}} style={{width: wp(30)}} />
        </View>
        )}
        <Pressable
        style={{
            position: 'absolute',
            width: wp(30),
            height: wp(10),
            borderRadius: wp(9),
            backgroundColor: '#0066FF',
            bottom: 0,
            marginBottom: hp(3),
            marginLeft: wp(48),
            elevation: 7,
            shadowColor: '#0066FF',
            shadowOpacity: 0.2,
            shadowOffset: {width: 0, height: 5},
            shadowRadius: wp(5),
        }}
        onPressIn={() => navigation.navigate('Goal')}>
        <Text
            style={{
            color: 'white',
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: hp(1),
            }}>
            작성완료!
        </Text>
        </Pressable>
    </View>
    <Text style={{fontSize: hp(1.3), marginTop: wp(5), marginLeft: wp(16)}}>
        가이드 위반이 되는 목표 작성 시 별도의 제재를 받을 수 있습니다.
    </Text>
    </SafeAreaView>
);
}

const styles3 = StyleSheet.create({
create_goal_container: {
    alignSelf: 'center',
    width: wp(83),
    height: hp(65),
    backgroundColor: 'white',
    borderRadius: wp(5),
    elevation: 9,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: wp(5),
},
radio_button: {
    flexDirection: 'row',
    padding: 10,
    width: wp(0.2),
    height: wp(0.2),
    borderRadius: wp(5),
    marginRight: wp(2),
},
input_container: {
},
textInput_title: {
    color: '#0066ff',
    fontSize: hp(1.4),
    fontWeight: 'bold',
    marginLeft: wp(10),
    marginTop: wp(5),
    marginBottom: wp(1),
},
textInput_style: {
    alignSelf: 'center',
    borderColor: '#A5B1CF',
    width: wp(70),
    borderWidth: wp(0.2),
    borderRadius: wp(6),
    fontSize: hp(1.4),
    paddingHorizontal: wp(4),
    paddingLeft: wp(5),
    textAlignVertical: 'top',
},
});

export default Create_Goal_Screen;