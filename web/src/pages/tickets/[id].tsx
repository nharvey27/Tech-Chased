import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../components/Layout";
import { useGetTicketFromUrl } from "../../utils/useGetTicketFromUrl";
import { withApollo } from "../../utils/withApollo";

interface TicketProps {}

const Ticket = ({}) => {
  const { data, error, loading } = useGetTicketFromUrl();
  if (loading) {
    return (
      <Layout>
        <div>loading..</div>
      </Layout>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  if (!data?.ticket) {
    return (
      <Layout>
        <Box> Could not find ticket.</Box>
      </Layout>
    );
  }
  return (
    <Layout>
      <Heading>Details for Ticket #{data.ticket.id}</Heading>
      <Box>
        <Grid templateColumns="repeat(2,1fr)">
          <GridItem>
            <Heading>Ticket Title</Heading>
            <Heading>{data.ticket.title}</Heading>
          </GridItem>
          <GridItem>
            <Heading>Ticket Description</Heading>
            <Heading>{data.ticket.description}</Heading>
          </GridItem>
          <GridItem>
            <Heading>Ticket Status</Heading>
            <Heading>{data.ticket.status}</Heading>
          </GridItem>
          <GridItem>
            <Heading>Ticket Priority</Heading>
            <Heading>{data.ticket.priority}</Heading>
          </GridItem>
          <GridItem>
            <Heading>Created At</Heading>
            <Heading>{data.ticket.createdAt}</Heading>
          </GridItem>
          <GridItem>
            <Heading>Last Updated</Heading>
            <Heading>{data.ticket.updatedAt}</Heading>
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Ticket);
