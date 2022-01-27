import {Component} from "react";

class Form extends Component {
    constructor() {
        super();
    }
    onSubmit=(e)=>{
        e.preventDefault()
    };

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input name='balance'type='number' placeholder='Suma'/>
                <button> Save </button>
            </form>
        )
    }
}
export default Form;
