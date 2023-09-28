import React from 'react'
import Card from 'react-bootstrap/Card';

const CardItem = () => {
  return (
    <Card className='m-2'/* style={{ width: '18rem' }} */>
      <Card.Body>
        <Card.Title><p className='classFont'>Card Title</p></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><p className='classFont'>Card Subtitle</p></Card.Subtitle>
        <Card.Text className='classFont'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardItem