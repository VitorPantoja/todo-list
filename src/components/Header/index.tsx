import button from '../../assets/button.svg'
import logo from '../../assets/logo.svg'
import { ContainerInput, Input, HomeButton } from '../Home/styles'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="" />
      </HeaderContainer>
      <ContainerInput>
        <Input placeholder="Adicione um nova tarefa" />
        <HomeButton style={{ padding: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-between', gap: '0.5rem' }}>
            Criar <img src={button} alt="" />
          </div>
        </HomeButton>
      </ContainerInput>
    </>
  )
}
