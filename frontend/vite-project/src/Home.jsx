import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import datas from '../../../MOCK_DATA_hotel.json'
import image from './assets/hotel_room.jpg'
import Button from 'react-bootstrap/Button';
import "./Home.css";

function Home() {
  return (
    <Container>
        <Row>
        <Col className='col-12 columnFlex' >
          {
            datas.map((data)=>(
                <div className='borderBox'> 
                    <img src={image} alt="" />
                    <p>Hotel Name</p>
                    <h1 className='text-primary'>{data.hotel_name}</h1>
                    <p>Email</p>

                    <h5 className='text-primary'>{data.email}</h5>
                    <Button variant="success">Book Now</Button>{' '}
                    <p className='text-primary'>Address</p>

                    <p>{data.address}</p>
                </div>
            ))
        }
        </Col>
        
      </Row>
        
    </Container>
  );
}

export default Home;