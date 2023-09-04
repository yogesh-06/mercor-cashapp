import { merge } from "lodash";
import Typography from "./Typography";
import IconButton from "./IconButton";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(Typography(theme), IconButton(theme));
}
