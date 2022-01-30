import {Component} from "react";

class Form extends Component {
    constructor() {
        super();
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    onChange = (e) => {
        const {value} = e.target;
        this.setState({
            value
        })
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input name='balance'
                       type='number'
                       value={this.state.value}
                       placeholder='Suma'
                       onChange={this.onChange}/>
                <button> Save</button>
            </form>
        )
    }
}

export default Form;
