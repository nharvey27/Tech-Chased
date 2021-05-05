import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Link,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
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
            <Button as={Link}>Create Project</Button>
          </NextLink>
          <Button colorScheme="" onClick={onOpen}>
            Profile
          </Button>
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
      <Flex>
        <Box mr={2} mt={2} ml={2}>
          <Heading as="h2" size="lg">
            <NextLink href="/" as="/">
              <Link> Tech Chased</Link>
            </NextLink>
          </Heading>
        </Box>
        <Spacer />
        {body}
      </Flex>
    </>
  );
};
