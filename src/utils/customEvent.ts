import mitt from "mitt";

const emitter = mitt();

const EventNames = {
  UpdateCursorStyle: "UpdateCursorStyle",
  UpdateInputStyle: "UpdateInputStyle",
  FocusInput: "FocusInput",
};

export { emitter, EventNames };
