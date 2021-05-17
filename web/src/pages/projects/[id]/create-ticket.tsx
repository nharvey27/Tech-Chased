import { Box, Flex, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../../../components/inputField";
import { Layout } from "../../../components/Layout";
import {
  MeDocument,
  ProjectsDocument,
  useCreateTicketMutation,
} from "../../../generated/graphql";
import { useGetIntId } from "../../../utils/useGetIntId";
import { withApollo } from "../../../utils/withApollo";

const CreateTicket = ({}) => {
  const [createTicket] = useCreateTicketMutation();
  const projectId = useGetIntId();
  const router = useRouter();
  return (
    <Layout variant="small">
      <Formik
        initialValues={{
          title: "",
          description: "",
          status: "",
          priority: "",
        }}
        onSubmit={async (values) => {
          const { errors } = await createTicket({
            variables: { options: { ...values }, projectId },
            refetchQueries: [
              { query: ProjectsDocument },
              { query: MeDocument },
            ],
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
                  Create Ticket
                </Button>
              </Flex>
            </Form>
          </Box>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(CreateTicket);
