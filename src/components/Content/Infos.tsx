import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, Tooltip } from "@chakra-ui/react";
import { ContinentProps } from "../../pages/continent/[slug]";


export default function Infos({continent}: ContinentProps) {
    return (
        <Flex alignItems="center" justifyContent="space-between">
        <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
            <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
             {continent.countries}
            </Heading>
            <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                países
            </Text>
        </Flex>
        <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
            <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
        {continent.languages}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          línguas
        </Text>
      </Flex>

        </Flex>
    )
}