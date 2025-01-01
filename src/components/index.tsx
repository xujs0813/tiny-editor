import "./index.css";
import TextList from "./TextList";
import HiddenInput from "./HiddenInput";
import Cursor from "./Cursor";
import { EventNames } from "@/utils/customEvent";
import useWindowEvents from "./hooks/useWindowEvents";
import Search from "./Search";

function Index() {
    useWindowEvents();

    return (
        <>
            <TextList></TextList>
            <HiddenInput></HiddenInput>
            <Cursor
                eventType={EventNames.UpdateCursorStyle}
                className="blink-cursor"
            ></Cursor>
            <Search></Search>
        </>
    );
}

export default Index;
