import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../components/Layout";
import { useGetTicketFromUrl } from "../../utils/useGetTicketFromUrl";
import { withApollo } from "../../utils/withApollo";
import NextLink from "next/link";
import { useDeleteTicketMutation } from "../../generated/graphql";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const Ticket = ({}) => {
  const { data, error, loading } = useGetTicketFromUrl();
  const [deleteTicket] = useDeleteTicketMutation();
  const router = useRouter();

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
      <Stack ml={4} mb={10} mt={-2} bg="yellow.400">
        <Heading as="h3" ml={4} size="lg" mb={3} mt={3}>
          Details for Ticket #{data.ticket.id}
        </Heading>
        <Flex alignItems="center">
          <NextLink href={`/tickets/edit/${data.ticket.id}`}>
            <Link ml={4}>Edit |</Link>
          </NextLink>
          <IconButton
            icon={<DeleteIcon />}
            aria-label="Delete Ticket"
            onClick={() => {
              deleteTicket({
                variables: { id: data.ticket.id },
                update: (cache) => {
                  cache.evict({ id: "Ticket:" + data.ticket.id });
                  router.back();
                },
              });
            }}
          />
        </Flex>
      </Stack>
      <Box ml={4}>
        <Grid templateColumns="repeat(2,1fr)">
          <GridItem>
            <Box mb={4}>
              <Heading mb={2} as="h5" size="sm">
                Ticket Title
              </Heading>
              <Text ml={4} size="xs">
                {data.ticket.title}
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box mb={4}>
              <Heading mb={2} as="h5" size="sm">
                Ticket Description
              </Heading>
              <Text ml={4} size="xs">
                {data.ticket.description}
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box mb={4}>
              <Heading mb={2} as="h5" size="sm">
                Ticket Status
              </Heading>
              <Text as="h6" ml={4} size="xs">
                {data.ticket.status}
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box mb={4}>
              <Heading mb={2} as="h5" size="sm">
                Ticket Priority
              </Heading>
              <Text as="h6" ml={4} size="xs">
                {data.ticket.priority}
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box mb={4}>
              <Heading mb={2} as="h5" size="sm">
                Created At
              </Heading>
              <Text as="h6" ml={4} size="xs">
                {data.ticket.createdAt}
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Heading mb={2} as="h5" size="sm">
              Last Updated
            </Heading>
            <Text as="h6" ml={4} size="xs">
              {data.ticket.updatedAt}
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Ticket);
