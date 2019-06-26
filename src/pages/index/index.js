import React from 'react';

// import registerServiceWorker from './registerServiceWorker';

class ProductInput extends React.Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onProductChange(e.target.value);
    }

    render(){
        return (
            <input onChange = {this.handleChange}/>
        )
    }

}

class ProductList extends React.Component{
    constructor(){
        super();
    }

    render(){
        let show = this.props.show;
        let all = this.props.list;
        console.log(all);
        let lis = all.filter((e)=>{
            return e.indexOf(show) >= 0
        }).map((e)=>{
            return <li key={e}>{e}</li>
        })
        return (
            <ul>
                {lis}
            </ul>
        )
    }

}

class ProductTable extends React.Component{
    constructor(){
        super();
        this.state = {
            input:''
        };

        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(value){
        this.setState({input:value})
    }

    render(){
        let all = this.props.list;
        let show = this.state.input;
        return (
            <div>
                <ProductInput onProductChange={this.handleInputChange}/>
                <ProductList show={show} list={all}/>
            </div>
        )
    }
}

//非受控组件测试-------------------------------

class NameForm  extends  React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        alert('A name was submitted : ' + this.input.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input defaultValue='Martin' type="text" ref={(input)=>{this.input = input}}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

class FileInput extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let files = this.fileInput.files;
        console.log(this);
        if(files.length > 0){
            alert(`Selected file - ${this.fileInput.files[0].name}`);
        }else{
            alert(`Selected No File`);
        }

    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    File:
                    <input type="file" defaultValue='' ref={(input)=>{this.fileInput = input}}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

const productList = ['A1','A2','B1','C2','C3'];

let Index = <div>
    <ProductTable list={productList}/>
    <NameForm/>
    <FileInput/>
</div>

export default Index;
