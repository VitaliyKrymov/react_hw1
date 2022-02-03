import React from "react";
import Transaction from ".";
import { shallow} from 'enzyme';

describe ('Transaction component', ()=>{
    it ('should show transaction', ()=>{
        const props = {transaction:{
            value: 23,
                comment:'test',
                date:'03.02.2020'
            }}
        const sub = shallow (<Transaction {...props}/>)
        expect (sub).toMatchSnapshot();
    })
})