import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-key", 30),
    Icon.getImageSource("ios-swap", 30),
    Icon.getImageSource("md-list", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.OwnershipScreen",
          label: "Ownerships",
          title: "Ownerships",
          icon: sources[0]
        },
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Transfer",
          title: "Transactions",
          icon: sources[1]
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label: "Reporting",
          title: "Asset Distribution",
          icon: sources[2]
        }
      ]
    });
  });
};

export default startTabs;
