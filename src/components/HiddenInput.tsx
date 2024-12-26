import { useEffect, useState } from "react";
import { emitter, EventNames } from "../utils/customEvent";

function HiddenInput() {
  const [style, setStyle] = useState<any>(null);
  useEffect(() => {
    const handleUpdateStyle = (data) => {
      console.log("data: ", data);
      const { top, left } = data;
      setStyle({ top, left });
    };

    emitter.on(EventNames.UpdateInput, handleUpdateStyle);
    return () => {
      emitter.off(EventNames.UpdateInput, handleUpdateStyle);
    };
  }, []);
  return <input className="hidden-input" style={style} />;
}

export default HiddenInput;
