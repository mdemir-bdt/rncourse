import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  Button
} from "react-native";
class OwnershipScreen extends Component {
  state = {
    language: "Python"
  };
  render() {
    return (
      <View style={styles.ownershipContainer}>
        <View style={{ marginTop: 10, marginBottom: 30 }}>
          <Text style={{ fontSize: 20, color: "black", marginLeft: 15 }}>
            Asset Tokenization Create Ownership
          </Text>
        </View>
        <View>
          <Text style={styles.ownershipText}>Owner Id</Text>
          <TextInput
            style={styles.ownershipInput}
            placeholder="Enter owner id..."
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.ownershipText}>Asset Id</Text>
          <View
            style={{ borderWidth: 1, borderRadius: 3, borderColor: "gray" }}
          >
            <Picker
              selectedValue={this.state.language}
              style={{
                height: 40,
                width: "100%",
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 3
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }
            >
              <Picker.Item label="Add New Asset" value="New Asset" />
              <Picker.Item label="MCERAH" value="java" />
              <Picker.Item label="NAZ" value="js" />
              <Picker.Item label="ASLI" value="js" />
              <Picker.Item label="NEZIH" value="js" />
            </Picker>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.ownershipText}>Amount</Text>
          <TextInput
            style={styles.ownershipInput}
            placeholder="Enter token amount..."
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button title="Create" onPress={() => {}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ownershipInput: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "gray",
    height: 40
  },
  ownershipContainer: {
    margin: 10,
    justifyContent: "center"
  },
  ownershipText: {
    marginBottom: 3,
    fontSize: 15,
    color: "black"
  }
});

export default OwnershipScreen;
