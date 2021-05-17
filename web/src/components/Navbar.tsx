import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { Sidebar } from "./Sidebar";
import capitalize from "../utils/capitalize";
import { useApolloClient } from "@apollo/client";

interface NavbarProps {}

export const NavBar: React.FC<NavbarProps> = ({}) => {
  const apolloClient = useApolloClient();

  const { data } = useMeQuery();
  const [logout, { loading: logoutFetching }] = useLogoutMutation();
  // const [iOpen, updateIsOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let body;
  let sidebar;

  if (!data?.me) {
    body = (
      <Box>
        <NextLink href="/login">
          <Button as={Link}>Login</Button>
        </NextLink>
        <NextLink href="/register">
          <Button as={Link}>Register</Button>
        </NextLink>
      </Box>
    );
  } else {
    body = (
      <>
        <Flex align="center">
          <Box mr={2}>{capitalize(data.me.username)}</Box>
          <NextLink href="/create-project">
            <Text mr={2} as={Link}>
              Create Project
            </Text>
          </NextLink>
          <Text mr={2} as={Link} colorScheme="" onClick={onOpen}>
            Profile
          </Text>
          <Button
            onClick={async () => {
              await logout();
              await apolloClient.resetStore();
            }}
            isLoading={logoutFetching}
          >
            Logout
          </Button>
        </Flex>
      </>
    );
    sidebar = (
      <>
        <Sidebar
          me={data.me}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </>
    );
  }

  return (
    <>
      {sidebar}
      <Flex boxShadow="sm" bgColor="#86a5a9">
        <Box mr={2} mt={2} ml={8}>
          <Heading as="h2" size="md">
            <NextLink href="/" as="/">
              <Link bg="none"> Tech Chased</Link>
            </NextLink>
          </Heading>
        </Box>
        <Spacer />
        {body}
      </Flex>
    </>
  );
};
