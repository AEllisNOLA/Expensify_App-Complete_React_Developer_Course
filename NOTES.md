# NOTES

## 3.12 - Conditional Rendering
- You can use _if statements_, _ternary operators_, or _logical && operator_ for conditional rendering

- _if statements_ do not work within JavaScript expressions. The _if statement_ needs to be placed in a function and that function needs to be called.

- When a JavaScript expression resolves to _undefined_ in JSX, nothing shows up. This allows for conditional appearance of segments of JSX.

- In JavaScript expressions, _booleans_ are ignored. For the _logical && operator_, if first value is truthy it is skipped and the second value is used. If first value is false, the false value is returned, ignored and will not show.

- The _ternary operator_'s best use case is for 2 options are available. The _logical && method_ is best for only wanting to show one thing or nothing at all. Having _if statements_ broken into their own functions work but are long and should be used when there are 3 possible outcomes.

- Examples:

```
var user = {
    name: 'Anthony',
    age: 15,
    location: 'Baton Rouge, LA'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

var userInfo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
```

## 3.13 - ES6 Aside: const and let
- _var_ pitfalls include: 
    
    - the ability to redefine a variable (not just reassign), opening the possibility of recrating a variable already being used and overriding the prior version. With _const/let_, redefining throws an error.
    
    - not _block scope_. _var_ variables can leak out into the _global space_. _const/let_ prevent this.

## 3.14 - Arrow Functions
- Arrow functions are always anonymous. There is no way to define a named arrow functions like ES5 functions. If you want to create the function and use it later, it must be assigned to a variable.

```
const squareArrow = (x) =>
    return x * x
}
```

- _Expression Syntax_ allows for more succinct functions in certain instances, such as when all the function does is return an expression. It is implicitly returned. 

```
const squareArrow = (x) => x * x
```

## 3.15 - Arrow Functions (Part 2)

- Arguments object is no longer bound with arrow functions. Accessing arguments does not work. In the past, you could console.log(arguments) and receive an object with all objects passed in the function call, regardless if there was room for them in the initial function construction. If you wind up needing to use the arguments object, stick with ES5.

```
const addArrowFunction = (a, b) => {
//  console.log(arguments)  - ReferenceError - arguments is not defined
    return a + b
}
```

- Arguments object is no longer bound with arrow functions. Accessing arguments does not work. 

In the past, you could console.log(arguments) and receive an object with all objects passed in the function call, regardless if there was room for them in the initial function construction. If you wind up needing to use the arguments object, stick with ES5.

```
const addArrowFunction = (a, b) => {
    //  console.log(arguments)  - ReferenceError - arguments is not defined
    return a + b
}
```

- _this_ keyword is no longer bound due to _arrow functions_ being anonymous, which can be good or bad. Arrow functions use the _this_ value of the context in which they were created. They look to the parent.

```
const user = {
    name: 'Anthony',
    cities: ['New Orleans', 'Laguna Beach'],
    printPlacesLived: function () {
        this.cities.forEach((city) => {
            console.log(`${this.name} has lived in ${city}.`)
            // this.name above works because it looks to parent context
        })
    }
}
```

- For methods, the _this_ keyword not binding is an issue because the parent context is typically the global scope. The _this_ value of its parent return undefined. So you either have to use es5 funcitons or use the special ES6 method syntax.

```
const user = {
    name: 'Anthony',
    cities: ['New Orleans', 'Laguna Beach'],
//  es5 version    

//  printPlacesLived: function () {

// or for ES6 version, omit ': function'
    printPlacesLived() {
        console.log(this.name)
        console.log(this.cities)
        this.cities.forEach((city) => {
            console.log(`${this.name} has lived in ${city}.`)
        })
    }
}
*/
```


## 3.16 - Events and Attributes
- Certain attributes are reserved in JavaScript but in common use in HTML. As a result, there are slight differences, such as having to use _className_ instead of _class_ as the attribute. A full list can be found in React docs under 'DOM Elements'.

- Event Handlers can be done by referring to an outside function or inline. It tends to be cleaner to refer to an outside function, though.

```
const addOne = () => {
    console.log('addOne() fired')
}

<button onClick={addOne}>+1</button>
<button onClick={() => { console.log('subtractOne fired') }}>-1</button>
```

