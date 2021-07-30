import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

// import {ContinentProps} from '../../pages/continent/[slug]'

export default function Cities({continent}: ContinentProps) {
    return (
      <>
        <Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades +100</Heading>
      </>
  )
 }