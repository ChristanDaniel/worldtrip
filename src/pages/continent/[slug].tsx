import { Flex } from "@chakra-ui/react";
import Loading from "../../components/Loading";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

import Cities from "../../components/Cities";
import Content from "../../components/Content";
import ContinentBanner from "../../components/ContinentBanner";
import { Header } from "../../components/Header";

export interface ContinentProps {
    continent: {
      slug: string;
      title: string;
      description: string;
      banner_image: string;
      countries: number;
      languages: number;
      cities: number;
      cities_list: string;
      cities100: {
        city: string;
        country: string;
        thumbnail: string;
        flag: string;
      }[]
    }
}

export default function Continent({continent}: ContinentProps) {
    const router = useRouter();
    if (router.isFallback) {
      return <Loading />
    }
    return (
        <Flex direction="column">
            <Head>
                <title>WorldTrip - {continent.title}</title>

                <meta property="og:title" content={`WorldTrip ${continent.title}`} />
                <meta property="og:description" content={continent.description} />
                <meta name="twitter:title" content={`WorldTrip ${continent.title}`} />

                <meta name="twitter:image" content={continent.banner_image} />
                <meta name="twitter:image:src" content={continent.banner_image} />
                <meta property="og:image" content={continent.banner_image} />
                <meta property="og:image:secure_url" content={continent.banner_image} />
            </Head>
            <Header />
            <ContinentBanner continent={continent} />

            <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
                <Content continent={continent} />
                <Cities continent={continent} />
            </Flex>
        </Flex>
    )
}