## 3.17 - Manual Data Binding
- JSX does not have built-in data binding. All the data used inside JSX happens at the time the code runs, so re-rending is needed to update info on the screen.

## 3.19 - Arrays in JSX
- JSX supports Arrays, strings and numbers. It does not work with Objects. It ignores booleans, null and undefined.

- You can also have arrays of JSX

- When rendering an array, each item needs a unique key property for React to be able to grab onto for re-rendering purposes.

## 4.24 - ES6 Classes
- Classes do not always need constructor functions, but if they will be accepting any arguments they do.

- Inside of class methods, _this_ refers to the class instance

- In older code, you would default a value within the constructor using the _OR_ logical operator. 

```
class Person {
    constructor(name) {
        this.name = name || 'Jane Doe'
    }
}
```

However, with ES6 you can just provide the default when passing the argument

```
class Person {
    constructor(name = 'Jane Doe') {
        this.name = name
    }
}
```

## 4.25 - ES6 Classes Part 2
- A subclass can accept all of the features of its parent class, but add new ones or overwrite already-existing ones.

- The super() function is responsible for calling the parent constructor function in subclasses. It belongs in the subclass constructor function before any additional arguments are added beyond what the parent class already had.

```
class Student extends Person {
    constructor(name, age, major = 'Undeclared') {
        super(name, age)
        this.major = major
    }
}
```

 The items in the super() function do the job of this.name = name and this.age = age, since those were already defined in the parent class.

 super() may also be used to access parent methods.

 ```
 getDescription() {
        let description = super.getDescription()
        
        if (this.hasMajor()) {
            description += ` and has a major of ${this.major}`
        }
        
        return description
    }
 ```

## 4.26 - React Components
 - A component is just an ES6 Class. React requires a component start with a capital letter (whereas in ES6 a class with a capital letter is a convention but not required.) A React component starting with a lower-case letter would not break the program, but the component would not show up because the capital letter is how React differentiates an HTML element from a React Component. A component can be extended from _React.Component_ and requires a render method.

 ```
 class Header extends React.Component {
    render() {
        return <p>This is a Header!</p>
    }
}
 ```

 - In order to use the components, you simply add the Component inside of JSX

 ```
 const jsx = (
    <div>
        <Header />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))
 ```

## 4.27 - Nesting Components

- Rather than rendering a variable inside of ReactDOM.render(), it is better to render the component for the entire app. Create a new component with many subcomponents that create the skeleton of the app, then render that to the screen.

```
class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
```                                                                                                                                                                                                  

## 4.28 - Component Props
- Values of a component can be customized for the instance by using props. A prop can be named basically anything. They are accessed through _this.props_.

Being rendered in the overall component is:

```
class IndecisionApp extends React.Component {
    render() {
        const title = 'Decisioner!'
        const subtitle = 'For When Decisions are Hard!'
        const options = ['Option 1', 'Option 2', 'Option 3']

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
            </div>
        )
    }
}
```

and the Header component would look like:

```
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}
```

- props are a form of one-way communication. The overall app can initiate props for a Component. Later in that component, props can be created for its children components. Props move down.

## 4.29 - Events and Methods

- When working with forms, onSubmit must be used on the form tag. To retreive the value, use e.target.elements._____.value, where the black is equal to the name attribute of the element you are trying to grab data from. And remember to use e.preventDefault() to prevent automatic page reload with the data in the URL. Aldo, reset value to '' after submit.

## 4.30 - Method Binding
- In certain situations, you will have to set the _this_ binding because the context that the function ran in is different. _bind_ is a method on a function that returns the function. As an argument, you can attach it to the context you want it to be called in.

```
const obj = {
    name: 'Anthony',
    getName() {
        return this.name
    }
}

console.log(obj.getName())  // 'Anthony. Works as expected

// const getName = obj.getName  // getName references the method, but the context is now different
// console.log(getName())  // uncaught typeerror, property 'name' undefined.

const getName = obj.getName.bind(obj)  // use getName and set the context to that of obj
console.log(getName()) // 'Anthony'! IT WORKS!
```

- In event handlers, you lose the _this_ binding. They do not to lose the context in the render() or constructor() functions because it is not an event callback. Since _this_ works there, you can bind the event handler manually to _this_.

```
<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
```

However, while you can simply bind to _this_ in the event handler, that binding will take place upon every re-render, which gets expensive.

