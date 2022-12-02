import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import {Camera, CameraType} from 'expo-camera'
import {useState} from 'react'

export default function App() {
  // define variável para o tipo da camera
  const [type, setType] = useState(CameraType.back)
  // define variáveis para permissão do usuário
  const[permission, requestPermission] = Camera.useCameraPermissions()

  if (!permission){
    // retorna uma view vazia enquanto o usuário não autorizar
    return <View/> 
   }
    if (!permission.granted){
      //permissão ainda não foi dada
      return (
        <View styles={styles.container}>
            <Text styles={styles.container}> Precisamos de sua autorização para usar a câmera</Text>
            <Button onPress={requestPermission} title="Conceder Permissão"/>
        </View>
      )
    }

    function toogleCamera(){
      setType(current => current == CameraType.back ? CameraType.front: CameraType.back)
    }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toogleCamera}>
            <Text style={styles.text}> Flip Camera </Text>
          </TouchableOpacity>
        </View>
      </Camera>        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
