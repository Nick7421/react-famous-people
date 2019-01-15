import React, {Component} from 'react';

class FamousPeople extends Component{

constructor(){
    super();
    this.state = {
        name:'',
        role:''
    };
}
changeName = (event) =>{
    this.setState({
        name:event.target.value

    });
}
changeRole = (event) =>{
    this.setState({
        role:event.target.value

    });
}

    render(){
        return (
                <div>
                    <input onChange={this.changeName}
                    type="text" placeholder="Famous Persons Name" />
                    <input onChange={this.changeRole}
                    type="text" placeholder="Famous Persons Role" />
                <p>{this.state.name} is famous for {this.state.role}</p>
                </div>
        );
    }
}

export default FamousPeople