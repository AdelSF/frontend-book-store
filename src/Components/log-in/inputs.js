import React from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'


class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return (
        <form className="form" onSubmit={this.handleSubmit}>
            <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default Inputs



// const Inputs = () => (
//     <>
//         <Div>
//             <form>
//                 <label>Userame:<input type="text" name="username" /></label>
//                 <label>  Password:<input type="text" name="password" /></label>
//                 <input type="submit" value="Submit" />
//             </form>        
//         </Div>
//     </>
// )

// const Div = styled.div`
//     background-color: yellow;
//     margin: 1% 20%;
//     padding: 1%;
//     display: flex;
//     justify-content: center;
// `
