import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions, FlatList } from 'react-native';

export default function TeacherWelcome({ navigation }) {
  const [enteredHRCode, setEnteredHRCode] = useState('');
  const [hrList, setHRList] = useState([]);

  function codeInputHandler(enteredText) {
    setEnteredHRCode(enteredText);
  };
  function clickJoinHandler() {
    setHRList(currentHRList => [
      ...currentHRList,
      {text: enteredHRCode, id: Math.random().toString() }, 
    ])
    setEnteredHRCode('');
  };

  return (
    <View style={styles.background}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>
            Welcome Student! </Text>
      </View> 

      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
            placeholder='Type homeroom code to add...' 
            placeholderTextColor={'#999999'} 
            onChangeText={codeInputHandler} 
            value={enteredHRCode} />
        <Button title='ADD' color={'#9ED9D4'} onPress={clickJoinHandler} />
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.listText}>Your Homeroom List</Text>
        
        <FlatList data={hrList} renderItem={(itemData) => {
          return (
            <View style={styles.codeItem}>
              <Text style={styles.codeText}>{itemData.item.text}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }} alwaysBounceVertical={false}/>
      </View>

      <View style={styles.skipContainer}>
        <Button title='SKIP TO SIMULATION'color={'#9ED9D4'} />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  background: {
    backgroundColor: '#1E1E1E',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  textContainer: {
    margin:14,
    width: '120%',
    height: '10%',
    borderWidth: 2,
    borderColor: '#22B7A8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252525',
  },
  inputContainer: {
    margin:14,
    padding: 1,
    flex: 1,
    width: 250,
    marginStart: "-20%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#22B7A8',
    borderRadius: 8,
    width: '103%',
    height: '100%',
    marginRight: 16,
    padding: 6,
    backgroundColor: '#AFEFEA',
    alignItems: 'center',
  },
  listContainer: {
    flex: 7,
  },
  listText:{
    fontSize:20,
    color:'#9ED9D4',
    paddingLeft: 5
  },
  codeItem: {
    margin: 6,
    padding: 6, 
    width: 250,
    borderRadius: 5,
    backgroundColor: "#22B7A8",
  },
  codeText: {
    color: 'white',
  },
  welcomeText: {
    fontSize:28,
    color: '#9ED9D4',
    fontWeight: 'bold'
  },
  welcomeContainer: {
    flex: 1,
    paddingTop: '20%',
  },
  skipContainer: {
    flex: 2
  },
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},

});
