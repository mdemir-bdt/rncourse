import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends React.Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.placeContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          style={styles.placeInput}
          onChangeText={this.placeNameChangeHandler}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  placeContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});

export default PlaceInput;
