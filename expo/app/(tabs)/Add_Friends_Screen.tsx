import React, {useState} from 'react';
import {
View,
Image,
StyleSheet,
Text,
SafeAreaView,
Pressable,
TextInput,
Keyboard,
} from 'react-native';
import {
widthPercentageToDP as wp,
heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

let level = 0;
const PROFILE = [
{
    name: '홍길동',
    email: 'kimyoujin0821@gmail.com',
    image: require('../images/profile1.png'),
    code: '#234FCR',
},
];

const FRIENDS_LIST = [
{
    user_image: require('../images/profile1.png'),
    user_name: '손보석',
    user_code: '#02BS12',
},
{
    user_image: require('../images/profile1.png'),
    user_name: '김유진',
    user_code: '#14YJ04',
},
{
    user_image: require('../images/profile1.png'),
    user_name: '구본윤',
    user_code: '#07BY24',
},
{
    user_image: require('../images/profile1.png'),
    user_name: '박민서',
    user_code: '#71MS88',
},
{
    user_image: require('../images/profile1.png'),
    user_name: '김용진',
    user_code: '#02YJ16',
},
{
    user_image: require('../images/profile1.png'),
    user_name: '김용진',
    user_code: '#02YJ17',
},
{
    user_image: require('../images/profile1.png'),
    user_name: '김용진',
    user_code: '#02YJ18',
},
{
    user_image: require('../images/profile1.png'),
    user_name: '김용진',
    user_code: '#02YJ19',
},
];

const  Add_Friends_Screen = ({navigation}:any) => {
const [searchFriendsValue, setSearchFriendsValue] = useState('');
const [searchGroupValue, setSearchGroupValue] = useState('');
const [message, setMessage] = useState('');
const [isVisible, setIsVisible] = useState(false);

const handleSearchFriendsValue = (text: React.SetStateAction<string>) => {
    setSearchFriendsValue(text); // 텍스트 입력값을 변경
};
const handleSearchGroupValue = (text: React.SetStateAction<string>) => {
    setSearchGroupValue(text); // 텍스트 입력값을 변경
};

const handlePressFriendsButton = () => {
    Keyboard.dismiss();
    const exists = FRIENDS_LIST.some(
    item => item.user_code === searchFriendsValue,
    );
    if (exists) {
    showAlert('친구 추가가 완료되었습니다');
    } else {
    showAlert('존재하지않는 친구 코드입니다');
    }
};

const showAlert = (message: React.SetStateAction<string>) => {
    setMessage(message);
    setIsVisible(true);

    //2초 후에 알림 숨김
    setTimeout(() => {
    setIsVisible(false);
    setMessage('');
    }, 2500);
};

return (
    <SafeAreaView style={styles.container}>
    <Pressable
        onPressIn={() => navigation.navigate('Together')}
        style={{
        backgroundColor: 'white',
        width: wp(5),
        marginLeft: wp(8),
        marginTop: hp(3),
        position: 'absolute',
        }}>
        <Image source={require('../icons/back_icon.png')} />
    </Pressable>
    <View style={{flexDirection: 'row'}}>
        <View style={styles.profile_image}>
        <Image
            style={{
            width: wp(25),
            height: wp(25),
            overflow: 'hidden',
            borderRadius: wp(5),
            alignSelf: 'center',
            }}
            source={PROFILE[0].image}
        />
        </View>
        <View style={{flexDirection: 'column'}}>
        <Text
            style={{
            color: 'black',
            fontWeight: '900',
            fontSize: hp(2.5),
            marginTop: hp(8),
            letterSpacing: wp(2),
            }}>
            {PROFILE[0].name}
        </Text>
        <Text
            style={{color: '#0066ff', fontWeight: 'bold', marginLeft: wp(1.5)}}>
            Lv.{level}
        </Text>
        <Text style={{marginLeft: wp(0.5)}}>{PROFILE[0].code}</Text>
        </View>
    </View>
    <View style={{marginTop: hp(8)}}>
        {/*친구 검색*/}
        <TextInput
        style={styles.search_box}
        value={searchFriendsValue}
        onChangeText={handleSearchFriendsValue}
        placeholder="추가할 친구 코드를 입력하세요"
        />
        <Pressable
        onPressIn={handlePressFriendsButton}
        style={{
            backgroundColor: 'white',
            width: wp(10),
            position: 'absolute',
            marginTop: hp(1.4),
            marginLeft: wp(80),
        }}>
        <Image source={require('../icons/search_icon.png')} />
        </Pressable>
    </View>
    <View style={{marginTop: hp(1.8)}}>
        {/*그룹 검색*/}
        <TextInput
        style={styles.search_box}
        value={searchGroupValue}
        onChangeText={handleSearchGroupValue}
        placeholder="목표 공유 그룹을 검색하세요"
        />
        <Pressable
        onPressIn={() => {
            console.log('pressed success');
        }}
        style={{
            backgroundColor: 'white',
            width: wp(10),
            position: 'absolute',
            marginTop: hp(1.4),
            marginLeft: wp(80),
        }}>
        <Image source={require('../icons/search_icon.png')} />
        </Pressable>
    </View>
    <View>
        {isVisible && (
        <View style={styles.alert_style} >
            <Image source={require('../icons/verified_checkmark_icon.png')} />
            <Text 
            style={{color: 'black', marginLeft: wp(3), marginBottom: wp(2)}}>
            {message}
            </Text>
        </View>
        )}
    </View>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
    marginTop: wp(5),
    backgroundColor: 'white',
    height: hp(200),
},
profile_image: {
    color: 'white',
    width: wp(25),
    height: wp(25),
    overflow: 'hidden',
    borderRadius: wp(20),
    marginTop: hp(6),
    marginLeft: wp(20),
    marginRight: wp(5),
    elevation: 11,
    shadowColor: '#585A58',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: wp(5),
},
search_box: {
    alignSelf: 'center',
    width: wp(85),
    height: wp(12),
    backgroundColor: 'white',
    borderRadius: wp(5),
    elevation: 9,
    shadowColor: 'black',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: wp(5),
    paddingHorizontal: wp(5),
    paddingRight: wp(14),
    marginBottom: hp(3),
},
alert_style: {
    backgroundColor: 'white',
    borderRadius: wp(7),
    position: 'absolute',
    width: wp(70),
    height: wp(12),
    elevation: 4,
    shadowOpacity: 0.1,
    shadowOffset: {width: 1, height:2},
    shadowRadius: wp(5),
    alignSelf: 'center',
    paddingHorizontal: wp(4),
    top: 240,
    shadowColor: '#585A58',
    paddingRight: wp(14),
    alignItems: 'center',
    flexDirection: 'row',
},
});

export default Add_Friends_Screen;