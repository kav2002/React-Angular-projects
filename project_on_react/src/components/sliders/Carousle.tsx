
import Carousel from 'react-bootstrap/Carousel';
import canon from '../../images/canon.jpg'
import ele from '../../images/ele.jpg'
import trending from '../../images/trending.jpg'


export const NewCarousel:React.FC=()=>{

    return <>
    


    <Carousel variant="inherit">
      <Carousel.Item>
        <img height="500px"
          className="d-block w-100"
          src={trending}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>product1</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="500px"
          className="d-block w-100"
          src={ele}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>product2</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img height="500px"
          className="d-block w-100"
          src={canon}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>product3</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  

    </>
}