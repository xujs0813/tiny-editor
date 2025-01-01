import mitt from "mitt";

const emitter = mitt();

const EventNames = {
  UpdateCursorStyle: "UpdateCursorStyle",
  UpdateInputStyle: "UpdateInputStyle",
};

export { emitter, EventNames };
