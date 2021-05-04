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
          <Heading> Your Projects</Heading>
          <Divider orientation="horizontal" />
          <Grid templateColumns={"25% 50% 25%"}>
            <Heading size={"md"}>Title</Heading>
            <Heading size={"md"}>Description</Heading>
            <Heading size={"md"}>Misc.</Heading>

            {data?.me?.projects?.map((p) =>
              !p ? null : (
                <>
                  <GridItem>{p.title}</GridItem>
                  <GridItem>{p.description}</GridItem>
                  <GridItem>{p.description}</GridItem>
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
