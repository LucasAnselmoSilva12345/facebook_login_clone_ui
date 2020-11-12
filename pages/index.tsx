// import Head from 'next/head'

import {
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Link,
  Divider,
} from '@chakra-ui/core';

export default function Home() {
  return (
    <Grid
      backgroundColor="#f0f2f5"
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px  1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . texto .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        gridArea="logo"
        flexDir="column"
        alignItems="left"
        width="70%"
        marginBottom="100px"
      >
        <img src="/facebook.svg" alt="Facebook" />

        <Heading
          fontSize="28px"
          fontWeight="normal"
          marginLeft="32px"
          width="500px"
          lineHeight="normal"
        >
          O Facebook ajuda você a se conectar e compartilhar com as pessoas que
          fazem parte da sua vida.
        </Heading>
      </Flex>
      <Flex
        gridArea="form"
        height="70%"
        marginLeft="110px"
        backgroundColor="#FFF"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={4}
        overflow="hidden"
      >
        <Input
          height="50px"
          width="340px"
          boxSizing="border-box"
          backgroundColor="#ffffff"
          borderColor="#c5c5c5"
          focusBorderColor="blue.500"
          borderRadius="sm"
          color="#141414"
          placeholder="E-mail"
        />
        <Input
          height="50px"
          width="340px"
          boxSizing="border-box"
          backgroundColor="#ffffff"
          borderColor="#c5c5c5"
          focusBorderColor="blue.300"
          borderRadius="sm"
          marginTop={2}
          color="#141414"
          placeholder="Senha"
        />
        <Button
          marginTop={6}
          height="50px"
          width="340px"
          backgroundColor="blue.500"
          border="none"
          borderRadius="sm"
          _hover={{ backgroundColor: 'blue.600' }}
          fontSize="22px"
          color="#FFF"
        >
          Entrar
        </Button>

        <Link alignSelf="center" marginTop={4} fontSize="16px" color="blue.300">
          Esqueceu a Senha?
        </Link>

        <Divider
          color="#c5c5c5"
          backgroundColor="#ff0055"
          width="340px"
          marginTop={8}
          marginBottom={0}
        />

        <Flex alignItems="center">
          <Button
            height="50px"
            border="none"
            flex="1"
            fontSize="18px"
            color="#FFF"
            backgroundColor="green.300"
            _hover={{ backgroundColor: 'green.500' }}
            marginLeft={16}
            marginRight={16}
            marginTop={8}
          >
            Criar nova conta
          </Button>
        </Flex>
      </Flex>
      <Flex
        gridArea="texto"
        height="220%"
        marginLeft="115px"
        flexDir="column"
        marginTop={10}
      >
        <Link fontSize="14px" color="blackAlpha.700" fontWeight="bold">
          Criar uma Pagina para uma celebridade, banda ou empresa.
        </Link>
      </Flex>
    </Grid>
  );
}
