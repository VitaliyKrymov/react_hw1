import React, {Component} from "react";

import './App.css';


class User {
    constructor(userName, userAge, fullName) {
        this.name = userName;
        this.age = userAge;
        this.fullName = fullName;
    }

    getName() {
        console.log(this.name)
    }

    sayHello() {
        console.log('Hello I am ', this.age, 'years old.')
    }
}

class Admin extends User {
    constructor(name, age, fullName, rights) {
        super(name, age, fullName);
        this.rights = rights;
    }

    getName() {
        console.log('I am admin. My name is: ', this.name);
    }
}

const vitaliy = new User('Vitaliy', 27, 'Vitaliy Krymov');
const admin = new Admin('New Admin', 27, "No full name", 'write');
console.log(admin);
admin.getName();
admin.sayHello();

console.log(vitaliy);

vitaliy.getName();


class App extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            email: ''
        };
        // this.onClickHandler=this.onClickHandler.bind(this)//arrow function make it useless
    }

    // onClickHandler=()=>{
    //     console.log('onClick',this);
    //     this.setState({
    //         firstName:'New User Name'
    //     })
    // }

    onSubmite = (e) => {
        e.preventDefault();
        console.log(this.state);
       debugger
    }
    onChange = (e) => {
        const {value, name} = e.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        console.log(this.state);
        return <div className="App">
            Hello ,{this.state.firstName}!
            <form onSubmit={this.onSubmite}>
                <input value={this.state.firstName} onChange={this.onChange} name='firstName' type='text'
                       placeholder='Put your name'/>
                <input value={this.state.email} onChange={this.onChange} name='email' type='text'
                       placeholder='Put your email'/>
                <button>Submite</button>

            </form>
        </div>
    }


}

export default App;
