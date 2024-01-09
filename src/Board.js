import React, {useState} from "react";
import Todo from "./Todo";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton,} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import {Link} from "react-router-dom";
const Board = (props) =>{
    const[boarditem, setItem] = useState(props.boarditem);
    //const deleteItem = props.deleteItem;
    //const editItem = props.editItem;

    // const deleteEventHandler = () =>{
    //     deleteItem(item);
    // };
    // const editEventHandler=(e)=>{
    //     item.title = e.target.value;
    //     editItem();
    // };
    
    return(
        <ListItem>
            <ListItemText>
                <Link to="/Board/${boarditem.boardid}">
                    <InputBase
                        inputProps = {{"aria-label" : "naked"}}
                        type="text"
                        id={boarditem.id}
                        name={boarditem.id}
                        value={boarditem.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </Link>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo"> 
                {/* onClick={deleteEventHandler}> */}
                    <DeleteOutlined/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo;