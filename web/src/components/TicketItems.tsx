import { Box, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { TicketInput } from "../generated/graphql";
import capitalize from "../utils/capitalize";

interface TicketProps {
  field: string;
  data: TicketInput;
}

export const TicketItems: React.FC<TicketProps> = ({ field }) => {
  return (
    <GridItem>
      <Box mb={4}>
        <Heading mb={2} as="h5" size="sm">
          Ticket {capitalize(field)}
        </Heading>
        <Heading as="h6" size="xs"></Heading>
      </Box>
    </GridItem>
  );
};
