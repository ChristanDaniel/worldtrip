import { Flex } from "@chakra-ui/react";
import Loading from "../../components/Loading";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

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
        </Flex>
    )
}