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
        Faça login em sua conta
      </Titulo>
      <Box>
        <EntradaTexto>
          label='Email'
          placeholder='Insira seu endereço de e-mail'
        </EntradaTexto>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input 
            placeholder='Insira seu endereço de email'
            size='lg'
            w='100%'
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={3}
          />
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input 
            placeholder='Insira sunha senha'
            size='lg'
            w='100%'
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={3}
          />
        </FormControl>
      </Box>
      <Botao>
        Entrar
      </Botao>
      <Link href='https://www.alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color='blue.500'>
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}