- The better way is to override the _constructor function_ for _React.Component_. In order to override, you must add the constructor function with 'props' as an argument and call super(props). Then set the method equal to itself with _.bind(this)_ added.

```
class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
}
```

## 4.31 - What is Component State
- State allows components to manage data, such as key-value pairs. When the data changes, the component will automatically re-render.

- Step 1: Create default set of values (as an object), such as 0 or an empty array. 

- Step 2: Component goes through its inital render using the default values.

- Step 3: The component's state changes based on an event such as a network request or user event.

- Step 4: The app then re-renders, using the new state values and bringing the UI to match the state.

- The last step is to start again at step 3.

## 4.33 - Adding State to Counter App
- NEVER change state directly. The component will not update

```
// WRONG!!!
this.state.count = 1  
```

```
/// RIGHT!!!
 this.setState(() => {
            return {
                count: 1
            }
        })
```

- In order to change the state based off its current value, use prevState as an argument.

```
this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
```

- When using this.setState(), you only need to provide the items you wish to change. If your default data is 10 key-value pairs and you only want to alter one of them, just feed it the one you want to change. You only override specific values but non-specified values remain the same.

## 4.34 - Alternative setState Syntax
- The above syntax is called the 'Updater Function'

- An older approach to setState allows for passing in an object directly in rather than a function.

```
this.setState({
    count: 0
})
```

- The issue with the older version is that this.setState() is asynchronous. Multiple this.setState()s can lead to unexpected behavior due to this async aspect. You wind up accessing old, outdated data before it can update.

- The updater function never accesses this.setState, but prevState, so it never runs into that issue.

## 4.36 - Indecision State - Part I
- When children need to manipulate the state that is in the parent. Since props only move downward, you have to pass functions in as a prop. The child then calls that function as a prop. This is how you reverse data flow

- New prop values passed down from the parent trigger a re-render of the child component. Props are read-only within their own component, but the parent can pass in new prop values.

## 4.37 - Indecision State - Part II

- In order to pass data upstream, you should create a function in the parent that accepts an argument. Pass that function down as a prop. When it is called in child component, you can pass the child component's data in, bringing it up to the parent. 

- When doing additional steps, it is okay to pass the prop from the parent into a method on the component rather than in the JSX on the render() method.

## 5.40 - Stateless Functional Components
- As a rule of thumb, stateless functional components take props via props.___, whereas class components take them as this.props.___

- Stateless, functional components are faster than class-based components since they don't have any overhead. Use them whenever a component is purely presentational and have no state. They are also easier to test.

## 5.41 - Default Prop Values
- For Stateless components, adding default values is simple. Just call defaultProps on the component after it is created and alter it in object syntax.

```
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Decisioner!',
}
```

- For class components, you can set the state to the props value. After the component, call default Props using the object syntax and alter it to the default value. Now, if the user wants to add props to set their own default value, they can.
```
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            options: props.options
        }
    }

    ...
    ...
    ...
}

IndecisionApp.defaultProps = {
    options: []
}

    ...
    ...

ReactDOM.render(<IndecisionApp options={['a', 'b', 'c', 'd']}/>, document.getElementById('app'))
```

## 5.43 - Removing Individual Options
- this.setState() can be cleaned up a bit using an arrow function's implicit return syntax. However, when you are trying to implicitely return an object, the curly-braces of an object get confused as the function body, so that object must be wrapped in parenthesis.

```
handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
```

... becomes ...

```
handleDeleteOptions() {
    this.setState(() => ({
        options: []
    }))       
}
```

... and then, since it is a one-liner, it can be even shorter ...

```
 handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
}
```

- When you want to pass in an argument rather than the default event object, you can pass in an in-line arrow function with an event argument rather than referencing the method directly. Then, call the method you are trying to call and pass in the information you are trying to move up the chain.

```
 <button onClick={((e) => props.handleDeleteOption(props.optionText)) }>Remove</button>
```

## 5.44 - Lifecycle Methods
- Lifecycle Methods go on class components and fire at a certain time during a component's life. There are several LifeCycle Methods, but here are 3: 

    - componentDidMount which starts on load

    - componentDidUpdate, which fires after state or prop values change. These have access to this.state/this.props for the updated info, as well as prevProp or prevState as arguments.

    - componentWillUnmount, which fires just before a component goes away.

