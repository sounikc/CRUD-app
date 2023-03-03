import {Container, Navbar} from 'react-bootstrap';

function BrandHeader(){
    return (
        <div className='nav-bar pb-5'>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={process.env.PUBLIC_URL + '/logo.svg'}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            CRUD APP
          </Navbar.Brand>
        </Container>
      </Navbar>
        </div>
        
    )
}

export default BrandHeader;