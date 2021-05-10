import { Box, Button, Flex } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/inputField";
import { Layout } from "../components/Layout";
import { useCreateProjectMutation } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";

interface Props {}

const CreateProject: React.FC = ({}) => {
  const router = useRouter();
  const [createProject] = useCreateProjectMutation();
  return (
    <Layout variant="small">
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values) => {
          const { errors } = await createProject({
            variables: { options: values },
            update: (cache) => {
              cache.evict({ fieldName: "User:{}" });
            },
          });
          if (!errors) {
            router.push("/");
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

              <Flex justifyContent="center">
                <Button mt={4} type="submit" isLoading={isSubmitting} bg="teal">
                  Create Project
                </Button>
              </Flex>
            </Form>
          </Box>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(CreateProject);
