/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, Button, Alert, Picker, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{ width: 193, height: 110 }} />
    )
  }
}

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      language: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Blink />
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Text style={styles.welcome}>Hello world!</Text>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button onPress={() => {
          Alert.alert('you have clicked the button!')
        }} title="点我"></Button>

        <Picker selectedValue={this.state.language} mode={Picker.MODE_DIALOG} style={{ width: 200 }} prompt='请选择语言'
          enabled={true}
          itemStyle={{ fontSize: 25, color: 'red', textAlign: 'left', fontWeight: 'bold' }} onValueChange={(lang) => this.setState({ language: lang })}>
          <Picker.Item label='Java' value='java' />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="C++" value="cpp" />
          <Picker.Item label="Swift" value="swift" />
        </Picker>
        <TouchableOpacity onPress={this.onPress.bind(this, this.state.language)}>
          <Text>确定</Text>
        </TouchableOpacity>
      </View >
    );
  }

  onPress(language) {
    alert(language)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FF0000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
