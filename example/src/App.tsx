import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ParentalControl from 'react-native-parental-gate';

export default function App() {
  //States
  const [ isOpen, setOpen ] = React.useState(false);

  //Methods
  const onOpen = () => {
    setOpen(true);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open Parental Control</Text>
      </TouchableOpacity>

      <ParentalControl 
        isVisible={isOpen}
        onSuccess={() => {}}
        onFailed={() => {}}
        onClose={() => setOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
