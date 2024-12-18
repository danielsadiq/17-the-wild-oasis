import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    // Mutation function can only accept one argument/element
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings successfully updates");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      //   reset();
      // today
      // todays
      // day 2 of no code
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateSetting, isUpdating };
}
