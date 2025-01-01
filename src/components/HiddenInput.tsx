import { useEffect, useState } from "react";
import { emitter, EventNames } from "@/utils/customEvent";

interface IStyle {
  top: number;
  left: number;
}

function HiddenInput() {
  const [style, setStyle] = useState<IStyle>(null);
  useEffect(() => {
    const handleUpdateStyle = (data) => {
      const { top, left } = data;
      setStyle({ top, left });
    };

    emitter.on(EventNames.UpdateInputStyle, handleUpdateStyle);
    return () => {
      emitter.off(EventNames.UpdateInputStyle, handleUpdateStyle);
    };
  }, []);
  return <input className="hidden-input" style={style} />;
}

export default HiddenInput;
