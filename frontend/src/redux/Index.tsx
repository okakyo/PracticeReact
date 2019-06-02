import {Component} from 'react';
import * as React from 'react';
import * as ReactDom from 'react-dom';

interface Props{
  label:String;  
}
class Form extends Component {
    constructor(props:Props){
        super(props);
    }
    checkForm(){

    }
    render(){
        return(
            <div>
                <form></form>
            </div>
        )
    }
}