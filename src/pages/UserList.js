/**
 * Created by Martin on 2018/8/19.
 */
import React,{Component} from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {
    render(){
        const users = [
            {
                name:'Aria',
                age:23
            },
            {
                name:'Bria',
                age:24
            },
            {
                name:'Cria',
                age:21
            },
        ];
        if(users.length > 0){
            let ulContentList = [];
            let ulContent = users.map((e)=> <UserItem name={e.name} age={e.age}/> );
            for(let i = 0 ; i < users.length ; i++){
               ulContentList.push(<UserItem name={users[i].name} age={users[i].age}/>);
            }
            console.log(ulContentList);
            return <ul>
                {ulContentList}
            </ul>
        }else{
            return <div>
                No User!
            </div>
        }
    }
}

export default UserList;