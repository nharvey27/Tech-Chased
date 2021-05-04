import { Stack } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import { useProjectsQuery } from "../generated/graphql";

import { withApollo } from "../utils/withApollo";

const Index: React.FC = ({}) => {
  const { data, error, loading, fetchMore, variables } = useProjectsQuery();

  if (!loading && !data) {
    return (
      <div>
        <div>your query failed for some reason</div>
        <div>{error?.message} </div>
      </div>
    );
  }

  return (
    // <Layout>
    //   {!data && loading ? (
    //     <div>loading</div>
    //   ) : (
    //     <Stack>
    //       {data?.projects.map((p) => (!p ? null : <div>{p.id}</div>))}
    //     </Stack>
    //   )}
    // </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
