import mitt from "mitt";

const emitter = mitt();

const EventNames = {
  UpdateHeadCursor: "UpdateHeadCursor",
  UpdateTailCursor: "UpdateTailCursor",
  UpdateBlinkCursor: "UpdateBlinkCursor",
  UpdateInput: "UpdateInput",
};

export { emitter, EventNames };
