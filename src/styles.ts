import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#000',
  gray: '#333',
  green: '#10AC84',
  lightGray: '#dcdcdc',
  red: '#FF000D',
  basecard: '#F3F2F2'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  phone: '470px'
}

export const GlobalCSS = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    background-color: ${colors.white};
    color: ${colors.black};
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}){
      max-width: 80%;
    }
  }

  .link{
    text-decoration:none;
    color: ${colors.black};
  }
`
