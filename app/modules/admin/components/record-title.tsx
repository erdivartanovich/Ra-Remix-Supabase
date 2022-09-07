import { useRecordContext } from "react-admin";

export const RecordTitle = ({ resourceName }: { resourceName?: string }) => {
  const record = useRecordContext();
  const resource = resourceName || "";
  return (
    <span>{`${resource ? resource + " - " : ""} ${record?.name || ""}`}</span>
  );
};
