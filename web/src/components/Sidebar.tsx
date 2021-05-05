import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MeQuery, RegularUserFragment } from "../generated/graphql";
import capitalize from "../utils/capitalize";

interface SidebarProps {
  me: RegularUserFragment;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  me,
  isOpen,
  onClose,
  onOpen,
}) => {
  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Profile</DrawerHeader>
        <DrawerBody>
          <Heading>{capitalize(me.username)}</Heading>
          {me.projects?.map((project) => {
            <p>{project.title}</p>;
          })}
          {/* <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Projects
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {me.projects?.map((project) => {
                  <Heading>{project.title} </Heading>;
                })}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Tickets
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {me.tickets?.map((ticket) => {
                  <Heading>{ticket.title} </Heading>;
                })}
              </AccordionPanel>
            </AccordionItem>
          </Accordion> */}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
