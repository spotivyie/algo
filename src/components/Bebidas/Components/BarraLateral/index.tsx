import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../FiltroCard/index'
import { RootReducer } from '../../../../store'
import { alterarTermo } from '../../../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../../../utils/enums/index'


const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
          <>
            <S.Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                criterio="prioridade"
                legenda="whisky"
                valor={enums.Prioridade.WHISKY}
              />
              <FiltroCard
                criterio="prioridade"
                legenda="vodka"
                valor={enums.Prioridade.VODKA}
              />
              <FiltroCard
                criterio="prioridade"
                legenda="gin"
                valor={enums.Prioridade.GIN}
              />
              <FiltroCard
                criterio="prioridade"
                legenda="licor"
                valor={enums.Prioridade.LICOR}
              />
              <FiltroCard
                criterio="prioridade"
                legenda="vinho"
                valor={enums.Prioridade.VINHO}
              />
              <FiltroCard
                criterio="prioridade"
                legenda="cervejas"
                valor={enums.Prioridade.CERVEJAS}
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
