import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../../../store/reducers/filtro'
import { RootReducer } from '../../../../store'
import * as enums from '../../../../utils/enums/index'
import * as S from './styles'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'todas'
  valor?: enums.Prioridade
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }


  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }
  
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
