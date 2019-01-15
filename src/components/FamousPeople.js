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
savedActor = () =>{
    console.log(this.state.name);
    console.log(this.state.role);

}
}

    render(){
        return (
                <div>
                    <input onChange={this.changeName}
                    type="text" placeholder="Famous Persons Name" />
                    <input onChange={this.changeRole}
                    type="text" placeholder="Famous Persons Role" />
                    <button onClick = {this.savedActor} class="famous-button">Submit Artist</button>
                    <p> {this.state.name} is famous for {this.state.role}</p>
                
                </div>
        );
    }
}

export default FamousPeople