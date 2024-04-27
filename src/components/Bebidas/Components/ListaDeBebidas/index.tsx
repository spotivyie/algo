import { useSelector } from 'react-redux'

import { MainContainer, Tag } from './styles'
import { RootReducer } from '../../../../store'
import Cards from '../../../Cards'

import TarefaClass from '../../../../../src/types'


const ListaDeBebidas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.name.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      }
      return tarefasFiltradas
      } else {
      return itens
    }
  }

  const tarefas = filtraTarefas()

  return (
    <MainContainer>
      <ul>
        {tarefas.map((bebida) => (
          <li key={bebida.name}>
            <Cards
              id={bebida.id}
              name={bebida.name}
              image={bebida.image}
              price={bebida.price}
              bebidas={bebida}
              prioridade={bebida.prioridade}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeBebidas
