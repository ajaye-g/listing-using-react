import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './display.css'



function Display(props) {
  
  
     const usersList=props.users.map((users)=>{return(
      <div className='d-inline-flex h-100'>
      <Card  className='cardWidth m-2 p-2' >
        <Card.Img className='img' key={users.id} variant="top" src={users.image} />
        <Card.Body>
          <Card.Title key={users.id}>{users.title}</Card.Title>
          <Card.Text key={users.id}>{users.description}</Card.Text>
          <Card.Text key={users.id}>$ {users.price}</Card.Text>
          <Card.Text key={users.id}>{users.category}</Card.Text>
          <Card.Text><span className='button1' key={users.id}>{users.rating.rate}</span></Card.Text>
          <Button variant="primary">Buy product</Button>
        </Card.Body>
      </Card>
      </div>
     )})
     
      
     
  //   return(
        
  //     )})
    
    
  return (
    <ul>{usersList}</ul>
  
    // console.log({usersList})
  )
}

export default Display