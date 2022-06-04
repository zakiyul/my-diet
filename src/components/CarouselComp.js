import {Carousel} from 'react-bootstrap';

const CarouselComp = ({imgs}) => {
    return ( 
        <Carousel>
            {imgs.map(img => {
                return (
                    <Carousel.Item>
                        <img src={`${img}`} alt="..." className="d-block w-100" />
                    </Carousel.Item>
                )
            })}
            {/* <Carousel.Item>
                <img
                className="d-block w-100"
                src="/jumbotron/1.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/jumbotron/2.png"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
     );
}
 
export default CarouselComp;