import { Box, Grid, GridItem, Heading, Link } from "@chakra-ui/react";
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
        <Heading mb={6}>Details for project {data.project.id}</Heading>
        <Box>
          <Grid
            templateColumns={"repeat(6, 1fr)"}
            templateRows={"repeat(2, 1fr)"}
          >
            <GridItem colSpan={3} bg="">
              <Heading mb={2} size={"xs"}>
                Project Name
              </Heading>
              <Heading size={"md"} ml={2}>
                {data.project.title}
              </Heading>
            </GridItem>
            <GridItem colSpan={3} bg="">
              <Heading mb={2} size={"xs"}>
                Project Description
              </Heading>
              <Heading size={"md"} ml={2}>
                {data.project.description}
              </Heading>
            </GridItem>
            <GridItem colSpan={2}>
              <Heading size={"md"}>Assigned Personnel</Heading>
              <Heading size={"xs"} ml={2}>
                Current useres on this Project
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
              <Heading size={"md"}>Tickets for this project</Heading>
              <Heading size={"xs"} ml={2}>
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
                        <NextLink
                          href="/tickets/[id]"
                          as={`/tickets/${ticket.id}`}
                        >
                          <Link>
                            <GridItem colSpan={2}>{ticket.title}</GridItem>
                          </Link>
                        </NextLink>
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
