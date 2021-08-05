import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { incrementCount } from '../redux/actionCreators';

// Component
class WorkZone extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.textContainerStyle}>
          <Text style={{ fontSize: 24 }}>Current Count:</Text>
          <Text style={{ fontSize: 32 }}>{this.props.numbers.count}</Text>
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.incrementCount()}>
          <View>
            <Text style={{ fontSize: 20 }}>Increase</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    numbers: state.numbers
  };
};

// mapDispatchToProps
const mapDispatchToProps = {
  incrementCount: () => incrementCount()
};

// Export Statement
export default connect(mapStateToProps, mapDispatchToProps)(WorkZone);

const styles = StyleSheet.create({
  containerStyle: { justifyContent: 'center', alignItems: 'center', width: '100%' },
  textContainerStyle: { justifyContent: 'center', alignItems: 'center', marginBottom: 60 },
  buttonStyle: {
    backgroundColor: 'darksalmon',
    width: '80%',
    maxWidth: 820, // 80% of 1024 (iPad pro portrait width)
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// In imports up top, we need to pull in connect from react-redux to "connet" our component to redux

// Our component looks the same as a non-redux component. We have some views, some text tags, and a custom button I made with touchableOpacity.

// We then have mapStateToProps which maps the redux state (application-level state) to the props of this component, meaning they can be accessed by using this.props.KEYNAME

// We then have mapDispatchToProps which allows us to pull in a function (from our action creators file) and then fire that off to our reducers. Eventually this will update our redux store and the value for whatever key we modify changes.

// We then have our export statement which has our connect function here. If we are just using mapStateToProps to READ from the redux store, then that is the only thing that needs to be in that first set of () after the word connect. If we are using both mapStateToProps and mapDispatchToProps, mapDispatchToProps will come after mapStateToProps, but will still be in the first set of ().
