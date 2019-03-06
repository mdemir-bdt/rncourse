import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlaces/FindPlaces";
import OwnershipScreen from "./src/screens/Ownership/Ownership";

// Register screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
  () => SharePlaceScreen
);
Navigation.registerComponent(
  "awesome-places.FindPlaceScreen",
  () => FindPlaceScreen
);

Navigation.registerComponent(
  "awesome-places.OwnershipScreen",
  () => OwnershipScreen
);

Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});
