import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});
const Main = () => {
  return (
      <View style={styles.container}>
        <AppBar />
        <Routes>
          <Route path='/' element={<RepositoryList />}></Route>
          <Route path='/signIn' element={<RepositoryList />}></Route>
          <Route path='*' element={<Navigate to="/" replace/>}></Route>
        </Routes>
       
      </View>
  );
};

export default Main;