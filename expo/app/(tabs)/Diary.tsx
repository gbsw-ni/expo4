import React from 'react';
import { Image, StyleSheet, View, Pressable, Text, FlatList } from 'react-native';

const check = require('../icons/check.png');

const Diary = ({ navigation }: any) => {

    const DiaryButton = [1,2,3,4,5];

    const renderDiaryButton = ({item}: {item: number}) => {
        <Pressable style={styles.checkBox} onPress={() => console.log('일기확인', item)}>
        <Image style={styles.check1} source={check} />
        </Pressable>
    }
    
    const splitIntoRows = (entries: number[], itemPerRow: number) => {
        const rows = [];
        for( let i = 0; i < entries.length; i += itemPerRow) {
            rows.push(entries.slice(i,i+itemPerRow));
        }
        return rows;
    };

    const diary = splitIntoRows(DiaryButton,4);
    
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
    <FlatList
            data={DiaryButton}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.buttonContainer}
        />
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
row: {

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
    marginTop: 70,
    backgroundColor: '#0066FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
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
    width: 90,
    height: 90,
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