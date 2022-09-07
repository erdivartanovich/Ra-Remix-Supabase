import { useNotify, useTranslate, DeleteButton } from "react-admin";

export const AppDeleteButton = (props: any) => {
  const notify = useNotify();
  const translate = useTranslate();
  const onError = (response: Response) => {
    if (response.status === 406) {
      notify(translate("ra.notification.not_authorized"), { type: "error" });
    }
    notify(translate("ra.message.error"), { type: "error" });
  };
  return <DeleteButton {...props} mutationOptions={{ onError: onError }} />;
};
