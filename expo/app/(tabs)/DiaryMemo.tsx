import React from 'react';
import { SetStateAction, useState } from 'react';
import { TextInput, Pressable, Text, View, StyleSheet, Keyboard } from 'react-native';
import { useDiary } from './DiaryContent';

const DiaryMemo = ({ navigation }: any) => {
const {addDiaryEntry} = useDiary();
//const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [rating, setRating] = useState(0);

const changeRating = (newRating: SetStateAction<number>) => {
    setRating(newRating);
};

const clickSave = () => {
    console.log('내용:', content);
    console.log('별점:', rating);

    //새로운 일기 항목 추가
    addDiaryEntry({content, rating});
    // 저장 로직을 구현해야됨. , 서버에 데이터를 보내거나 로컬 스토리지에 저장.
    Keyboard.dismiss();
    navigation.navigate('Diary')
};

return (
    <View style={styles.container}>
    <Text style={styles.header}>diary</Text>
    <TextInput
        style={styles.inputContent}
        onChangeText={setContent}
        value={content}
        multiline={true}
        placeholder="오늘 하루의 일기를 작성해 주세요!"
    />
    <Text style={styles.textCounter}>{content.length}/300</Text>
    <View style={styles.stars}>
        {/*별점*/}
        {[1, 2, 3, 4, 5].map((index) => (
        <Pressable key={index} onPress={() => changeRating(index)}>
            <Text style={index <= rating ? styles.starFilled : styles.starEmpty}>★</Text>
        </Pressable>
        ))}
    </View>
    <Pressable style={styles.saveButton} onPress={clickSave}>
        <Text style={styles.saveButtonText}>작성 완료</Text>
    </Pressable>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between', 
},
header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
    marginBottom: -30, 
},
inputContent: {
    height: 400,
    width: '100%', 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 17,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: -20, 
},
textCounter: {
    color: 'gray',
    marginBottom: -20, 
},
stars: {
    flexDirection: 'row',
    marginRight:100,
    justifyContent: 'center',
    marginBottom: -40, 
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
saveButtonText: {
    color: 'white',
    fontSize: 16
}
});


export default DiaryMemo;