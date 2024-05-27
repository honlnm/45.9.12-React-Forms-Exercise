import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
    const [boxes, setBoxes] = useState([]);
    const addBox = boxObj => {
        setBoxes(boxes => [...boxes, boxObj])
    }
    const deleteBox = id => {
        setBoxes(boxes => boxes.filter(b => b.id !== id));
    }

    const boxComponents = boxes.map(b => (
        <Box
            key={b.id}
            id={b.id}
            handleRemove={deleteBox}
            backgroundColor={b.backgroundColor}
            width={b.width}
            height={b.height}
        />)
    )

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {boxComponents}
        </div>
    );
}

export default BoxList;