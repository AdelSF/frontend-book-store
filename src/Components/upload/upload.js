import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styled from 'styled-components'
import { connect } from 'react-redux'
import { postBookRequest } from './../../Redux/actions'



class Upload extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        author: '',
        year: '',
        country: '',
        img: '',
        series: '',
        contributors: '',
        edition: '',
        grade: '',
        keywords: ''
      };
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
      e.preventDefault();
      this.props.postBookRequest(this.state)
      .then(book => {
        this.props.history.push(`/${book.id}`);
      })
    }

    render() {
      const { name, author, year, country, img, series, contributors, edition, grade, keywords } = this.state;
      return (
        <>
          <H1>Upload Your Book</H1>
          <Form name="book" onSubmit={this.onSubmit}>
            <Label htmlFor="name">
              Book Name :
              <Input
                type="text"
                name="name"
                value={name}
                onChange={this.onChange}
              />
            </Label>

            <Label htmlFor="author">
              Author Name :
              <Input
                type="text"
                name="author"
                value={author}
                onChange={this.onChange}
              />
            </Label>

            <Label htmlFor="year">
              Year Of Publish :
              <Input
                type="text"
                name="year"
                value={year}
                onChange={this.onChange}
              />
            </Label>

            <Label htmlFor="country">
              Country Of Publish :
              <Input
                type="text"
                name="country"
                value={country}
                onChange={this.onChange}
              />
            </Label>

            <Label htmlFor="img">
              Image Book :
              <Input
                type="text"
                name="img"
                value={img}
                onChange={this.onChange}
              />
            </Label>

            <Label htmlFor="series">
              Series :
              <Input
                type="text"
                name="series"
                value={series}
                onChange={this.onChange}
                />
            </Label>

            <Label htmlFor="contributors">
              Contributors :
              <Input
                type="text"
                name="contributors"
                value={contributors}
                onChange={this.onChange}
                />
            </Label>

            <Label htmlFor="edition">
              Edition Number :
              <Input
                type="text"
                name="edition"
                value={edition}
                onChange={this.onChange}
                />
            </Label>

            <Label htmlFor="grade">
              Grade Range :
              <Input
                type="text"
                name="grade"
                value={grade}
                onChange={this.onChange}
                />
            </Label>

            <Label htmlFor="keywords">
              Keywords :
              <Input
                type="text"
                name="keywords"
                value={keywords}
                onChange={this.onChange}
                />
            </Label>
            
            <Button type="submit">Submit</Button>

          </Form>
        </>
      );
    }
  }

const mapDispatchToProps = dispatch => ({
  postBookRequest: (book) => dispatch(postBookRequest(book))
})

export default connect(null, mapDispatchToProps)(withRouter(Upload))


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


const Form = styled.form`
    margin: 2rem 12rem;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: lightyellow;
`;

  const Label  = styled.label`
  /* margin: 20px; */
  margin-top: 15px;
  /* margin-left: 30%; */
  padding: 5px;
  display: block;
  /* display: block; */
`; 



const Input = styled.input`
    width: 300px;
    height: 35px;
    border: 1px solid #ccc;
    background-color: #fff;
    display: block;
  `;

  const Button = styled.button`
    margin: 3rem;
    width: 300px;
    height: 35px;
    background-color: #5995ef;
    color: #fff;
    border-radius: 3px;
  `;
