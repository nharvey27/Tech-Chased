import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../components/Layout";
import { useGetProjectFromUrl } from "../../utils/useGetProjectFromUrl";
import { withApollo } from "../../utils/withApollo";
import NextLink from "next/link";

interface ProjcetProps {}

const Project = ({}) => {
  const { data, error, loading } = useGetProjectFromUrl();
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
  if (!data?.project) {
    return (
      <Layout>
        <Box> Could not find project.</Box>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <Stack ml={4} mb={10} mt={-2} bg="yellow.400">
          <Heading as="h3" ml={2} size="lg" mb={3} mt={3}>
            Details for Project #{data.project.id}
          </Heading>
        </Stack>
        <Box ml={4}>
          <Grid
            templateColumns={"repeat(6, 1fr)"}
            templateRows={"repeat(2, 1fr)"}
          >
            <GridItem colSpan={3} bg="">
              <Heading mb={2} as="h5" size={"xs"}>
                Project Name
              </Heading>
              <Heading mb={4} size={"sm"} as="h6" ml={2}>
                {data.project.title}
              </Heading>
              <Divider orientation="horizontal" />
            </GridItem>

            <GridItem colSpan={3} bg="">
              <Heading mb={2} as="h5" size={"xs"}>
                Project Description
              </Heading>
              <Heading mb={4} size={"sm"} as="h6" ml={2}>
                {data.project.description}
              </Heading>
              <Divider orientation="horizontal" />
            </GridItem>

            <GridItem colSpan={2}>
              <Heading as="h5" size={"sm"}>
                Assigned Personnel
              </Heading>
              <Heading as={"h6"} size={"xs"} ml={2} mb={4}>
                Current users on this Project
              </Heading>
              <Box>
                <Grid templateColumns={"repeat(4,1fr)"}>
                  <GridItem colSpan={2}>User Name</GridItem>
                  <GridItem colSpan={2}>Email</GridItem>
                  {data.project.users.map((user) =>
                    !user ? null : (
                      <>
                        <GridItem colSpan={2}>{user.username}</GridItem>
                        <GridItem colSpan={2}>{user.email}</GridItem>
                      </>
                    )
                  )}
                </Grid>
              </Box>
            </GridItem>

            <GridItem colSpan={4}>
              <Heading as="h5" size={"sm"}>
                Tickets for this project
              </Heading>
              <Heading as="h6" size={"xs"} ml={2} mb={4}>
                Ticket details
              </Heading>
              <Box>
                <Grid templateColumns={"repeat(8,1fr)"}>
                  <GridItem colSpan={2}>Title </GridItem>
                  <GridItem colSpan={2}>Status</GridItem>
                  <GridItem colSpan={2}>Priority</GridItem>
                  <GridItem colSpan={2}>Submitter</GridItem>

                  {data.project.tickets.map((ticket) =>
                    !ticket ? null : (
                      <>
                        <GridItem colSpan={2}>
                          <NextLink
                            href="/tickets/[id]"
                            as={`/tickets/${ticket.id}`}
                          >
                            <Link>{ticket.title}</Link>
                          </NextLink>
                        </GridItem>
                        <GridItem colSpan={2}>{ticket.status}</GridItem>
                        <GridItem colSpan={2}>{ticket.priority}</GridItem>
                        <GridItem colSpan={2}>
                          {ticket.users[0].username}
                        </GridItem>
                      </>
                    )
                  )}
                </Grid>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default withApollo({ ssr: true })(Project);
