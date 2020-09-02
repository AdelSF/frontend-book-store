import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { getBookById } from '../../Redux/actions'



class Editbook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
      } 


      
      
    render() {
        const { name, author, year, country, img, series, contributors, edition, grade, keywords } = this.state;
        return (
            <>
                <H1>Edit Book</H1>
                
                
            </>
        );
    }
}


  
  export default Editbook;
  
  

const H1 = styled.h1`
border: 1px solid black;
padding: 10px;
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
align-items: center;
justify-content: center;
background-color: lightyellow;
`
