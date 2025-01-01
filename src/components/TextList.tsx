import { useEffect, useMemo } from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { getBlocks } from "@/data";

function Index() {
    const updateToken = useSelector(
        (state: RootState) => state.data.updateToken
    );

    const blocks = useMemo(() => {
        return getBlocks();
    }, [updateToken]);

    useEffect(() => {}, [updateToken]);
    return (
        <div className="texts" id="texts">
            {blocks.map((block) => {
                const { id, token, text } = block;
                return (
                    <div className="text" data-id={id} key={id + token}>
                        {text}
                    </div>
                );
            })}
        </div>
    );
}

export default Index;
