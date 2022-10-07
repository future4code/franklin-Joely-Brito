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

ChartJS.register(ArcElement, Tooltip, Legend);
function App() {
  function createData(firstName, lastName, participation) {
    return { firstName, lastName, participation };
  }
  const rows = [
    createData("Frozen", "yoghurt", "25%"),
    createData("Eclair", "chocolate", "10%"),
    createData("Cupcake", "Baunilha", "5%"),
    createData("Gingerbread", "Chá", "50%"),
  ];

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Header>
        <Form>
          <TextField id="filled-basic" label="First name" variant="outlined" />
          <TextField id="filled-basic" label="Last name" variant="outlined" />
          <TextField
            id="filled-basic"
            label="Participation"
            variant="outlined"
          />
          <Button variant="outlined">Send</Button>
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
          Gráfico construido de acordo com os dados passados nos inputs
        </Typography>
        <Grafico>
          <TableContainer style={{maxWidth: "50%", border: "solid 1px"}}>
            <Table
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Participation(%)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.firstName}>
                    <TableCell align="center" component="th" scope="row">
                      {row.firstName}
                    </TableCell>
                    <TableCell align="center">{row.lastName}</TableCell>
                    <TableCell align="center">{row.participation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div >
            <Doughnut data={data} />
          </div>
        </Grafico>
      </main>
    </>
  );
}

export default App;
