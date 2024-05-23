import React from 'react';
import { Image, StyleSheet, View, Pressable, Text, ScrollView } from 'react-native';

import { useDiary } from './DiaryContent';
//import DiaryCheck from './DiaryCheck'

const check = require('../icons/check.png');

const Diary = ({ navigation }: any) => {

    const { diaryEntries } = useDiary();

    const renderDiaryButton = (entry: any, index: number) => (
        <Pressable 
            style={styles.checkBox} 
            key={index} 
            onPress={() => navigation.navigate('DiaryCheck', {entry})}>
            <Image style={styles.check1} source={check} />
        </Pressable>
    );
    
    const renderDiaryButtons = () => {
        const rows = [];
        for(let i = 0;i < diaryEntries.length; i += 4){
            const rowEntries = diaryEntries.slice(i, i+4);
            rows.push(
                <View key={i} style={styles.row}>
                    {rowEntries.map((entry, index) => (
                        <View key={index} style={styles.checkBoxContainer}>
                        {renderDiaryButton(entry, index)}
                    </View>
                    ))}
                </View>
            );
        }
        return rows;
    };

    
return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('PreviousDate')}>
            <Image source={require('../icons/right-arrow.png')} style={styles.navIcon} />
        </Pressable>
        <Text style={styles.dateText}>4월</Text>
        <Pressable onPress={() => navigation.navigate('NextDate')}>
            <Image source={require('../icons/left-arrow.png')} style={styles.navIcon} />
        </Pressable>
    </View>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {renderDiaryButtons()}
    </ScrollView>
    <View style={styles.centeredTextContainer}>
        <Text style={styles.MainText}>클릭 시 그날의 일기가 확인 됩니다!</Text>
    </View>
    <Pressable style={styles.actionButton} onPress={() => navigation.navigate('DiaryMemo')}>
        <Image source={require('../icons/pen_icon.png')} style={styles.actionIcon} />
    </Pressable>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    flex: 1,
},
scrollViewContent: {
    alignItems: 'flex-start',
},
checkBoxContainer: {
    width: 90, // Adjust the width as needed
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
},
row: {
    flexDirection: 'row',
    justifyContent: 'center',
    //marginBottom: 1,
},
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 5,
    marginTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
},
navIcon: {
    width: 30,
    height: 30,
},
dateText: {
    fontSize: 18,
    fontWeight: 'bold',
},
MainText: {
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '900',
    color: '#CCCCCC',
},
buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
},
checkBox: {
    width: 79,
    height: 80,
    marginTop: 30,
    backgroundColor: '#0066FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
},
check1: {
    width: 65,
    height: 55,
},
centeredTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
},
actionButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#0066FF',
    width: 70,
    height: 70,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
},
actionIcon: {
    width: 50,
    height: 50,
},
});

export default Diary;