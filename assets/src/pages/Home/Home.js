import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert ,TextInput,TouchableOpacity, Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const Separator = () => (
  <View style={styles.separator} />
);

const Home = () => (
  <SafeAreaView style={styles.container}>
      <View style={styles.header}>
       <Image
        source={require('../../assets/dms.jpg')}
        style={styles.image}
        />
       </View>
       <Text style={styles.title}>
       Sing in
      </Text>
        
      <Text style={styles.error}>
        error teste
      </Text>
      <View>
       

  <Text style={styles.text}>Your User</Text>
  <TextInput placeholder='Name' style={[styles.campo,styles.rd]}/>
  <Text style={styles.text}>Your Password</Text>
  <TextInput placeholder='Password' style={[styles.campo,styles.rd]}  />

   </View>
    <Separator />
    <View>
 
      <View style={styles.campotbns}>
        <Button
          style={styles.btnlg}
          title="Cancel"
        />
        <Button
          title="Sing In"
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  header:{
    marginBottom: 8
  },
  image:{
    flex:1,
    width: '100%',
    height:150,
    marginBottom:150
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize:26,
    color:"blue"
  },
  campotbns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  btn:{
    width: 120,
    height: 42,
    //Below lines will help to set the border radius
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  btnlg:{
    width: 120,
    height: 42,
    //Below lines will help to set the border radius
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  campo:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  rd:{
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  error: {
    flexDirection: "row",
    textAlign:'center',
    fontSize:12,
    Color: '#FFFF00',
    marginBottom:30
  }
});

export default Home;