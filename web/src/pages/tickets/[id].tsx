import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../components/Layout";
import { useGetTicketFromUrl } from "../../utils/useGetTicketFromUrl";
import { withApollo } from "../../utils/withApollo";
import NextLink from "next/link";
import {
  useCreateCommentMutation,
  useDeleteTicketMutation,
} from "../../generated/graphql";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import { InputField } from "../../components/inputField";
import capitalize from "../../utils/capitalize";

const Ticket = ({}) => {
  const { data, error, loading } = useGetTicketFromUrl();
  const [deleteTicket] = useDeleteTicketMutation();
  const [createComment] = useCreateCommentMutation();
  const router = useRouter();

  console.log(data?.ticket.comments);
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
      <Grid gridTemplateColumns="repeat(2, 50%)">
        <Box ml={4}>
          <Grid templateColumns="repeat(2,1fr)" templateRows="auto">
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
                <Text ml={4} size="xs">
                  {data.ticket.status}
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box mb={4}>
                <Heading mb={2} as="h5" size="sm">
                  Ticket Priority
                </Heading>
                <Text ml={4} size="xs">
                  {data.ticket.priority}
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box mb={4}>
                <Heading mb={2} as="h5" size="sm">
                  Created At
                </Heading>
                <Text ml={4} size="xs">
                  {data.ticket.createdAt}
                </Text>
              </Box>
            </GridItem>
            <GridItem>
              <Heading mb={2} as="h5" size="sm">
                Last Updated
              </Heading>
              <Text ml={4} size="xs">
                {data.ticket.updatedAt}
              </Text>
            </GridItem>
          </Grid>
        </Box>
        <Box mr={4} ml={6} mb={4}>
          <List>
            {data?.ticket?.comments?.map((comment) => {
              return (
                <Flex mb={4} alignItems="center" justifyContent="space-between">
                  <ListItem p={4} bg="gray.100" borderRadius={10} width="100%">
                    <Text wordBreak="break-all">{comment.text}</Text>
                  </ListItem>
                  <ListItem ml={2}>
                    <Heading as="h6" size="sm">
                      {capitalize(comment.user.username)}
                    </Heading>
                  </ListItem>
                </Flex>
              );
            })}
          </List>

          <Formik
            initialValues={{ text: "" }}
            onSubmit={async (values) => {
              const { errors } = await createComment({
                variables: {
                  options: { ...values },
                  ticketId: data.ticket.id,
                },
                update: (cache) => {
                  cache.evict({ id: "Ticket:" + data.ticket.id });
                },
              });
              // todo improve error handling
              if (errors) {
                console.log(errors);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Box>
                <Form>
                  <InputField name="text" label="text" placeholder="Comment" />
                  <Button
                    mt={4}
                    type="submit"
                    isLoading={isSubmitting}
                    bg="teal"
                  >
                    Create Comment
                  </Button>
                </Form>
              </Box>
            )}
          </Formik>
        </Box>
      </Grid>
    </Layout>
  );
};

export default withApollo({ ssr: false })(Ticket);
