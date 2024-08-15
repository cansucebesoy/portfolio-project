import usePreferences from "./UsePreferences";
import { translation } from "../Translation/Data";

export const useTranslation = (path) => {
  const { lang } = usePreferences();
  const fullPath = lang + "." + path;
  return getNestedProperty(translation, fullPath);
};

function getNestedProperty(obj, path) {
  if (!path) return obj;

  const props = path.split(".");
  let i;
  for (i = 0; i < props.length - 1; i++) {
    const candidate = obj[props[i]];
    if (candidate !== undefined) {
      obj = candidate;
    } else {
      break;
    }
  }
  return obj[props[i]];
}
