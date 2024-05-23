import React from "react";
import { SafeAreaView, Text, Image, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Profile = require('../../assets/images/profile1.png')


let level = 0
let progress_gauge = 45 * 2.8

const PROFILE = [
    //inside 목표 추천 리스트
    {
      name: '홍길동',
      email: 'kimyoujin0821@gmail.com'
    }
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

const TogetherScreen = ({navigation}: any) => {
    return (
        <SafeAreaView style={styles.container}>
          <View style={{ flexDirection: 'row', marginBottom: hp(2.5) }}>
          <Image
            style={{
              width: wp(23),
              height: wp(23),
              overflow: 'hidden',
              borderRadius: 100 / 2,
              marginTop: hp(7),
              marginLeft: wp(10),
              marginRight: wp(5)
            }}
            source={Profile}
          />
          <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              fontSize: hp(3),
              marginTop: hp(8),
              letterSpacing: wp(2)
            }}
          >
            {PROFILE[0].name}
          </Text>
          <View style={styles.progress_view}>
          <LinearGradient
            start={{ x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#0029FF', '#83A5FF']}
            style={{
              width: progress_gauge,
              marginLeft: wp(1.5),
              borderRadius: wp(3),
              height: hp(2),
              flex: 0,
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
          >
            <Text style={{
              color: 'white',
              fontSize:hp(1.2),
              fontWeight: '700',
              marginRight: wp(1.5)
            }}>60</Text>
          </LinearGradient>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp(2),
            marginTop: wp(0.3),
          }}
        >
          <Text style={styles.level}>Lv.{level}</Text>
          <Text style={styles.level}>Lv.{level + 1}</Text>
        </View>
      </View>
      </View>
      <View style={[styles.boxContainer, {height: hp(25), marginBottom: hp(3)}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: hp(2), color: 'black', fontWeight: 'bold'}}>친구 <Text style={{color: '#0066FF'}}>143</Text></Text>
          <Pressable style={{borderColor: '#0066ff', backgroundColor: 'white', borderRadius: wp(4), justifyContent: 'center', alignItems: 'center', borderWidth: 1, padding: wp(0.3), paddingHorizontal: wp(3)}} onPressIn={() => navigation.navigate('AddFriend')}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>친구추가</Text>
          </Pressable>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{backgroundColor: '#0066FF', width: wp(14), height: hp(14), marginTop: hp(5)}}></View>
        <View style={{backgroundColor: '#387EE7', width: wp(14), height: hp(12), marginTop: hp(7)}}></View>
        <View style={{backgroundColor: '#0029FF', width: wp(14), height: hp(10), marginTop: hp(9)}}></View>
        <View style={{backgroundColor: '#7BA9Ed', width: wp(14), height: hp(5), marginTop: hp(14)}}></View>
        <View style={{backgroundColor: '#0a56c7', width: wp(14), height: hp(3), marginTop: hp(16)}}></View>
      </View>
      </View>
      <View style={[styles.boxContainer, {height: hp(23),padding: wp(6)}]}>
          <Text style={{fontSize: hp(2), color: 'black', fontWeight: 'bold'}}>금요일 저녁내기</Text>
          <Text style={{fontSize: hp(1.8), color: '#c8c8c8', fontWeight: 'bold', marginBottom: wp(4)}}>목표 50000걸음</Text>
          <Text style={{fontSize: hp(4), color: 'black', marginBottom: wp(3)}}>3위/9명</Text>
          <Text style={{fontSize: hp(2), color: 'black',}}>홍길동님이 7890걸음</Text>
      </View>
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
        onPressIn={() => navigation.navigate('ShareGoal')}
    >
        <Image
        source={require('../icons/pen_icon.png')}
        style={{ width: wp(12), height: wp(12) }}
        />
    </Pressable>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    progress_view: {
        backgroundColor: 'white',
        width: wp(50),
        height: wp(6),
        borderRadius: wp(3),
        marginTop: hp(1.4),
        elevation: 8,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: wp(5),
        justifyContent: 'center'
      },
      boxContainer: {
        backgroundColor: 'white',
        borderRadius: wp(5),
        elevation: 8,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: wp(5),
        alignSelf: 'center',
        width: wp(80),
        padding: wp(3),
      },
      level: {
        color: '#0029FF',
        fontSize: hp(2),
        fontWeight: '900',
        marginBottom: hp(3)
      },
});

export default TogetherScreen;