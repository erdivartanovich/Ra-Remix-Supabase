import { SaveButton, Toolbar } from "react-admin";
import { AppDeleteButton } from "./delete-button";

export const AppEditToolbar = () => (
  <Toolbar>
    <SaveButton />
    <AppDeleteButton />
  </Toolbar>
);
