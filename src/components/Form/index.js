import {useState} from "react";
import PropTypes from 'prop-types'

const Form =()=> {
    const [form,setForm] = useState({
        value:'',
        date: new Date().toISOString().substring(0,10),
        comment:''
    });

    const    onSubmit = (e) => {
        e.preventDefault();
        this.props.onChange(this.state.value)
        this.setState({
            value:''
        })
    };

   const onChange = (e) => {
        const {value, name} = e.target;

        setForm({
            ...form,
            [name]: value
        })
    };

    render() {
        return (

            <form onSubmit={onSubmit}>
                <input name='Баланс'
                       type='number'
                       placeholder='Сума'
                       value={form.value}
                       onChange={onChange}/>
                <button> Зберегти</button>
            </form>
        )
    }
}

Form.propTypes={
    onChange:PropTypes.func
};

export default Form;
