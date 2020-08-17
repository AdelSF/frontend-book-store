import React from "react"
import { Link } from 'react-router-dom'
import Download from './download'
import Upload from './upload'
import styled from 'styled-components'


const Books = () => (
    <>
        <Div>
             <h1>Download and Upload Book</h1>
        </Div>        
        <Upload />
        <Download />

    </>
)

const Div = styled.div`
    margin: 1% 20%;
    padding: 1%;
    display: flex;
    justify-content: center;
`

export default Books