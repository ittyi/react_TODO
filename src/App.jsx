import React, { useState } from "react";
import "./style.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "iii"]);
  const [completeTodos, setCompleteTodos] = useState(["uuu"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div>
        <div class="input_area">
          <input
            id="add_text"
            placeholder="TODOを入力"
            value={todoText}
            onChange={onChangeTodoText}
          />
          <button id="add_button" onClick={onClickAdd}>
            追加
          </button>
        </div>
        <div class="imcomplete_area">
          <p class="title">未完了のTODO</p>
          <ul id="working_todo">
            {incompleteTodos.map((todo, index) => {
              return (
                <li key={todo}>
                  <div class="list_row">
                    <p class="text_content">{todo}</p>
                    <button onClick={() => onClickComplete(index)}>完了</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="complate_area">
          <p>完了のTODO</p>
          <ul id="complate_todo">
            {completeTodos.map((todo, index) => {
              return (
                <li key={todo}>
                  <div class="list_row">
                    <p class="text_content">{todo}</p>
                    <button onClick={() => onClickBack(index)}>戻る</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
