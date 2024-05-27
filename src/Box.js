import React from 'react';

function Box({
    id,
    handleRemove,
    width = 300,
    height = 300,
    backgroundColor = "white"
}) {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div
                style={{
                    height: `${height}px`,
                    width: `${width}px`,
                    backgroundColor
                }}></div>
            <button onClick={remove}>X</button>
        </div>
    );
};

export default Box;