
import Container from "./components/Container";
import Inputs from "./components/Inputs"
import Entradas from "./components/Entradas"



function App() {
  return (
    <Container>
      <Inputs>
        <Entradas>
          <input required placeholder="Usuario" />
          <input required placeholder="Mensagem" />
          <button />
        </Entradas>
      </Inputs>
    </Container>
  );
}

export default App;
