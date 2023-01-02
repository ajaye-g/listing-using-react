import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './display.css'



function Display(props) {
  
  
     const usersList=props.users.map((users)=>{return(
      <div key={users.id} className='d-inline-flex'>
      <Card  className='cardWidth m-2 p-2' >
        <Card.Img className='img'  variant="top" src={users.image} />
        <Card.Body>
          <Card.Title>{users.title}</Card.Title>
          <Card.Text className='max-content' >{users.description}</Card.Text>
          <Card.Text>$ {users.price}</Card.Text>
          <Card.Text >{users.category}</Card.Text>
          <Card.Text><span className='button1' >{users.rating.rate}</span></Card.Text>
          <Button variant="primary">Buy product</Button>
        </Card.Body>
      </Card>
      </div>
     )})
    
    
  return (
    <ul>{usersList}</ul>
  
    // console.log({usersList})
  )
}

export default Display