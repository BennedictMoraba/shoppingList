import React from 'react';
import './style.css';

const App = () => {
  const [addName, setName] = React.useState({
    itemName: '',
    itemDescription: '',
    itemQuantity: ''
  });

  const [listName, setListName] = React.useState([]);
  const [listKey,setKey] = React.useState([10]);


  function onSubmitHandler(e) {
    e.preventDefault();

    const addInfo = {
      id: new Date().getTime(),
      itemName: addName.itemName,
      itemDesc: addName.itemDescription,
      itemQuantity: addName.itemQuantity,
      complete: false
    };

    setListName([...listName].concat(addInfo));
    setName("")
    setKey(listKey+1)
  }


  function onDelete(id) {
    let updatedList = [...listName].filter(addName => addName.id !== id);
    setListName(updatedList);
  }

  function onComplete(id) {
    let updatedList = [...listName].map(addName => {
      if (addName.id === id) {
        addName.complete = !addName.complete;
      }
      return addName;
    });
    setListName(updatedList);
  }

  return (
    <div class="container">
      <div class="container" id="form-id">
        <h1>
          Add New Item
          <hr id="list-line" />
        </h1>
        <div class="container">
          <form class="form-group" onSubmit={onSubmitHandler} key={listKey}>
            <p class="field-wrapper required-field">
              <label>
                <b>Name</b>
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter name"
                value={addName.itemName}
                class="form-control"
                onChange={e =>
                  setName({ ...addName, itemName: e.target.value })
                }
                required
              />
            </p>

            <p class="field-wrapper">
              <label>
                <b>Description</b>
              </label>
              <br />
              <textarea
                cols="50"
                rows="5"
                placeholder="Enter Description"
                value={addName.itemDescription}
                class="form-control"
                onChange={e =>
                  setName({ ...addName, itemDescription: e.target.value })
                }
              />
            </p>

            <p class="field-wrapper required-field">
              {' '}
              <label>
                <b>Quantity</b>
              </label>
              <br />
              <input
                type="number"
                placeholder="0"
                class="form-control"
                id="quantity-field"
                value={addName.itemQuantity}
                onChange={e =>
                  setName({ ...addName, itemQuantity: e.target.value })
                }
                required
              />
            </p>
            <br />
            <hr id="btn-line" />
            <div id="form-btn">
              <button id="add">Add to List</button>
              <button id="cancel" onClick = {}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <div class="container" id="info">
        <h1>
          Shopping List
          <hr id="info-line" />
        </h1>

        {listName.map(item => (
          <div class="list-style" key={item.id}>
            {item.id === null ? (
              <p>There are no item</p>
            ) : (
              <div id="info-display">
                <div>
                  <h5>Item Name</h5>
                  {item.itemName}
                </div>

                <div>
                  <h5>Item Description</h5>
                  {item.itemDesc}
                </div>

                <div>
                  <h5>Item Quantity</h5>
                  {item.itemQuantity}
                </div>
                <hr id="info-line" />
                <div id="btn">
                  <button
                    onClick={() => onDelete(item.id)}
                    id="del"
                    class="info-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
