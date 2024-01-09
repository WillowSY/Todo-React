import React, {useState} from "react";
import {Button , Grid, TextField} from "@mui/material";

const AddBoard= (props) =>{
    //사용자 입력을 저장할 오브젝트
    const[boarditem, setBoardItem] = useState({title:"", context:""});
    const addBoardItem= props.addBoardItem;

    // onInputChange 함수 작성
    // onButtonClick function
    const onButtonClick = ()=>{
        console.log("글 작성");
        addBoardItem(boarditem); //addItem 함수 사용
        setBoardItem({title:"None-Title",context : "None-Context"});
    }

    return(
        <Button fullWidth style={{width: '100%'}} color="secondary" 
            variant="outlined" onClick={onButtonClick}> 
            글 작성
        </Button>
    );
}

export default AddBoard;