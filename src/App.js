import React from "react";
import { BinarySearchTree } from "./utils/BinarySearchTree";

const bst = new BinarySearchTree();

function Tree({ data, number, left, right }) {
  console.log({ left, right });
  if (data) {
    return Object.entries(data).map(([key, value]) => {
      if (key === "left" && typeof value === "object") {
        if (value !== null) {
          return (
            <div
              className="leftist"
              key={left + 1}
              style={{ marginRight: `${left}px` }}
            >
              <Tree data={value} left={left + 10} right={0} />
            </div>
          );
        } else if (value === null) {
          console.log("null");
        }
      } else if (key === "right" && typeof value === "object") {
        if (value !== null) {
          return (
            <div
              className="rightist"
              key={right + 10}
              style={{ marginLeft: `${right}px` }}
            >
              <Tree data={value} right={right + 1} left={0} />
            </div>
          );
        } else if (value === null) {
          console.log("null");
        }
      }
      return <div className="root">{value}</div>;
      // if (number < value) {
      //   if (key === "left" && value === null) {
      //     console.log("isi kiri");
      //   }
      // } else if (number > value) {
      //   if (key === "kanan" && value === null) {
      //     console.log("isi kanan");
      //   }
      // } else {
      //   console.log(value);
      // }
      // debugger;
      // if (typeof data[key] === "object" && data[key] !== null) {
      //   if (key === "left" && data[key] !== null) {
      //     data = data[key];
      //     return (
      //       <div key={left + 1}>
      //         <Tree data={data} left={left + 1} />
      //       </div>
      //     );
      //   } else if (key === "right" && data[key] !== null) {
      //     data = data[key];
      //     return (
      //       <div key={left + 1}>
      //         <Tree data={data} right={right + 1} />
      //       </div>
      //     );
      //   } else {
      //     return data[key];
      //   }
      // }
      // return data[key];
    });
  }
  return (
    <div>{data ? <div className="fucker">{data.data}</div> : "fucke"}</div>
  );
}

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
      <button
        type="button"
        onClick={() => {
          bst.add(25);
          bst.add(20);
          bst.add(10);
          bst.add(30);
          bst.add(110);
        }}
      >
        Debug
      </button>
      <h1>Binary Search Tree Visualization</h1>
      <div className="tree">
        <Tree data={root} number={number} left={10} right={10} />
      </div>
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
            <span className="tf-nc">1</span>
            <ul>
              <li>
                <span className="tf-nc">2</span>
                <ul>
                  <li>
                    <span className="tf-nc">4</span>
                  </li>
                  <li>
                    <span className="tf-nc">5</span>
                    <ul>
                      <li>
                        <span className="tf-nc">9</span>
                      </li>
                      <li>
                        <span className="tf-nc">10</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="tf-nc">6</span>
                  </li>
                </ul>
              </li>
              <li>
                <span className="tf-nc">3</span>
                <ul>
                  <li>
                    <span className="tf-nc">7</span>
                  </li>
                  <li>
                    <span className="tf-nc">8</span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
