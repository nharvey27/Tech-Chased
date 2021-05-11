import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
} from "@chakra-ui/react";
import { Container } from "next/app";
import React from "react";
import { Layout } from "../components/Layout";
import { useMeQuery } from "../generated/graphql";
import NextLink from "next/link";
import { withApollo } from "../utils/withApollo";
import Head from "next/head";

const Index: React.FC = ({}) => {
  const { data, error, loading } = useMeQuery();

  if (!loading && !data) {
    return (
      <div>
        <div>your query failed for some reason</div>
        <div>{error?.message} </div>
      </div>
    );
  }

  return (
    <Layout>
      {!data?.me?.projects && !loading ? (
        <Box p={8}>
          <Heading as="h2" size="lg">
            You have no projects at this time.
          </Heading>
        </Box>
      ) : !data && loading ? (
        <div>loading</div>
      ) : (
        <Container>
          <Stack ml={4} mb={10} mt={-2} bg="yellow.400">
            <Heading as="h3" ml={2} size="lg" mb={3} mt={3}>
              Your Projects
            </Heading>
          </Stack>
          <Divider orientation="horizontal" />
          <Grid ml={4} templateColumns={"25% 50% 25%"} rowGap={2}>
            <Heading size={"md"}>Title</Heading>
            <Heading size={"md"}>Description</Heading>
            <Heading size={"md"}>Misc.</Heading>

            {data?.me?.projects?.map((p) =>
              !p ? null : (
                <>
                  <Box h={"100%"}>
                    <Divider orientation="horizontal" />
                    <NextLink href="/projects/[id]" as={`/projects/${p.id}`}>
                      <Link>
                        <GridItem mb={5} mt={5}>
                          {p.title}
                        </GridItem>
                      </Link>
                    </NextLink>
                  </Box>
                  <Box h={"100%"}>
                    <Divider orientation="horizontal" />
                    <GridItem mb={5} mt={5}>
                      {p.description}
                    </GridItem>
                  </Box>
                  <Box h={"100%"}>
                    <Divider orientation="horizontal" />
                    <GridItem mb={5} mt={5}>
                      {p.description}
                    </GridItem>
                  </Box>
                </>
              )
            )}
          </Grid>
        </Container>
      )}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
