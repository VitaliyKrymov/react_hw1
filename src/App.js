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
            id: '',
            user: {}
        };

    }

    onSubmit = (e) => {
        e.preventDefault();
        fetch(`https://swapi.dev/api/people/${this.state.id}`).then((responce) => {
            responce.json()
                .then((user) => {
                    this.setState({
                        user
                    })
                })
                .catch((error)=>{   // with fatch .catch((error) don't work!!!
                    console.log(error)
                })
        })

    }
    onChange = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const {id, user} = this.state;

        return <div className="App">
            Hello ,{id}
            <form onSubmit={this.onSubmit}>
                <input value={id} onChange={this.onChange} name='id' type='text'
                       placeholder='Put your id'/>

                <button>Submite</button>
            </form>

            {JSON.stringify(user)}

        </div>
    }
}
            export default App;
