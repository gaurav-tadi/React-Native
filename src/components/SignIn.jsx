import { StyleSheet } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';


const SignIn = ({styles}) => {
  return (
  <Text fontWeight="bold" fontSize="subheading" color="headerText" style={styles.header} onPress={() => <Link href='/signIn'></Link>}>
    Sign-In
  </Text>
  )
};

export default SignIn;