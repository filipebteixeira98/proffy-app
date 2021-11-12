import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    maxWidth: 180,
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,
    color: '#fff',
  },

  description: {
    maxWidth: 240,
    marginTop: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,
    color: '#d4c2ff',
  },

  okButton: {
    height: 58,
    marginVertical: 40,
    backgroundColor: '#04d361',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  okButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;