import { Box, Button } from "@chakra-ui/react";
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
          status: "",
          priority: "",
        }}
        onSubmit={async (values) => {
          const { errors } = await createProject({
            variables: { options: values },
            update: (cache) => {
              cache.evict({ fieldName: "projects:{}" });
            },
          });
          if (!errors) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="title" label="Title" />
            <Box mt={4}>
              <InputField
                textarea
                name="description"
                placeholder="description"
                label="description"
              />
            </Box>
            <Box mt={4}>
              <InputField
                name="priority"
                placeholder="priority"
                label="Priority"
              />
            </Box>
            <Box mt={4}>
              <InputField name="status" placeholder="status" label="Status" />
            </Box>
            <Button mt={4} type="submit" isLoading={isSubmitting} bg="teal">
              Create Project
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(CreateProject);
