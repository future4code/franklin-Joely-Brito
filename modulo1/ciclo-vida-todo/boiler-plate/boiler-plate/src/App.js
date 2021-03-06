import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles.css'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
justify-content: center;

> h1 {
color: #DE6B48;
font-size: 40px;
}
`
const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  color: ${({completa}) => (completa ? 'green' : 'none')};
`

const InputsContainer = styled.div`
  grid-auto-flow: column;
  gap: 10px;

> input {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: none;
  border: 1px solid;
  border-radius: 5px;
  margin-right: 10px;
  height: 10px;
  padding: 8px;
}

> button {
  border: none;
  background-color: #9EE493;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 5px;
}

> label {
  font-size: 18px;
  margin-right: 8px;
}
`

function App() {
  const [tarefas, setTarefa] = useState([
    {
      id: Date.now(),
      texto: 'passear com os cachorros',
      completa: false
    },
    {
      id: Date.now(),
      texto: 'Organizar os livros',
      completa: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("");
    
  useEffect(() => {
    const dados = localStorage.getItem("tarefasCriadas")
    const dadosArray = JSON.parse(dados)
    setTarefa(dadosArray)
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefasCriadas", JSON.stringify(tarefas)) 
  }, [tarefas]);

  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  }

  const criaTarefa = () => {
      const novaTarefa = {
        id: Date.now(),
        texto: inputValue,
        completa: false
      }

      const copiaDoEstado = [...tarefas]
      copiaDoEstado.push(novaTarefa)

      setTarefa(copiaDoEstado);
      setInputValue("")
  }

  const selectTarefa = (id) => {
      const copiaTarefa = tarefas.map((tarefa) => {
        if( id === tarefa.id) {
          const tarefaAtualzada = {
            ...tarefa,
            completa: tarefa.completa ? false : true
          }
          return tarefaAtualzada
        } else {
          return tarefa
        }
      })
      setTarefa(copiaTarefa)
  }

  const onChangeFilter = (event) => {
      setFiltro(event.target.value)
  }

 
    const listaFiltrada = tarefas.filter(tarefa => {
      switch (filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    });
    

    return (
      <Container>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={inputValue} onChange={onChangeInput}/>
          <button onClick={criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={filtro} onChange={onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </Container>
    )
  }


export default App
