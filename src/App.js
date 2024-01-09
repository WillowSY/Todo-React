import './App.css';

import Login from './Login'
import Todo from "./Todo";
import Board from "./Board";
import React, {useState} from "react";
import {List, Paper, Container} from "@mui/material";
import AddTodo from "./AddTodo";
import AddBoard from "./AddBoard";
import Header from "./Header";
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  const [items, setItems] = useState([]);
  const [boarditems, setBoardItems] = useState([]);

  // Todo 관련함수들
  const addItem = (item)=>{
    item.id = "ID-"+items.length; //key를 위한 id
    item.done = false;            //done 초기화
    // 업데이트는 반드시 setItems로 하고 새배열을 만들어야 한다.
    setItems([...items, item]);
    console.log("items:", items);
  };
  const deleteItem = (item)=>{
    //삭제할 아이템을 찾는다.
    const newItems = items.filter(e=>e.id!==item.id);
    setItems([...newItems]);
  }
  const editItem = ()=>{
    setItems([...items]);
  };

  // Board 관련함수들
  const addBoardItem = (boarditem)=>{
    boarditem.id = "ID-"+boarditems.length; //key를 위한 id
    // 업데이트는 반드시 setItems로 하고 새배열을 만들어야 한다.
    setBoardItems([...boarditems, boarditem]);
    console.log("boarditems:", boarditems);
  };


  let todoItems = items.length > 0 &&(
    <Paper style={{margin:16}}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id} deleteItem={deleteItem} editItem={editItem} />
        ))}
      </List>
    </Paper>
  );
  let boardItems = boarditems.length > 0 &&(
    <Paper style={{margin:16}}>
      <List>
        {boarditems.map((boarditem) => (
          <Board boarditem={boarditem} boardkey={boarditem.id}/> //deleteItem={deleteItem} editItem={editItem} />
        ))}
      </List>
    </Paper>
  );
  return <div className="App">
    <BrowserRouter>
          <div className="App">
            <Header/>
            <Switch>

              <Route path="/Todo">
                <Container maxWidth="md">
                  <AddTodo addItem={addItem} />
                  <div className="TodoList">{todoItems}</div>
                </Container>
              </Route>
              
              
              <Route path="/Board/AddBoard">
              </Route>
              <Route path="/Board">
                <Container maxWidth="md">
                  <AddBoard addBoardItem={addBoardItem}/>
                  <div className="BoardList">{boardItems}</div>
                </Container>
              </Route>
              <Route path="/Profile"></Route>
              <Route path="/">
                <Login/>
              </Route>
            </Switch>
          </div>
    </BrowserRouter>
    
    
  </div>;
}

export default App;
