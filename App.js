import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { ConfigureStore } from './redux/configureStore';
import WorkZone from './components/WorkingZone';

// initialize store
const myDataStore = ConfigureStore();

// App component
export default function App() {
  return (
    <Provider store={myDataStore}>
      <View style={styles.container}>
        <WorkZone />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// In our imports we need to pull in Provider from react-redux, this is a tag that wants an attribute called store on it. This 'store' attribute should be whatever our redux data store is called. You'll also notice we import our ConfigureStore function from wherever we made it from.

// We then initialize our data store under the name of a variable that we make. I am using myDataStore here, but yours can be whatever you want.

// In our component we wrap the App's generic contents with the provider tag, apply the store attribute, and then pass in our store variable we made previously. This is all you need to do to enable redux in your application. There is still component level configuration that needs to be done, but as far as globally, all is done.
