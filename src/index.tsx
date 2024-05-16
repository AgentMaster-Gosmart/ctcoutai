import r2wc from "@r2wc/react-to-web-component";
import App from "./App";
import "./index.css";

const intWidget = r2wc(App, {
  props: {
    prompt: "string",
    textTuning: "string",
    textEnd: "string",
    textStart: "string",
    textVoicemail: "string",
    phoneForwarding: "string",
    btnColor: "string",
  },
});

customElements.define("int-widget", intWidget);
