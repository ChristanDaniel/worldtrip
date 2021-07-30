import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City({name, country, flag, image}) {
    return (
        <Box borderRadius="4px" overflow="hidden">
            <Image src={image} alt={`${name}, ${country}`} h="170px" w="100%"/>
        </Box>
    )
}