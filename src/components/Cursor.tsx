import { useEffect, useState } from "react";
import { emitter } from "../utils/customEvent";

interface IProps {
  className: string;
  eventType: string;
}

function Cursor(props: IProps) {
  const { eventType, className } = props;
  const [style, setStyle] = useState<any>(null);
  useEffect(() => {
    if (!eventType) {
      return;
    }
    const handleUpdateStyle = (data) => {
      if(!data){
        setStyle(null);
        return 
      }
      const { top, left } = data;
      setStyle({ top, left });
    };

    emitter.on(eventType, handleUpdateStyle);
    return () => {
      emitter.off(eventType, handleUpdateStyle);
    };
  }, [eventType]);
  return <div className={`cursor ${className}`} style={style} />;
}

export default Cursor;
