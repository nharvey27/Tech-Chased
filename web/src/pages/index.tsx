import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Container } from "next/app";
import React from "react";
import { Layout } from "../components/Layout";
import { useMeQuery, useProjectsQuery } from "../generated/graphql";

import { withApollo } from "../utils/withApollo";

const Index: React.FC = ({}) => {
  const { data, error, loading, fetchMore, variables } = useMeQuery();

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
      {!data && loading ? (
        <div>loading</div>
      ) : (
        <Container>
          <Heading mb={6}> Your Projects</Heading>
          <Grid templateColumns={"25% 50% 25%"} rowGap={2}>
            <Heading size={"md"}>Title</Heading>
            <Heading size={"md"}>Description</Heading>
            <Heading size={"md"}>Misc.</Heading>

            {data?.me?.projects?.map((p) =>
              !p ? null : (
                <>
                  <Box h={"20px"}>
                    <Divider orientation="horizontal" />
                    <GridItem>{p.title}</GridItem>
                  </Box>
                  <Box h={"20px"}>
                    <Divider orientation="horizontal" />
                    <GridItem>{p.description}</GridItem>
                  </Box>
                  <Box h={"20px"}>
                    <Divider orientation="horizontal" />
                    <GridItem>{p.description}</GridItem>
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
