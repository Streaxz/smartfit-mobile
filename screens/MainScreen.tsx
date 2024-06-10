import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

// @ts-ignore
function MainScreen({navigation}): React.JSX.Element {
  const [login, setLogin] = React.useState('');
  const [password, setPasswrod] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.smartfitAcademy}>SMARTFIT ACADEMY</Text>
      <TextInput
        textContentType={'emailAddress'}
        value={login}
        multiline={false}
        onChangeText={setLogin}
        style={styles.input}
      />
      <TextInput
        secureTextEntry={true}
        editable={true}
        value={password}
        multiline={false}
        onChangeText={setPasswrod}
        style={styles.input}
      />
      <Button
        title={'Login'}
        onPress={() =>
          navigation.navigate('main', {
            screen: 'Home',
          })
        }
      />
      <Button title={'Reset password'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  smartfitAcademy: {
    fontFamily: 'roboto-700',
    color: 'rgba(74,144,226,1)',
    width: 273,
    textAlign: 'center',
    lineHeight: 35,
    fontSize: 35,
    alignSelf: 'center',
  },
  input: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: 'center',
    backgroundColor: '#dddddd',
    borderColor: '#000000',
    fontSize: 20,
  },
});
export default MainScreen;
