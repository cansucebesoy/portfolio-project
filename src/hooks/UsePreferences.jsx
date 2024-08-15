import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function usePreferences() {
  return useContext(UserContext);
}