## 6.49 - Avoiding Global Modules
- Webpack is great because: 
    - 1) All dependencies are found in the package.json area, so it is easy to install all dependencies for collaborators.
    - 2) You can specify distinct versions.
    - 3) Scripts allow you to define run complicated scripts in a simpler manner once the script is defined.

- There is nothing wrong with global modules inherently, but doing it this way is better.

## 6.51 - ES6 Import/Exports
- Each file can export one item by default and has unlimited named exports

- To export, name the functions you'd like to export in curly braces at the bottom of the file.

```
export { isAdult, canDrink }
```

- To import, name the functions you want to grab in curly braces at the top of the file:

```
import { isAdult, canDrink } from './person'
```

## 6.52 - Default Exports
- To export, simply write 'as default' by the function you want to use as the default. Remember, only one may be default: 

```
export { square, add, subtract as default }
```

Alternatively, you can put 'export' in front of the function for an in-line export.

```
export const add = (a, b) => a + b
```

- To import, keep the default function out of curly braces:

```
import subtract, { square, add } from './utils.js'
```

- Default exports are special because they do not need to have the same name as the file they are importing from. An add() function could be called a sum() function instead as long as you specify it up top.

- You may also in-line an export default.

```
const subtract = (a, b) => a - b

export default subtract
```

or one-line it by removing the const functionName

```
export default (a, b) => a - b
```

## 6.53- Importing NPM Modules
- You can import NPM modules much like you do your own files/functions. Instructions should be in the documentation for the third-party library you are using. Instead of importing from a certain path, you import from the name of the library.

```
import validator from 'validator'
```
## 6.55 - One Component Per File
- It is conventional to put each component in its own file. This helps with reusability, scalability, maintainabilty, testing, etc.

## 6.56 - Source Maps with Webpack
- Source Maps make debugging way easier by showing you exactly where in your readable code the error was, rather than in the minified version that webpack spits out.

## 6.57 - Web Dev Server
- Switching out for using instead of live-server.

## 6.58 - ES6 Class Properties
- The new Prpoerty Syntax does away with the need to create constructor functions and bind event handlers.

```
class NewSyntax {
    name = 'Josh'
    getGreeting = () => {
        return `Hello, my name is ${this.name}`
    }
}
```

- For Class Properties syntax, the binding is not broken because arrow functions do not bind their own this value. They use whatever is in scope and for arrow functions, that is the Class instance itself.

- Class Properties are great for seting default state values and setting up event handlers.

- For built-in React methods, continue using method syntax.

## 7.60 - Passing Children To Component
- Using props is one way to pass JSX to components. Such as:

```
const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.content}
            <p>Footer</p>
        </div>
    )
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
)

ReactDOM.render(<Layout content={template}/>, document.getElementById('app'))
```

- You may also set up a seperate opening/closing tag for what you are rendering and add stuff in the middle. Then pass in props.children where you want the content.

```
const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    )
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
)

ReactDOM.render((
    <Layout>
        <h1>Title</h1>
        <p>body</p>
    </Layout>
), document.getElementById('app'))
```

- Third Party Components use this technique often, so it is important to know it.

## 7.61 - Setting Up React Modal
- To turn something into a "True Boolean", use two !!s. This takes undefined vs. text and turns it into true or false.

## 7.62 - Refactoring Other Stateless Components
- Stateless Components can be refactored to use implicit return. So that the original version:

```
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}>What Should I Do?!?
            </button>
        </div>
    )
}
```

becomes

'''
const Action = (props) => (
    <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}>What Should I Do?!?
            </button>
        </div>
)
'''

## 9.77 - React-Router 101
- npm install react-router-dom for web apps and npm install react-router-native for phone apps.

- When using BrowserRouter, it expects zero or one child, so you must place multiple Routes inside of a div.

- Router may retrieve multiple matches, so both the home and edit page will show because home's path is "/" and edit's path is "/edit". To avoid this, add exact path to your base path.

```
const routes = (
    <BrowserRouter>
        <div>
            <Route path='/' component={ExpenseDashboardPage} exact={true} />
            <Route path='/create' component={AddExpensePage} />
            <Route path='/edit' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
        </div>
    </BrowserRouter>
);

```

- There may be an issue with webpack not handling client-side routing well. You can add historyApiFallback to the webpack.config.js file to fix this.

