import { useTicketQuery } from "../generated/graphql";
import { useGetIntId } from "./useGetIntId";

export const useGetTicketFromUrl = () => {
  const intId = useGetIntId();
  return useTicketQuery({
    skip: intId === -1,
    variables: {
      id: intId,
    },
  });
};
