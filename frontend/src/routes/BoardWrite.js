import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BoardWrite = () => {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        boardTitle: '',
        boardWriter: '',
        boardDetail: '',
    });

    const {boardTitle, boardWriter, boardDetail} = board;

    const onChange = (event) => {
        const { name, value } = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const saveBoard = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('boardTitle', board.boardTitle);
        data.append('boardWriter', board.boardWriter);
        data.append('boardDetail', boardDetail);

        axios
            .post(`//localhost:8080/board`, data)
            .then((response) => {
                alert('등록되었습니다.');
                navigate('/board');
            });
    };
/*
    const saveBoard = async () => {
        console.log(board);
        await axios.post(`//localhost:8080/board`, board).then((res) => {
            alert('등록되었습니다.');
            navigate('/board');
        });
    };
*/

    const backToList = () => {
        navigate('/board');
    };

    return (
        <div>
            <div>
                <span>제목</span>
                <input type="text" name="boardTitle" value={boardTitle} onChange={onChange} />
            </div>
            <br />
            <div>
                <span>작성자</span>
                <input
                    type="text"
                    name="boardWriter"
                    value={boardWriter}
                    onChange={onChange}
                />
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
                <button onClick={saveBoard}>저장</button>
                <button onClick={backToList}>취소</button>
            </div>
        </div>
    );
};

export default BoardWrite;