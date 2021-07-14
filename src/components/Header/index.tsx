import { Flex, Grid, Image } from '@chakra-ui/react'

export function Header() {
    return(
        <Flex
          as="header"
          bg="white"
          w="100%"
          maxWidth={1480}
          h={["50px", "100px"]}
          mx="auto"
          justify="center"
          px="1rem"
          align="center"
          >
              <Grid
              h="100%"
              mx="auto"
              maxW="100%"
              alignItems="center"
              templateColumns="repeat(3, 1fr)"
              justifyContent="center"

              >
                  <Image 
                    src="/logo.svg"
                    alt="um avião voando sobre o nome da marca World trip"
                    justifySelf="center"
                    gridColumn="2"

                  />
              </Grid>
        </Flex>
    )
}