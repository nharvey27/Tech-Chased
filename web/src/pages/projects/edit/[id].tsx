import { Box, Button, Flex } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../../../components/inputField";
import { Layout } from "../../../components/Layout";
import { useUpdateProjectMutation } from "../../../generated/graphql";
import { useGetIntId } from "../../../utils/useGetIntId";
import { useGetProjectFromUrl } from "../../../utils/useGetProjectFromUrl";
import { withApollo } from "../../../utils/withApollo";

const EditProject: React.FC = ({}) => {
  const router = useRouter();
  const [updateProject] = useUpdateProjectMutation();
  const { data } = useGetProjectFromUrl();
  const intId = useGetIntId();

  if (!data?.project) {
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
          title: data.project.title,
          description: data.project.description,
        }}
        onSubmit={async (values) => {
          await updateProject({
            variables: { options: values, id: intId },
            update: (cache) => {
              cache.evict({ id: "Project:" + intId });
            },
          });
          router.back();
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
                  Update Project
                </Button>
              </Flex>
            </Form>
          </Box>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(EditProject);
