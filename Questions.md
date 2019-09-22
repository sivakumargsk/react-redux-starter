## JavaScript, React and Redux

----
#### Question :  Difference between `var`, `let` and `const`

**Answer:** All three keyword are used for declaring the variable. But `let` and `const` supports block scope where as `var` doesn't support block scope.


```js
// Example for var
if (true) {
    var x = 10;
}
console.log(x) 
// output => 10

// Example for let or const
if (true) {
    let x = 10;
}
console.log(x);
// output: Error x is not defined
// Same Error for const also
```

> Note: The difference between `let` and `const` are `let` accepts re-assignment where as `const` doesn't accepts.

```js
let x = 30;
x = 40;
// This is ok with `let`

const y = 30;
y = 40; 
// we will error like `Assignment to constant variable` with const 
```
---
#### Question: Explain the difference between `==` and `===` ?
**Answer:** `==` checks only for equality in value whereas `===` is a stricter equality test and returns false if either the value or the type of the two variables are different.
```js
> 2 == '2'
// Output: true, Here javascript does some type conversion.

> 2 === '2'
// Output: false.
```
---
### Question: What are new feature in ES6 ?

The person must have to know the below features in ES6:
- [let + const](https://github.com/lukehoban/es6features/blob/master/README.md#let--const)
- [template strings](https://github.com/lukehoban/es6features/blob/master/README.md#template-strings)
- [enhanced object literals](https://github.com/lukehoban/es6features/blob/master/README.md#enhanced-object-literals)
- [destructuring](https://github.com/lukehoban/es6features/blob/master/README.md#destructuring)
- [default + rest + spread](https://github.com/lukehoban/es6features/blob/master/README.md#default--rest--spread)
- [arrows](https://github.com/lukehoban/es6features/blob/master/README.md#arrows)
- [classes](https://github.com/lukehoban/es6features/blob/master/README.md#classes)

---
### Question: What are higher Order function in JavaScript ?
**Answer:**
Here are the some function which are commonly used in daily work. 
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
```js
// Add 2 to every element in an array
const arr = [1, 2, 3, 5]
const res = arr.map(i => i + 2);
console.log(res);
// => [3, 4, 5, 7]
```

- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
```js
// filter only even number in an array
const arr = [1, 2, 3, 4, 5, 6]
const res = arr.filter(i => i % 2 === 0);
console.log(res);
// => [2, 4, 6]
```
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
```js
// Sum all number in an array
const arr = [1, 2, 3]
const res = arr.reduce((a, v) => a + v);
console.log(res);
// => 6
```
- [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

```js
// Find record in an array where id === 25 
const arr = [
    {id: 1, name: 'siva1'},
    {id: 25, name: 'siva25'},
    {id: 302, name: 'siva302'}
]1
const res = arr.find(item => item.id === 25);
console.log(res);
// => {id: 25, name: 'siva25'}
```

---
### Question: What is React?
* React is a JavaScript library for building User Interfaces  
* It follows the component based approach which helps in building reusable UI components.
---
### Question: What are the features of React? 
> Major features of React are listed below:

* It uses the virtual DOM instead of the real DOM.
* It follows uni-directional data flow or data binding.
* It uses server-side rendering.

---
#### Question: Explain the lifecycle methods of React components in detail.

**Answer:** In react component life cycle is divided into 3 phases

1. Mounting
2. Update
3. UnMount

### Mounting Methods
* **constructor()** - Executes first when component is called. 
* **componentWillMount()** – Executed just before rendering takes place.
* **render()** - Renders the JSX element in to the DOM.
* **componentDidMount()** – Executed after the first render.

### Update 
* **componentWillReceiveProps()** – Invoked as soon as the props are received from the parent class and before another render is called.
* **shouldComponentUpdate()** – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
* **componentWillUpdate()** – Called just before rendering takes place in the DOM.
* **render()** - Renders the JSX element in to the DOM.
* **componentDidUpdate()** – Called immediately after rendering takes place.

### UnMount

* **componentWillUnmount()** – Called before the component is unmounted from the DOM. It is used to clear up the memory spaces
---
#### Question: What is Prasentational(or State-less) and Container (or State-full) Components in React ?
**Answer:**

**Prasentational Component**: A component which doesn't have state is called Prasentational component.
```js
// Using ES6

const Wish = (props) => {
    return (
        <div>
            <span>Hello {props.name}</spnan>
        <div>
    )
}

ReactDOM.render(
    <Wish name="Siva"/>, document.getElementById('root')
);

```

**Container Component**: A component which have state is called Container component.

```js
// Using ES6 Class

class ClickCount extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount() {
        this.setState(old => { count: old.count + 1 });
    }

    render() {
        return (
            <div>
                <span> Count : {this.state.count}</span>
                <button onClick={this.incrementCount}>
                 Click Here
                </button>
            </div>

        )
    }
}

ReactDOM.render(
    <ClickCount />, document.getElementById('root')
);

```
---
#### Question: Difference between `state` and `props` in React ?
**Answer:**

Props

* Props are short for Properties. The simple rule of thumb is props should not be changed. In the programming world we call it “Immutable” or in simple english “Unchangeable”.

> Props are Unchangeable — Immutable

* Components receive props from their parent. These props should not be modified inside the component.


State

* States are the heart of React components. State works differently when compared to props. They are mutable unlike the props and create dynamic and interactive components.

> State can Change — Mutable 

> The only way to mutate the `this.state` in React is using `this.setState()`
---

#### Question: What is Redux?
**Answer:** Redux is state management library for JavaScript.

#### Question: What are the three principles that Redux follows?
* **Single source of truth:** The state of the entire application is stored in an object/ state tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.
* **State is read-only:** The only way to change the state is to trigger an action. An action is a plain JS object describing the change. Just like state is the minimal representation of data, the action is the minimal representation of the change to that data. 
* **Changes are made with pure functions:** In order to specify how the state tree is transformed by actions, you need pure functions. Pure functions are those whose return value depends solely on the values of their arguments.

#### Question: Explain Redux Flow ?

**Answer:**

1. We can create store by using reducer
`const store = createStore(reducer1, reducer2, ...);`

2. We need to `dispatch` an `action` in order to mutate the store
```js
<button 
    onClick={() => store.dispatch({
        type: 'UPDATE_COUNT', payload: 10 
    })}>
    Count
</button>
```

3. `Reducer` will take that `action` and generate new state.

4. Redux will take that new state from `reducer` and replace the store and tell React to update the components depends state change


![Redux Flow](https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966)
---
#### Question: Explain how is defined in Redux ?
**Answer:**
```js
function addTodo(text) {
    return { type: 'ADD_TODO', payload: 'Learning Redux' };
}
```
