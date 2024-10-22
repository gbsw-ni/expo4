import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { View, Image, StyleSheet, ScrollView, Text, SafeAreaView, Pressable } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const Profile = require('../../assets/images/profile1.png')

let level = 0
let progress_gauge = 45 * 5 //max = 64*5;

const PROFILE = [
  //inside 목표 추천 리스트
  {
    name: '홍길동',
    email: 'naeil00700@gmail.com'
  }
]

const RAND_MISSION_IN = [
  {
    RAND_MISSION_IN_id: 1,
    mission_image: require('../../assets/images/random_mission1.jpeg'),
    mission_name: '이불 개기',
    mission_expla: '이불을 개며 하루를 다르게 시작해보세요!'
  },
  {
    RAND_MISSION_IN_id: 2,
    mission_image: require('../../assets/images/random_mission2.jpeg'),
    mission_name: '스트레칭 하기',
    mission_expla: '스트레칭을 통해 긴장된 근육을 풀어 질 좋은 하루를 느껴보세요!'
  },
  {
    RAND_MISSION_IN_id: 3,
    mission_image: require('../../assets/images/random_mission3.jpeg'),
    mission_name: '창문 열기',
    mission_expla: '창문을 열어서 상쾌한 공기를 느껴보세요!'
  }
]

const RAND_MISSION_OUT = [
  {
    RAND_MISSION_OUT_id: 1,
    mission_image: require('../../assets/images/random_mission4.jpeg'),
    mission_name: '편의점으로 외출하기',
    mission_expla: '가까운 편의점으로 가서 상쾌한 공기와 맛있는 음식들을 맛보세요!'
  },
  {
    RAND_MISSION_OUT_id: 2,
    mission_image: require('../../assets/images/random_mission5.jpeg'),
    mission_name: '0km 걷기',
    mission_expla: '0km를 걸어보며 건강이 좋아지는 기분과 상쾌함을 느껴보세요!'
  }
]

function Main_Screen() {
  const [scrolling, setScrolling] = useState(false)
  const [selectedMission, setSelectedMission] = useState(null)

  //스크롤 여부 판단
  const handleScroll = (event: any) => {
    setScrolling(event.nativeEvent.contentOffset.y !== 0)
  }

  //스크롤 중일때는 터치 안 됨
  const handlePress = (index: any) => {
    if (!scrolling) {
      console.log('pressed')
      setSelectedMission(index)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: 'row', marginBottom: hp(2.5) }}>
          <Image
            style={{
              width: wp(27),
              height: wp(27),
              overflow: 'hidden',
              borderRadius: 100 / 2,
              marginTop: hp(5),
              marginLeft: wp(10),
              marginRight: wp(5)
            }}
            source={Profile}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              fontSize: hp(3),
              marginTop: hp(6.5),
              letterSpacing: wp(2)
            }}
          >
            {PROFILE[0].name}
            {'\n'}
            <Text
              style={{
                fontSize: hp(2),
                color: '#CACACA',
                paddingTop: hp(100),
                letterSpacing: wp(0)
              }}
            >
              {PROFILE[0].email}
            </Text>
          </Text>
        </View>
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
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: wp(10)
          }}
        >
          <Text style={styles.level}>Lv.{level}</Text>
          <Text style={styles.level}>Lv.{level + 1}</Text>
        </View>
        <Text
          style={{
            marginLeft: wp(7),
            marginTop: hp(1),
            fontSize: hp(3.5),
            color: '#0029FF'
          }}
        >
          inside
        </Text>
        <ScrollView horizontal style={{ height: wp(57) }} scrollEnabled={!scrolling} onScroll={handleScroll}>
          {RAND_MISSION_IN.map((inside_item, idx) => (
            <Pressable key={idx} style={{ height: wp(53) }} onPress={handlePress}>
              <View key={inside_item.RAND_MISSION_IN_id} style={styles.mission_list}>
                <Image source={inside_item.mission_image} style={styles.mission_image} />
                <Text style={styles.mission_name}>{inside_item.mission_name}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
        <Text
          style={{
            marginLeft: wp(7),
            marginTop: hp(1),
            fontSize: hp(3.5),
            color: '#0029FF'
          }}
        >
          outside
        </Text>
        <ScrollView horizontal style={{ height: wp(57) }} scrollEnabled={handlePress as any} onScroll={handleScroll}>
          {RAND_MISSION_OUT.map((outside_item, idx) => (
            <Pressable key={idx} style={{ height: wp(53) }} onPress={handlePress}>
              <View key={outside_item.RAND_MISSION_OUT_id} style={styles.mission_list}>
                <Image source={outside_item.mission_image} style={styles.mission_image} />
                <Text style={styles.mission_name}>{outside_item.mission_name}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  progress_view: {
    backgroundColor: 'white',
    width: wp(85),
    height: wp(7),
    marginHorizontal: wp(7.5),
    borderRadius: wp(3),
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: wp(5),
    flex: 1,
    justifyContent: 'center'
  },
  level: {
    color: '#0029FF',
    fontSize: hp(2),
    fontWeight: '900',
    marginBottom: hp(3)
  },
  mission_list: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: wp(3),
    marginTop: wp(2),
    padding: wp(3),
    borderRadius: wp(4),
    elevation: 8,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: wp(5)
  },
  mission_name: {
    flex: 1,
    fontSize: hp(2.3),
    color: 'black'
  },
  mission_image: {
    width: wp(52),
    height: wp(35),
    objectFit: 'cover',
    marginBottom: wp(2),
    borderRadius: wp(2)
  }
})

export default Main_Screen