import React, { useState } from "react";
import { View,Image, Text, StyleSheet, SafeAreaView, Pressable } from "react-native"
import { TextInput } from "react-native-gesture-handler";

const DiaryCheck = ({route, navigation}: any) => {

    const {entry} = route.params || {};

    const [missionCount, setMissionCount] = useState('');

    const handleMissionChange = (inputText: string) => {
        // 숫자만 남기고 나머지 문자 제거
        const cleanedText = inputText.replace(/[^0-9]/g, '');
        setMissionCount(cleanedText);
    };

    if (!entry) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>일기 데이터를 불러올 수 없습니다.</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                onPressIn={() => navigation.navigate('Diary')}
                style={{
                    backgroundColor: 'white',
                    width: 10,
                    margin: 20,
                    marginLeft: 18,
                    alignItems:'flex-start',
                    marginRight: 350,
                    marginTop: 35,
                }}>
                <Image source={require('../icons/back_icon.png')} />
            </Pressable>
            <View style={styles.ratingContainer}>
            <View style={styles.stars}>
            {/*별점*/}
            {[1, 2, 3, 4, 5].map((index) => (
            <Text key={index} >
            <Text style={index <= entry.rating ? styles.starFilled : styles.starEmpty}>
                ★
            </Text>
            </Text>
            ))}
            </View>
            <View style={styles.textContainer}>
            <Text style={{color: '#0066FF', fontSize: 20, fontWeight: 'bold'}}>미션</Text>
            <TextInput 
                keyboardType='numeric'
                value={missionCount}
                onChangeText={handleMissionChange}
                style={styles.missionInput}
                placeholder='0'/>
            <Text style={{color: '#0066FF', fontSize: 20, fontWeight: 'bold'}}>개 완료</Text>
            </View>
            </View>
            <Text style={styles.entryContent}>{entry.content}</Text>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textContainer: {
        flexDirection: 'row',
    },
    ratingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#387EE7',
        borderRadius: 20,
        width: 320,
        padding: 20,
        paddingBottom: 30,
        marginBottom: 25,
    },
    entryContent: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#387EE7',
        borderRadius: 20,
        width: 320,
        padding: 20,
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 3, 
    },
    starFilled: {
        fontSize: 50,
        color: '#0066FF'
    },
    starEmpty: {
        fontSize: 50,
        color: 'lightgray'
    },
    saveButton: {
        backgroundColor: '#0066FF',
        borderRadius: 20,
        padding: 10,
        width: 150,
        alignItems:'center',
        marginLeft:200,
    },
    missionInput: {
        borderWidth: 1,
        borderColor: '#A5B1CF',
        borderRadius: 10,
        width: 30,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});

export default DiaryCheck;