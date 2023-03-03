import 'bootstrap/dist/css/bootstrap.min.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import FormsItem from './components/FormsItem/FormsItem';
import Container from 'react-bootstrap/Container';


function App() {

  return (
    <div className="App">
      <BrandHeader/>
      <Container className="container-fluid">
        <FormsItem/>
      </Container>
    </div>
  );
}

export default App;
