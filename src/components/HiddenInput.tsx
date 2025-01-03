import { useEffect, useState, useRef, useCallback } from "react";
import { emitter, EventNames } from "@/utils/customEvent";
import {insertText} from '@/data/index'

interface IStyle {
    top: number;
    left: number;
}

function HiddenInput() {
    const [val, setVal] = useState<string>('');
    const [style, setStyle] = useState<IStyle>(null);
    const refInput = useRef<HTMLInputElement>(null);
    const refFocus = useRef<boolean>(false);

    useEffect(() => {
        const handleUpdateStyle = (data) => {
            const { top, left } = data;
            setStyle({ top, left });
        };

        const handleFocusInput = () => {
            if (refFocus.current) {
                return;
            }
            refInput.current.focus();
        };

        emitter.on(EventNames.UpdateInputStyle, handleUpdateStyle);
        emitter.on(EventNames.FocusInput, handleFocusInput);
        return () => {
            emitter.off(EventNames.UpdateInputStyle, handleUpdateStyle);
            emitter.off(EventNames.FocusInput, handleFocusInput);
        };
    }, []);

    const handleChange = useCallback((event) => {
        const value = event.target.value;
        console.log("value: ", value);
        insertText(value)
        setVal('');
    }, []);

    const handleFocus = useCallback(() => {
        refFocus.current = true;
    }, []);

    const handleBlur = useCallback(() => {
        refFocus.current = false;
    }, []);

    return (
        <input
            className="hidden-input"
            style={style}
            ref={refInput}
            value={val}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
}

export default HiddenInput;
