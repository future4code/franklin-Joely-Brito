import { Header, Form } from "./styled.js";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";


function App() {
  return (
    <>
      <Header>
        <Form>
        <TextField id="filled-basic" label="First name" variant="outlined" />
        <TextField id="filled-basic" label="Last name" variant="outlined" />
        <TextField id="filled-basic" label="Participation" variant="outlined" />
        <Button variant="outlined">Send</Button>
        </Form>
      </Header>
    </>
  );
}

export default App;
