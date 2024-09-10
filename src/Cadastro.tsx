import { VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';

export default function Login() {
  return (
    <VStack flex={1} alignItems='center' justifyContent='center' p={5}>
      <Image source={Logo} alt='Logo Voll'/>

      <Titulo>
        Insira alguns dados básicos
      </Titulo>
      <Box>
        <EntradaTexto label='Nome' placeholder='Digite seu nome completo' />
        <EntradaTexto label='Email' placeholder='Insira seu endereço de e-mail' />
        <EntradaTexto label='Crie uma senha' placeholder='Insira sua senha' />
        <EntradaTexto label='Repita a senha' placeholder='Insira sua senha' />
    </Box>
      <Botao>
        Avançar
      </Botao>
    </VStack>
  );
}


