import { End } from "./pages/end.js";
import { Index } from "./pages/index.js";
let state = JSON.parse(localStorage.getItem("state"));
if (state == null) {
  Index();
} else {
  state.page == "end" ? End({ score: state.score }) : "";
}
