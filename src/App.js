import "./App.css";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header-component/Header";
import ExpanseTable from "./components/table-components/ExpanseTable";
import Footer from "./components/footer-component/Footer";
import TotalExpanses from "./components/total-expanse-components/TotalExpanses";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <ExpanseTable />
        </Row>
        <Row>
          <TotalExpanses />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </div>
  );
}

export default App;
