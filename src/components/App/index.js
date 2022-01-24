import {Component} from "react";

import User from "../User";

class App extends Component {
constructor() {
    super();
    this.state={
        name: 'Vitaliy',
        date: Date.now(),
        age: 48
    }
}
    render() {
        return <div>
        <User name={this.state.name}
              age={this.state.age}
              date={this.state.date}/>
        <User name='Nataly' age='43'/>
    </div>
    }




}

export default App;