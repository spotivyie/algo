import styled from 'styled-components'
import { colors } from '../../styles'

export const Login = styled.div`
  max-width: 350px;
  margin: 0 auto;
  padding: 100px 0;
`

export const LoginSecundary = styled.div``

export const MainLogin = styled.main`
`

export const HeaderLogin = styled.header`
  padding-bottom: 40px;
  text-align: center;
`

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 6px;
  padding-bottom: 20px;

  a {
    margin-left: 160px;
    color: ${colors.black};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${colors.lightGray};
    }
  }

  input{
    border-radius: 4px;
    border: 1px solid ${colors.lightGray};
    padding: 14px;
  }

  button{
    position: absolute;
    top: 40%;
    right: 4%;
    background-color: ${colors.black};
    border: 1px solid ${colors.black};
    color: ${colors.white};
    border-radius: 4px;
    padding: 2px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${colors.gray};
      border: 1px solid ${colors.gray};
    }
  }
`

export const FooterLogin = styled.footer`
  display: flex;
  flex-direction: column;

  button{
    padding: 14px;
    font-weight: 700;
    border-radius: 4px;
    background-color: ${colors.black};
    color: ${colors.white};
    cursor: pointer;
    margin-bottom: 20px;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${colors.gray};
      border: 1px solid ${colors.gray};
    }
  }

  a {
    margin-left: 8px;
    color: ${colors.black};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${colors.lightGray};
    }
  }
`