```
...,
devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true
    }
```

## 9.78 - Setting up a 404
- Switch Component moves through routes in order and stops when it finds a match. This makes it a great use case for 404 pages

## 9.81 - Query Strings and URL Parameters
- React Router adds some props to components. These come in handy later for redirects, searches, etc.

- React-Router allows for dynamic URLs. Say you want to edit an expense, that certain expense is going to have an ID, so the ID needs to be dynamic. The syntax for this is:

```
<Route path='/edit/:id' component={EditExpense} />
```
- Watch out for the differences between to='' and path=''. _to_ is for Link/NavLink, while _path_ is for Routes.

## 10.84 - Why Do We Need Something Like Redux?
- Redux is meant to make complex state easier to manage.

- Problem 1:

Simple applications can pass down props because every component is connected in a tree-like structure. The state lives at the top level of the app - the parent component. 

For more complicated apps, there is no one parent component to store state. There are multiple component trees, so there is no good place to store state. 

- Problem 2: 

Components in simple apps aren't _really_ reusable. Components cannot be taken from their connection to the parent component because they tend to be tied to specific props from the parent component.

For reusability, components should be able to interact with state without passing down props.

NOTE: There is nothing wrong with props. Just avoid passing props in long chains where certain components aren't using them, just passing them along.

- For Redux, all state is in something called the _store_. Each React component can interact with the store how it wants - change the data, fetch the data, etc.

## 10.85 - Setting Up Redux
- npm install redux.
- Then, at the top of the file:
```
import {createStore} from 'redux'
```
- createStore() requires a function with state passed in as an argument. At this time, you can also set its defaults.

```
const store = createStore((state = { count: 0 }) => {
    return state
})
```

## 10.86 - Dispatching Actions
- Actions are responsible for changing the Redux Store. An _action_ is an object that is sent to the store. The object describes what type of action you want to take. Use store.dispatch to send it.

```
store.dispatch({
    type: 'INCREMENT'
});
```

- store.dispatch() causes the store to run again.

- the Action object is passed in as a second argument to createStore.

```
const store = createStore((state = { count: 0 }, action) => {
    if (action.type = 'INCREMENT') {
        return {
            count: state.count + 1
        }
    }
    else {
        return state
    }
})
```
or, the _switch_ statement is preferred due to ease of use for multiple actions:

```
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
})
```
## 10.87 - Subscribing and Dynamic Actions
- Watching for changes to the store is necessary if components are to re-render. You can do this using:

```
store.subscribe(() => {
    ...
})
```

- To unsubscribe, 

```
const unsubscribe = store.subscribe(() => {
    ...
})
```

and then call unsubscribe.

- You can dispatch an action and pass data along with it. _type_ must be provided or it throw an error. But you can add extra properties to it. Inside of the switch statement, create a variable that matches the item passed in the dispatch. Use validation to check if it was provided, then change store using that variable.

```
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            };
        default:
            return state
    }
})
```

## 10.90 - Refactoring and Organizing
- Action Generators are functions that return Action Objects. They are an alternative to the regular store.dispatch() syntax because they help avoid typos/give better error messeges. Remember to default the payload to an empty object.

```
const incrementCount = (payload = {}) => ({ 
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
 })

 const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':    
            return {
                count: state.count + action.incrementBy
            };
        default:
            return state
    }
})
```
and call it.
```
store.dispatch(incrementCount({incrementBy: 5}))
```

## 10.91 - Reducers
- The function that we have been passing into the createStore() as an argument is actually a _reducer_. We were just lumping them together. More complicated apps will have several reducers, so you need to asign them to a variable and then pass that variable into createStore().

- import combineReducers when using multiple reducers.

- 1) Reducers are pure functions, meaning the output is only determined by the input. It does not use anything from outside of the function scope and it does not change anything outside of the function scope. Reducers only want to use the input (state and action) to return the new state value.

- 2) Do not change state or action. Just read off both the state and action and return an object that has the new state. 

## 10.97 - Sorting with Redux
- You can use sort() method, but for complex items like objects, you need to create a compare function as an argument.

## 11.98 - Connecting React and Redux
- Connected Components are React Components that are connected to the redux store. This allows components to fetch data off the redux store for rendering, and re-rendering when that data in the store changes. It also allows redux actions to be dispatched directly from React Components.


