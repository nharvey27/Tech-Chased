import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { MeDocument, MeQuery, useRegisterMutation } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";
import { useRouter } from "next/router";
import { toErrorMap } from "../utils/toErrorMap";
import { InputField } from "../components/inputField";
import { Wrapper } from "../components/Wrapper";

const Register: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [register] = useRegisterMutation();
  return (
    <Wrapper>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({
            variables: { options: values },
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: "Query",
                  me: data?.register.user,
                },
              });
            },
          });
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
            if (typeof router.query.next === "string") {
              router.push(router.query.next);
            } else {
              // worked
              router.push("/");
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username "
              label="Username "
            />
            <InputField name="email" placeholder="email " label="Email " />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              colorScheme="teal"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withApollo({ ssr: false })(Register);
