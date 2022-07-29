import React, { useEffect } from 'react'
import {Container, Form} from 'react-bootstrap'
import "./Container2.css"
import { useSelector } from 'react-redux/es/exports'

export const Container2 = ({revertido}) => {
  console.log(revertido===null)
  return (
    <Container className='d-flex justify-content-center container1'>
        
        <Container className="w-75 container2">
        Results:
            <Container >
            {
              
              revertido.length>0 ? revertido[0].selectText.text.map((i, index)=>{
                return <Form.Control
                type="text"
                id={index}
                placeholder={`${i}`}
                size="lg"
                readOnly
                style={{marginTop:10}}
              /> 
                
              }): null
            }
           
            
            </Container>
        </Container>
    </Container>
  )
}
