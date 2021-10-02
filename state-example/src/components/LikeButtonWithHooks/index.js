import React, { useState, useEffect } from "react";

const LikeButtonWithHooks = () => {

    const [liked, setLiked] = useState(false);

    useEffect(() => console.log("⚡️⚡️⚡️ this is update with hooks: ⚡️⚡️⚡️ ", liked), [liked]);

    return <>
        { liked ? (
            <button onClick={ () => setLiked(false) }> Unlike </button>
        ) : (
            <button onClick={ () => setLiked(true) }> Like </button>
        ) }
    </>

}

export default LikeButtonWithHooks;