import { Pressable, Image, Text, StyleSheet } from 'react-native';

export default function AreaCom(props) {
  const { areaName } = props;

  function pressHandle() {}
  return (
    <Pressable style={styles.action} onPress={pressHandle}>
      <Text style={styles.cityText}>{areaName}</Text>
      <Image
        style={styles.cityArrow}
        source={require('../assets/arrow_down.png')}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cityText: {
    fontSize: 16,
    justifyContent: 'center',
  },
  cityArrow: {
    width: 8,
    height: 6,
    marginLeft: 3,
    justifyContent: 'center',
  },

  action: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
