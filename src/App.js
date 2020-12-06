import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default function List() {

  const [Value, change_func] = useState();
  const [current_item, item_func] = useState([]);
  function get_item(event) {
      change_func(event.target.value);
  }
  function add_item() {
    if (Value == undefined || Value== "") {
      alert("item add kr shala")
    } else {
      item_func((val) => {
          return [...val, todo]
      })
      console.log(current_item);
      change_func("");
    }
  }
  const todo = {
    Value, id: Math.random()
  }
  function delete_item(i) {
    var result = current_item.filter(e => e.id != i);
    item_func(result);
  }

  return (
    <>
    <section className="container">
        <div className="list_app">
          <h1>to do list</h1>
        <div className="app_body">
            <input onChange={get_item} type="text" value={Value} />
            <button onClick={add_item}>add</button>
          </div>

          <div className="all_list">
            <ol>
            {
              current_item.map((items) => {
                return <li>{items.Value} <span><i onClick={() => delete_item(items.id)} class="fa fa-trash" aria-hidden="true"></i></span></li>
              })
            }
            </ol>
          </div>
        </div>
          
    </section>
      
    </>
  )
}
