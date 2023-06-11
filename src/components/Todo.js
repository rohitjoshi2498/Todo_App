import React, { useState } from "react";
import { set_todo, get_todo, users } from "../users";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Todo.css";
const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [subtask, setsubtask] = useState("");
  const [onedit, setonedit] = useState(false);
  const [edittask, setedittask] = useState("");
  const [edit_subtask, setedit_subtask] = useState("");
  const [edit_id, setedit_id] = useState("");
  const [alert_message, setalert_message] = useState(false);
  const [current_todo, Setcurrent_todo] = useState(get_todo());

  const edit_todo = () => {
    if (edittask == "") {
      setalert_message(true);
      return;
    }
    var loop_array = current_todo;
    for (var i = 0; i < loop_array.length; i++) {
      if (loop_array[i]["id"] == edit_id) {
        loop_array[i]["title"] = edittask;
        loop_array[i]["subTasks"] = edit_subtask;
      }
    }
    Setcurrent_todo(loop_array);
    setonedit(false);
    if (current_todo.length > 0) {
      setalert_message(false);
    }
    setedit_id("");
    setedittask("");
    setedit_subtask("");
  };

  const cancel_changes = () => {
    setonedit(false);
    setedit_id("");
    setedittask("");
    setedit_subtask("");
  };

  const edit_task = (e) => {
    setonedit(true);
    setedit_id(e.target.id);
    const foundItem = current_todo.find((item) => item.id == e.target.id);
    if (foundItem) {
      setedittask(foundItem.title);
      setedit_subtask(foundItem.subTasks);
    }
  };
  const delete_task = (e) => {
    var filtered_array = current_todo.filter(
      (item) => item["id"] != e.target.id
    );
    Setcurrent_todo(filtered_array);
    set_todo(filtered_array);
    setonedit(false);
  };
  const handleAddTodo = () => {
    // Validation if the todo input is not empty
    if (!todo.trim()) {
      setalert_message(true);
      return;
    }
    var newTodo = {
      id: Date.now(),
      title: todo,
      subTasks: subtask,
    };
    var new_list = current_todo;
    new_list.unshift(newTodo);
    set_todo(new_list);
    Setcurrent_todo(new_list);
    if (current_todo.length > 0) {
      setalert_message(false);
    }
    setTodo("");
    setsubtask("");
  };

  return (
    <div style={{ display: "contents" }}>
      <Card
        style={{
          width: "50%",
          marginLeft: "25%",
          height: "100%",
          textAlign: "center",
          boxShadow:
            "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
        }}
      >
        {!onedit && <h1 className="text-center mb-4">Add New Task</h1>}
        {onedit && <h1 style={{ marginTop: "2%" }}>Edit Todo</h1>}
        {alert_message && (
          <p style={{ marginRight: "27%", color: "red", fontSize: "15px" }}>
            *Please enter the task
          </p>
        )}
        {onedit && (
          <input
            style={{ marginBottom: "4%", width: "50%" }}
            type="text"
            onChange={(e) => setedittask(e.target.value)}
            value={edittask}
            placeholder="Enter a new todo"
          />
        )}
        {onedit && (
          <input
            style={{ marginBottom: "4%", width: "50%" }}
            type="text"
            value={edit_subtask}
            onChange={(e) => setedit_subtask(e.target.value)}
            placeholder="Enter a new sub task todo"
          />
        )}
        <br></br>
        {onedit && (
          <Button
            className="cancelbtn"
            style={{ height: "30px", width: "20%", marginBottom: "2%" }}
            onClick={(e) => cancel_changes()}
          >
            Cancel
          </Button>
        )}
        {onedit && (
          <Button
            className="edittodobtn"
            style={{ height: "30px", width: "20%", marginBottom: "2%" }}
            onClick={(e) => edit_todo()}
          >
            Save
          </Button>
        )}

        {!onedit && (
          <input
            style={{ marginBottom: "2%", width: "50%" }}
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a new task"
          />
        )}
        {!onedit && (
          <input
            style={{ marginBottom: "4%", width: "50%" }}
            type="text"
            value={subtask}
            onChange={(e) => setsubtask(e.target.value)}
            placeholder="Enter a new sub task"
          />
        )}
        <br></br>
        {!onedit && (
          <Button
            className="addtodobtn"
            style={{ height: "30px", width: "20%", marginBottom: "2%" }}
            variant="success"
            onClick={handleAddTodo}
          >
            <span style={{ fontSize: "20px" }}>+ </span>
            Add Task
          </Button>
        )}
        {current_todo.length > 0 && !onedit && (
          <table cellSpacing="0">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Subtask</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {current_todo.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.subTasks.length > 0 ? item.subTasks : "-"}</td>
                  <td>
                    <button
                      className="deletebtn"
                      onClick={(e) => delete_task(e)}
                      id={item.id}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="editbtn"
                      onClick={(e) => edit_task(e)}
                      id={item.id}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
};

export default TodoForm;
