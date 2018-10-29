import React,{Component} from 'react';
// import './UserList.css';
import jsonData from "./people.json";

const list = jsonData.people

const list2 = list.map(v => {
    return {
        ...v,
        value: false
    }
})
list2.forEach((obj,index)=>obj.id=index)


class UserList extends Component{
    state={
        userList: list2
    };

    handleChange = e => {
        console.log(this.state.userList)

        const id = e.target.id;

        this.setState(prevState => {
            return {
                userList: prevState.userList.map(
                    li => (li.id === +id ? {...li,
                        value: !li.value
                    } : li)

                )
            };
        });
    };
    handleClick = () => {
        console.log(this.state.userList)

        this.setState(prevState => {
            return {
                userList: prevState.userList.filter(li => !li.value)
            };
        });
    };
    render(){
        console.log(this.state.userList)
        return(
            <div>
                <form className="pa4">
                    <fieldset id="people" className="del bn">
                        <legend className="fw7 mb2">People</legend>
                        {this.state.userList.map(e => (
                            <div key={e.id}>
                                <input
                                    type="checkbox"
                                    id={e.id}
                                    checked={e.value}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor={e.name}>{e.name}</label>
                            </div>
                        ))}
                    </fieldset>
                </form>
                <button onClick={this.handleClick}>delete</button>
            </div>
        );
    }
}

export default UserList
