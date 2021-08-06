var App = (props) => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList list={props.list} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.list.map(item =>
      <GroceryListItem item={item}/>
      )}
  </ul>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }

}

ReactDOM.render(<App list={['Apples', 'Bananas', 'Cherries']} />, document.getElementById("app"));



// var App = () => (

//    <div>Some cliche salutation</div>

//     <div>
//       <h2>Grocery List</h2>
//       <GroceryList items={['Cucumber', 'Kale', 'Salad']} />
//     </div>

// );

// ReactDOM.render(<App />, document.getElementById("test"));

// "use strict";

// var App = function App() {
//   return /*#__PURE__*/React.createElement("div", null, "Some cliche salutation");
// };


//   ReactDOM.render(<App />, document.getElementById("test"));

//   ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
//   );

//   var Apples = () => (
//     <li>
//       <Apples></Apples>
//     </li>
//   )

//   var Bananas = () => (
//     <li>
//       <Bananas />
//     </li>
//   );
// var onListItemClick = (event) => {
//   console.log('I got clicked');
// };


// GroceryListItem = (props) => (
//   <ul>
//     <li onClick={onListItemClick}>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//   </ul>
// );

// var Cucumber = () => (
//   <li>Cucumber</li>
// );

// var Kale = () => (
//   <li>Kale</li>
// );

// var GroceryList = () => (

//   // <ul>
//   //   <Apples></Apples>
//   //   <Bananas />
//   // </ul>
//   <ul>
//       {/* <li>Apples</li>
//       <li>Bananas</li> */}
//       {/* <Cucumber></Cucumber>
//       <Kale></Kale> */}
//       <GroceryListItem todos={['Cucumber', 'Kale', 'Salad']}/>
//     </ul>
//   );



  // ReactDOM.render(<GroceryList />, document.getElementById("app"));

// // );


