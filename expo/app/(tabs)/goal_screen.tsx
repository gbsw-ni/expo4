import React, { useState } from 'react';
import {
View,
Image,
StyleSheet,
ScrollView,
Text,
SafeAreaView,
Pressable,
} from 'react-native';
import {
widthPercentageToDP as wp,
heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PROFILE = [
{
    name: '홍길동',
    email: 'kimyoujin0821@gmail.com',
},
];

const RAND_MISSION_IN = [
{
    RAND_MISSION_IN_id: 1,
    mission_image: require('../images/random_mission1.jpeg'),
    mission_name: '이불 개기',
    mission_expla: '이불을 개며 하루를 다르게 시작해보세요!',
},
{
    RAND_MISSION_IN_id: 2,
    mission_image: require('../images/random_mission2.jpeg'),
    mission_name: '스트레칭 하기',
    mission_expla: '스트레칭을 통해 긴장된 근육을 풀어 질 좋은 하루를 느껴보세요!',
},
{
    RAND_MISSION_IN_id: 3,
    mission_image: require('../images/random_mission3.jpeg'),
    mission_name: '창문 열기',
    mission_expla: '창문을 열어서 상쾌한 공기를 느껴보세요!',
},
];

const RAND_MISSION_OUT = [
{
    RAND_MISSION_OUT_id: 1,
    mission_image: require('../images/random_mission4.jpeg'),
    mission_name: '편의점으로 외출하기',
    mission_expla: '가까운 편의점으로 가서 상쾌한 공기와 맛있는 음식들을 맛보세요!',
},
{
    RAND_MISSION_OUT_id: 2,
    mission_image: require('../images/random_mission5.jpeg'),
    mission_name: '0km 걷기',
    mission_expla: '0km를 걸어보며 건강이 좋아지는 기분과 상쾌함을 느껴보세요!',
},
];

const USER_MISSION = [
{
    USER_MISSION_id: 1,
    mission_name: RAND_MISSION_IN[0].mission_name,
    mission_success: 0,
},
{
    USER_MISSION_id: 2,
    mission_name: RAND_MISSION_OUT[0].mission_name,
    mission_success: 0,
},
{
    USER_MISSION_id: 3,
    mission_name: '특정길이이상이면 말줄임표가나온다',
    mission_success: 0,
},
{
    USER_MISSION_id: 4,
    mission_name: '특정길이이상이면 말줄임표가나온다',
    mission_success: 0,
},
{
    USER_MISSION_id: 5,
    mission_name: '특정길이이상이면 말줄임표가나온다',
    mission_success: 0,
},
{
    USER_MISSION_id: 6,
    mission_name: '특정길이이상이면 말줄임표가나온다',
    mission_success: 0,
},
{
    USER_MISSION_id: 7,
    mission_name: '특정길이이상이면 말줄임표가나온다',
    mission_success: 0,
},
];

// 타입 정의
type MissionClickState = {
[key: string]: boolean;
};

const Goal_Screen = ({navigation}: any) => {
const [missionClickState, setMissionClickState] = useState<MissionClickState>({});

const mission_complete = (USER_MISSION_id: number) => {
    console.log('pressed', USER_MISSION_id);
    setMissionClickState((prevState) => ({
    ...prevState,
    [USER_MISSION_id.toString()]: true,
    }));
};

return (
    <SafeAreaView style={{ position: 'relative', flex: 1, backgroundColor: 'white' }}>
    <Text
        style={{
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: wp(11.5),
        marginTop: hp(11),
        marginBottom: hp(5),
        fontSize: hp(3),
        }}
    >
        현재
        <Text style={{ color: '#0066ff' }}> {PROFILE[0].name} </Text>
        님이{'\n'}진행 중인 목표
    </Text>
    <ScrollView
        style={{
        width: wp(85),
        marginHorizontal: wp(7.5),
        marginBottom: hp(27),
        }}
    >
        {USER_MISSION.map((user_item) => (
        <View
            key={user_item.USER_MISSION_id}
            style={{ height: hp(6), marginVertical: wp(4.7) }}
        >
            <View style={styles2.user_mission}>
            <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                width: wp(35),
                color: 'black',
                fontWeight: 'bold',
                fontSize: hp(2),
                paddingVertical: wp(4),
                }}
            >
                {user_item.mission_name}
            </Text>
            <Pressable
                onPress={() => mission_complete(user_item.USER_MISSION_id)}
                style={[
                styles2.mission_success_button,
                missionClickState[user_item.USER_MISSION_id.toString()] &&
                    styles2.click_button,
                ]}
            >
                {missionClickState[user_item.USER_MISSION_id.toString()] && (
                <View
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    계획 완료
                    </Text>
                    <View
                    style={{
                        width: wp(6),
                        height: wp(6),
                        backgroundColor: '#0066ff',
                        borderRadius: wp(5),
                    }}
                    >
                    <Image
                        source={require('../icons/check_icon.png')}
                        style={{ width: wp(6), height: wp(6) }}
                    />
                    </View>
                </View>
                )}
            </Pressable>
            </View>
        </View>
        ))}
        <Text
        style={{
            marginTop: hp(3),
            marginBottom: hp(6),
            opacity: 0.4,
            flex: 1,
            textAlign: 'center',
        }}
        >
        마지막 미션입니다.
        </Text>
    </ScrollView>
    <Pressable
        style={{
        position: 'absolute',
        width: wp(14),
        height: wp(14),
        borderRadius: wp(9),
        backgroundColor: '#0066FF',
        bottom: 0,
        marginBottom: hp(21),
        marginLeft: wp(75),
        elevation: 7,
        shadowColor: '#0066FF',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: wp(5),
        }}
        onPressIn={() => navigation.navigate('CreateGoal')}
    >
        <Image
        source={require('../icons/pen_icon.png')}
        style={{ width: wp(12), height: wp(12) }}
        />
    </Pressable>
    <Pressable
        style={{
        position: 'absolute',
        width: wp(40),
        height: wp(10),
        borderRadius: wp(9),
        backgroundColor: '#0066FF',
        bottom: 0,
        marginBottom: hp(15),
        marginLeft: wp(8),
        elevation: 7,
        shadowColor: '#0066FF',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: wp(5),
        }}
        onPressIn={() => navigation.navigate('Chart')}
    >
        <Text
        style={{
            color: 'white',
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: hp(1),
        }}
        >
        나의 생활 그래프보기
        </Text>
    </Pressable>
    </SafeAreaView>
);
}

const styles2 = StyleSheet.create({
user_mission: {
    backgroundColor: 'white',
    height: hp(7),
    marginHorizontal: wp(2),
    shadowColor: 'black',
    shadowOpacity: 0.15,
    paddingLeft: wp(6),
    paddingRight: wp(4),
    borderRadius: wp(7),
    elevation: 10,
    shadowOffset: { width: 0, height: 15 },
    shadowRadius: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
},
mission_success_button: {
    backgroundColor: 'white',
    width: wp(7),
    height: wp(7),
    borderRadius: wp(5),
    borderColor: '#0066FF',
    borderWidth: wp(0.5),
    alignSelf: 'center',
},
click_button: {
    backgroundColor: '#0066FF',
    borderRadius: wp(5),
    alignSelf: 'center',
    width: wp(27),
    height: wp(9),
    paddingVertical: wp(1.2),
    paddingHorizontal: wp(2),
    paddingRight: wp(1.5),
},
});

export default Goal_Screen;