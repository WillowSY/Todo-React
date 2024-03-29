//import React from "react";
import Todo from './Todo';
import AddTodo from "./AddTodo.js";
import React, {useState, useEffect} from "react";
import {Container, List, Paper} from "@mui/material";
import {call} from "./service/ApiService.js";
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    const requestOptions ={
      method: "GET",
      headers: {"Content-Type": "application/json"},
    };  

    fetch("http://localhost:8080/todo", requestOptions)
      .then((response)=>response.json())
      .then(
        (response) => {
          setItems(response.data);
        },
        (error) => {}
      );
  }, []);
  //다른 함수

  // const addItem = (item) => {
  //   item.id = "ID-" +items.length;
  //   item.done = false;
  //   setItems([...items, item]);
  //   console.log("items : ", items);
  // }
  
  // const deleteItem = (item) => {
  //   const newItems = items.filter(e=>e.id!==item.id);
  //   setItems([...newItems]);
  // }

  const editItem=(item)=>{
    call("/todo", "PUT", item)
    .then((response)=> setItems(response.data));
    //setItems([...items]);
  };

  useEffect(()=>{
    call("/todo", "GET", null)
    .then((response)=> setItems(response.data));
}, []);

const addItem = (item)=>{
    call("/todo", "POST", item)
    .then((response) => setItems(response.data));
};

const deleteItem=(item)=>{
    call("/todo", "DELETE", item)
    .then((response)=> setItems(response.data));
};

  let todoItems = items.length>0&&(
    <Paper style={{margin: 16}}>
      <List>
        {items.map((item)=>(
          <Todo item={item} key={item.id} editItem={editItem} deleteItem={deleteItem}/>
        ))}
      </List>
    </Paper>
  );
  return (<div className="App">
          <Container maxWidth="md">
            <AddTodo addItem={addItem}/>
            <div className="TodoList">{todoItems}</div>
          </Container>
        </div>);
  }
export default App;
