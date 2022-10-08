import { Header, Form, Grafico } from "./styled.js";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import randomcolor from "randomcolor";

ChartJS.register(ArcElement, Tooltip, Legend);
function App() {
  const [firtsName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [participation, setParticipation] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users/all").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const colors = users.map((user) => {
    const color = randomcolor();
    return color;
  });

  const data = {
    labels: users.map((user) => {
      return user.first_name;
    }),
    datasets: [
      {
        label: "Total de participação",
        data: users.map((user) => {
          const participacao = user.participacion;
          return participacao.replace("%", "");
        }),
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const countPartipation = () => {
    let count = 0;
    users.forEach((user) => {
      const participationCurrent = Number(user.participacion.replace("%", ""));
      const sum = count + participationCurrent;
      count = sum;
    });
    return count;
  };
  const send = async (event) => {
    event.preventDefault();

    const currentVerification = countPartipation();
    if (currentVerification >= 100) {
      alert("Sua porcentagem não poderá ser inclusa ao gráfico.");
      return;
    }
    try {
      await axios.post("http://localhost:3000/users/signup", {
        first_name: firtsName,
        last_name: lastName,
        participacion: participation,
      });
      alert("usuario cadatrado!");
      setFirstName("");
      setLastName("");
      setParticipation("");
    } catch (error) {
      alert("Não foi possível adicionar usuário");
    }
  };

  return (
    <>
      <Header>
        <Form onSubmit={send}>
          <TextField
            required
            value={firtsName}
            onChange={(e) => setFirstName(e.target.value)}
            id="filled-basic"
            label="First name"
            variant="outlined"
          />
          <TextField
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="filled-basic"
            label="Last name"
            variant="outlined"
          />
          <TextField
            required
            onChange={(e) => setParticipation(e.target.value)}
            value={participation}
            id="filled-basic"
            label="Participation"
            variant="outlined"
          />
          <Button type={"submit"} variant="outlined">
            Send
          </Button>
        </Form>
      </Header>
      <main>
        <Typography variant="h3" align="center" gutterBottom={true} mt={4}>
          Data
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom={true}
          mb={8}
        >
          Graph built according to the data passed in the inputs
        </Typography>
        <Grafico>
          <TableContainer>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Participation(%)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.first_name}>
                    <TableCell align="center" component="th" scope="row">
                      {user.first_name}
                    </TableCell>
                    <TableCell align="center">{user.last_name}</TableCell>
                    <TableCell align="center">{user.participacion}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div>
            <Doughnut data={data} />
          </div>
        </Grafico>
      </main>
    </>
  );
}

export default App;