## 11.100 - Higher Order Component
- Higher Order Components is a pattern that React-Redux makes heavy use of.

- A HOC is a react component that renders another component. The parent is the HOC.

- HOCs allow you to 
    - Reuse code
    - Accomplish Render Hijacking
    - Manipulate Props
    - Abstract State

- Redux is going to give us a function like withAdminWarning. Components get passed inside as args. Then we can create new components as was done for AdminInfo using the function given.
```
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This information is private. Please do not share.</p>}
            
            <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

ReactDOM.render(<AdminInfo isAdmin={true} info='These are the secret details'/>, document.getElementById('app'))
```

## 11.101 - Connecting Store and Component with React-Redux
- npm install react-redux

- Provider component provides the store to all components that make up the application. No passing it around. If a component wants to access the store, it just does. <Provider> must have a prop of store connecting to your store. The app goes inside.

```
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
```

- Once provider is set up, we can use the second important part of React-Redux: the connect function.

```
import React from 'react'
import { connect } from 'react-redux'

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.length}
    </div>
)

const ConnectedExpenseList = connect((state) => {
    return {
        expenses: state.expenses
    }
})(ExpenseList)

export default ConnectedExpenseList
```

Making a seperate variable for connectedExpenseList is usually not done. A more succinct way to do it is to export defaultconnect(), as done below. Also, rather than passing the function in-line, it is better to throw it on its own variable, which is typically called mapStateToProps

```
import React from 'react'
import { connect } from 'react-redux'

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.length}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(ExpenseList)
```

## 11.103 - Controlled Inputs for Filters
- The connected component has a dispatch prop in addition to any others you provide. So you can call props.dispatch() and pass in an action to do something. This allows for writing to the store.

## 11.104 - Dropdown for Picking SortBy
- A _Controlled Input_ is an input where the value is controlled by JavaScript. They tend to use a value and an event handler.

## 11.105 - Creating Expense Add/Edit Form
- The AddExpense form keeps track of state locally (i.e., the React way). Only when the form is submitted does it interact with Redux

- NOTE: this.setState(() => ({ note: e.target.value })) throws errors. You must make it 2 lines and set e.target to a variable, then use that variable. Or use e.persist(). Both ways, it is two lines.

## 11.106 - Setting Up a Date Picker
- npm install moment, npm install react-dates, npm install react-addons-shallow-compare

## 11.108 - Wiring Up Edit Expense
- Sometimes you need to use props and state together, such as when you want already-existing data to show up in your form. For these times, you need to go to the old-school constructor function.

## 12.118 - Snapshot Testing
- npm install react-test-renderer
- For components without user interaction or lifecycle events, you can use ReactShallowRenderer:
```
import ReactShallowRenderer from 'react-test-renderer/shallow'
```

Full-DOM rendering renders child components and more.

- Snapshots allow for tracking changes to the data over time.

## 12.119 - Enzyme
- Enzyme is a tool that works for both React 15 and 16. It is better than using React Test Renderer. It allows for more complexities, such as changing inputs, searches, buttons, etc.

## 12.120 - Snapshot Testing with Dynamic Components
- To snapshot test components that require props, you want to test the un-Connected (not attached to Redux Store) version of them so that we can provide the props.

## 12.121 - Mocking Libraries with Jest
- There are occasions when you need to mock a library. For instance, we use moment() which creates a new time every time the component fires. This is an issue because the timestamp will be different every time we test. With jest, you can do this by creating a __mock__ folder in your test directory and writing code such as: 
```
const moment = require.requireActual('moment')

export default (timestamp = 0) => {
    return moment(timestamp)
}
```

## 12.122 - Testing User Interaction
- To simulate user interaction. you will sometimes have to imitate an object. For instance, e.preventDefault is not recognized. It will throw an error of undefined, so you can just create an empty arrow function and assign it to that name.

```
test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', { preventDefault: () => { } })
})
```

## 12.123 - Test Spies
- Mocked Functions / Test Spies allow us to more completely test our code. It works well with when you need to submit an event prop is called with a certain object, such as:

```
this.props.onSubmit({
    description: this.state.description,
    amount: parseFloat(this.state.amount, 10) * 100,
    createdAt: this.state.createdAt.valueOf(),
    note: this.state.note
})
```