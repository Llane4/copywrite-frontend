
import axios from 'axios'
import React , {useState} from 'react'
import { Navbar, Container, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector} from "react-redux"
import { setTexto } from '../redux/actions/actions'
import store from '../redux/store'
import { Container2 } from './Container2'


export const Navbar2 = () => {
  var texts=useSelector((state)=> state.text) 
  const [revertido, setRevertido]=useState([])
  const dispatch=useDispatch()
  function submit(e){
    e.preventDefault()
    console.log(e.target[0].value)
    axios.get(`${process.env.BACKEND}/iecho?text=${e.target[0].value}`)
    .then(res=>{ 
      dispatch(setTexto(res.data.text))
      setRevertido([store.getState()]) 
    
      
    })}
 
  return (
    <>
    <Navbar bg="dark">
      <Container className='d-flex justify-content-center'>
        <form className='d-flex justify-content-center' style={{width: "40vw"}} onSubmit={(e)=>submit(e)}>
          <Form.Control
            type="text"
            id="text"
            placeholder='Insert text'
            size="lg"
            />
          <Button variant="primary" type="submit">
            Send
          </Button>
        </form>  
      </Container>
    </Navbar>
    <Container2 revertido={revertido}/>
    </>
  )
}
