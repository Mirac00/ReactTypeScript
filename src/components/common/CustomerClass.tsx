import React from "react";

interface IState{}
interface IProps{
    name : string;
    age : number;
    title : string;
}

export class CustomerClass extends React.Component<any, any> {
    constructor(props:IProps) {
        super(props);
    }
    render(){
        console.log(this.props);
        return(
            <React.Fragment>
                <h3>Customer Class</h3>
                <ul className="list-group">
                <li className="list-group-item">
                    Name : {this.props.name}
                </li>
                <li className="list-group-item">
                    Age : {this.props.age}
                </li>
                <li className="list-group-item">
                    Title : {this.props.title}
                </li>
            </ul>
            </React.Fragment>
        );
    }
}