import React from "react";
import { BinarySearchTree } from "./utils/BinarySearchTree";

const bst = new BinarySearchTree();

const Nodes = ({ children }) => {
  return (
    <div className="tf-tree tf-custom">
      <ul>
        <li>
          <span className="tf-nc">{children}</span>
          <ul>
            <li>
              <span className="tf-nc">{children}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const Tree = (props) => {
  const { data, left, right } = props;

  function renderTree(data) {
    return Object.entries(data).map(function ([key, value]) {
      if (key === "left" && typeof value === "object") {
        if (value !== null) {
          return (
            <li>
              <Tree key={left + 1} data={value} left={left + 10} right={0} />
            </li>
          );
        } else if (value === null) {
          return null;
        }
      } else if (key === "right" && typeof value === "object") {
        if (value !== null) {
          return (
            <li>
              <Tree key={right + 1} data={value} right={right + 1} left={0} />
            </li>
          );
        } else if (value === null) {
          return null;
        }
      }
    });
  }

  return data ? (
    <>
      <span className="tf-nc">{data.data}</span>
      <ul>{renderTree(data)}</ul>
    </>
  ) : (
    "fucked"
  );
};

function App() {
  const [number, setNumber] = React.useState(50);
  const [root, setRoot] = React.useState(null);

  function changeNumber(e) {
    setNumber(Number(e.target.value));
  }

  function addNumber(e) {
    e.preventDefault();
    bst.add(number);
    setRoot((prev) => ({ ...prev, ...bst.root }));
  }

  return (
    <div className="container">
      <h1>Binary Search Tree Visualization</h1>
      <form onSubmit={addNumber}>
        <label htmlFor="number" className="input-label">
          Input Number
          <input
            id="number"
            name="number"
            type="number"
            value={number}
            onChange={changeNumber}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <div className="tf-tree tf-custom">
        <ul>
          <li>
            <Tree data={root} parent={bst.root} left={10} right={10} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
