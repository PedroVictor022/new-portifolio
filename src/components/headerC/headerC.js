import { Box, Container, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const HeaderC = () => {
  const [avatar, setAvatar] = useState();

  const profileLink = 'https://api.github.com/users/PedroVictor022';
  const getDataProfile = async (url) => {
    const dataFetch = await fetch(url);
    const resData = await dataFetch.json();
    console.log(resData.avatar_url);
    setAvatar(resData.avatar_url);
  }

  useEffect(() => {
    getDataProfile(profileLink);
  }, [])

  return (
    <React.Fragment>
      <Container pt="24">
        <Box
          bg={useColorModeValue("blackAlpha.800", "whiteAlpha.200")}
          color={useColorModeValue("white", "glassTeal")}
          fontWeight="bold"
          p={3}
          mb={9}
          align="center"
          borderRadius="lg"
        >
          Olá, muito bem vindo(a) ao meu Portifolio, aqui você vai encontrar meus projetos e um pouco sobre a minha hístoria.
        </Box>

        <Box display={{ md: "flex" }}>
          <Box
            flexGrow={1}
          >
            <Heading>Pedro Victor</Heading>
            <Text>Fullstack developer - Javascript | Typescript | ReactJS | NextJS | NodeJS | Graphql | Postgres | Mongo | React Native</Text>
          </Box>
          <Box
            flexShrink={0} mt={{base:4, md: 0}} ml={{md: 6}} align="center"
          >
            <Image 
              borderColor="whiteAlpha.900"
              borderWidth={2}
              borderStyle="solid"
              maxWidth={{ base: '150px' ,md: '180px' }}
              display="inline-block" borderRadius="full"
              src={avatar}
            />
          </Box>
        </Box>

      </Container>
    </React.Fragment>
  )

}

export default HeaderC;