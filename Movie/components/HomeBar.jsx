import { View, StyleSheet, Dimensions } from 'react-native';
import AreaCom from './AreaCom';
import SearchCom from './SearchCom';

const { width } = Dimensions.get('window');
export default function HomeBar() {
  return (
    <View style={styles.headerStyle}>
      <AreaCom areaName='成都'></AreaCom>
      <SearchCom></SearchCom>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#ffffff',
    height: 52,
    width: width,
    paddingHorizontal: 25,
    flexDirection: 'row',
    // borderWidth: 1,
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
