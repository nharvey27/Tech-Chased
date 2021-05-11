import {
  Box,
  Divider,
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
import { useGetProjectFromUrl } from "../../utils/useGetProjectFromUrl";
import { withApollo } from "../../utils/withApollo";
import NextLink from "next/link";
import { useDeleteProjectMutation } from "../../generated/graphql";
import { DeleteIcon } from "@chakra-ui/icons";
import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";

interface ProjcetProps {}

const Project = ({}) => {
  const { data, error, loading } = useGetProjectFromUrl();
  const [deleteProject] = useDeleteProjectMutation();
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
          <Heading as="h3" ml={4} size="lg" mb={3} mt={3}>
            Details for Project #{data.project.id}
          </Heading>
          <Flex alignItems="center">
            <NextLink href={`/projects/edit/${data.project.id}`} replace>
              <Link ml={4}>
                <Heading as="h4" size="xs">
                  Edit |
                </Heading>
              </Link>
            </NextLink>
            <IconButton
              icon={<DeleteIcon />}
              aria-label="Delete Project"
              onClick={() => {
                deleteProject({
                  variables: { id: data.project.id },
                  update: (cache) => {
                    // Post:77
                    cache.evict({ id: "Project:" + data.project.id });
                    router.push("/");
                  },
                });
              }}
            />
          </Flex>
        </Stack>
        <Box ml={4}>
          <Grid templateColumns={"repeat(6, 1fr)"} templateRows={"auto"}>
            <GridItem colSpan={3}>
              <Heading mb={2} as="h5" size={"xs"}>
                Project Name
              </Heading>
              <Heading mb={16} size={"sm"} as="h6" ml={2}>
                {data.project.title}
                <Divider orientation="horizontal" />
              </Heading>
            </GridItem>

            <GridItem colSpan={3}>
              <Heading mb={2} as="h5" size={"xs"}>
                Project Description
              </Heading>
              <Heading mb={16} size={"sm"} as="h6" ml={2}>
                {data.project.description}
                <Divider orientation="horizontal" />
              </Heading>
            </GridItem>

            <GridItem colSpan={2}>
              <Heading as="h5" size={"sm"} mb={2}>
                Assigned Personnel
              </Heading>
              <Text size={"xs"} ml={2} mb={8}>
                Current users on this Project
              </Text>

              <Grid templateColumns={"repeat(4,1fr)"}>
                <GridItem mb={4} colSpan={2}>
                  User Name
                  <Divider orientation="horizontal" />
                </GridItem>

                <GridItem colSpan={2}>
                  Email <Divider orientation="horizontal" />
                </GridItem>

                {data.project.users.map((user) =>
                  !user ? null : (
                    <>
                      <GridItem mb={4} colSpan={2}>
                        {user.username}
                        <Divider orientation="horizontal" />
                      </GridItem>
                      <GridItem colSpan={2}>
                        {user.email}
                        <Divider orientation="horizontal" />
                      </GridItem>
                    </>
                  )
                )}
              </Grid>
            </GridItem>

            <GridItem colSpan={4}>
              <Grid templateColumns="repeat(2, 50%)">
                <GridItem>
                  <Heading size={"sm"} mb={2}>
                    Tickets for this project
                  </Heading>
                </GridItem>

                <GridItem mr={4} justifySelf="end">
                  <NextLink
                    href={`/projects/${data.project.id}/create-ticket`}
                    replace
                  >
                    <Link colorScheme="facebook">Create Ticket</Link>
                  </NextLink>
                </GridItem>
                <GridItem>
                  <Text alignSelf="flex-end" size={"xs"} ml={2} mb={8}>
                    Ticket details
                  </Text>
                </GridItem>
              </Grid>

              <Box>
                <Grid templateColumns={"repeat(8,1fr)"}>
                  <GridItem mb={4} colSpan={2}>
                    Title
                    <Divider orientation="horizontal" />
                  </GridItem>
                  <GridItem colSpan={2}>
                    Status
                    <Divider orientation="horizontal" />
                  </GridItem>
                  <GridItem colSpan={2}>
                    Priority
                    <Divider orientation="horizontal" />
                  </GridItem>
                  <GridItem colSpan={2}>
                    Submitter
                    <Divider orientation="horizontal" />
                  </GridItem>

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
                          <Divider orientation="horizontal" />
                        </GridItem>
                        <GridItem mb={4} colSpan={2}>
                          {ticket.status}
                          <Divider orientation="horizontal" />
                        </GridItem>
                        <GridItem colSpan={2}>
                          {ticket.priority}
                          <Divider orientation="horizontal" />
                        </GridItem>
                        <GridItem colSpan={2}>
                          {ticket.users[0].username}
                          <Divider orientation="horizontal" />
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
