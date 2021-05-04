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
import { useMeQuery } from "../generated/graphql";
import { Sidebar } from "./Sidebar";
import capitalize from "../utils/capitalize";

interface NavbarProps {}

export const NavBar: React.FC<NavbarProps> = ({}) => {
  const { data } = useMeQuery();
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
            Tech Chased
          </Heading>
        </Box>
        <Spacer />
        {body}
      </Flex>
    </>
  );
};
