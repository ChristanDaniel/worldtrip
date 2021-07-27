import { Flex, Grid, GridItem } from "@chakra-ui/layout";

export default function Caracteristicas() {

    return (
      <Grid
        templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
        w="100%"
        justify="space-between"
        align="center"
        mt={["10","32"]}
        mx="auto"
        maxW="1160px"
        flexWrap="wrap"
        gap={[1,5]}
      >

    </Grid>
  )
}