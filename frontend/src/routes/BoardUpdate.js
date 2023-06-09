import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BoardUpdate = () => {
    const navigate = useNavigate();
    const {boardId} = useParams();
    const [board, setBoard] = useState({
        boardId: '',
        boardTitle: '',
        boardWriter: '',
        boardDetail: ''
    });

    const { boardTitle, boardWriter, boardDetail } = board;

    const onChange = (event) =>{
        const {value, name} = event.target;
        setBoard({
            ...board,
            [name]: value,
            boardId: boardId
        });
    };

    const getBoard = async () => {
        const resp = await (await axios.get(`//localhost:8080/board/${boardId}`));
        setBoard(resp.data);
        console.log(resp.boardId);
    };

    const updateBoard = async () => {
        console.log(board.boardId)
        await axios.put(`//localhost:8080/board/${boardId}`, board).then((res) => {
            alert('수정되었습니다.');
            navigate('/board/' + boardId);
        });
    };

    const backToDetail = () => {
        navigate('/board/' + boardId);
    }

    useEffect(() => {
        getBoard();
    }, []);

    return(
        <div>
            <div>
                <span>제목</span>
                <input type="text" name="boardTitle" value={boardTitle} onChange={onChange} />
            </div>
            <br />
            <div>
                <span>작성자</span>
                <input type="text" name="boardWriter" value={boardWriter} onChange={onChange} />
            </div>
            <br />
            <div>
                <span>내용</span>
                <textarea
                    name="boardDetail"
                    cols="30"
                    rows="10"
                    value={boardDetail}
                    onChange={onChange}
                ></textarea>
            </div>
            <br />
            <div>
                <button onClick={updateBoard}>수정</button>
                <button onClick={backToDetail}>취소</button>
            </div>
        </div>
    );
};

export default BoardUpdate;