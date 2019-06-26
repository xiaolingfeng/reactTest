/**
 * Created by Martin on 2018/8/18.
 */
import React,{Component} from 'react'

class UserItem extends React.Component {
    render(){
        return <li>
            <p>Name:{this.props.name}</p>
            <p>Age:{this.props.age}</p>
        </li>
    }
}

export default  UserItem;