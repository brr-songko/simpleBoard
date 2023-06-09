import React from "react";

const Board = ({ boardId, boardTitle, boardWriter, boardDetail}) => {
    return (
        <div>
            <h2>{boardTitle}</h2>
            <h5>{boardWriter}</h5>
            <hr />
            <p>{boardDetail}</p>
        </div>
    );
};

export default Board;