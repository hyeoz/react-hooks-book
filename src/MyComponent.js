// // class component
// import React, { Component } from "react";

// class MyComponent extends Component {
//   id = 1;
//   setId = (n) => {
//     this.id = n;
//   };
//   printId = () => {
//     console.log(this.id);
//   };
//   render() {
//     return <div>MyComponent</div>;
//   }
// }

// export default MyComponent;

// function component
import React, { useRef } from "react";

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };

  return <div>RefSample</div>;
};

export default RefSample;
