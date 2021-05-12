import { Box, Flex, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router from "next/router";
import React from "react";
import { InputField } from "../../../components/inputField";
import { Layout } from "../../../components/Layout";
import { useUpdateTicketMutation } from "../../../generated/graphql";
import { useGetIntId } from "../../../utils/useGetIntId";
import { useGetTicketFromUrl } from "../../../utils/useGetTicketFromUrl";
import { withApollo } from "../../../utils/withApollo";

const EditTicket = ({}) => {
  const [updateTicket] = useUpdateTicketMutation();
  const { data } = useGetTicketFromUrl();
  const projectId = useGetIntId();

  if (!data?.ticket) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    );
  }
  return (
    <Layout variant="small">
      <Formik
        initialValues={{
          title: data.ticket.title,
          description: data.ticket.description,
          status: data.ticket.status,
          priority: data.ticket.priority,
        }}
        onSubmit={async (values) => {
          const { errors } = await updateTicket({
            variables: { options: { ...values }, id: projectId },
            update: (cache) => {
              cache.evict({ id: "Ticket:" + data.ticket.id });
            },
          });
          if (!errors) {
            router.back();
          }
        }}
      >
        {({ isSubmitting }) => (
          <Box p={4}>
            <Form>
              <InputField name="title" placeholder="Title" label="Title" />
              <Box mt={4}>
                <InputField
                  textarea
                  name="description"
                  placeholder="Description"
                  label="Description"
                />
              </Box>
              <Box mt={4}>
                <InputField
                  textarea
                  name="status"
                  placeholder="Status"
                  label="Status"
                />
              </Box>
              <Box mt={4}>
                <InputField
                  textarea
                  name="priority"
                  placeholder="Priority"
                  label="Priority"
                />
              </Box>

              <Flex justifyContent="center">
                <Button mt={4} type="submit" isLoading={isSubmitting} bg="teal">
                  Update Ticket
                </Button>
              </Flex>
            </Form>
          </Box>
        )}
      </Formik>
    </Layout>
  );
};
export default withApollo({ ssr: false })(EditTicket);
