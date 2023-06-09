import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Board from "../components/Board";

const BoardText = () => {
    const { boardId } = useParams();
    const [loading, setLoading] = useState(true);
    const [board, setBoard] = useState({});
    const getBoard = async () => {
        const resp = await (await axios.get(`//localhost:8080/board/${boardId}`));
        setBoard(resp.data);
        setLoading(false);
    };

    useEffect(() => {
        getBoard();
    }, []);

    return (
        <div>
            {loading ? (
                <h2>loading...</h2>
            ) : (
                <Board
                    boardId={board.boardId}
                    boardTitle={board.boardTitle}
                    boardWriter={board.boardWriter}
                    boardDetail={board.boardDetail}
                />
            )}
        </div>
    );
};

export default BoardText;