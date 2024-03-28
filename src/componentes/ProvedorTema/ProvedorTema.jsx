import { ThemeProvider } from '@emotion/react'


const tema = {
  cores: {
    branco: '',
    atencao: '',
    focus: '',

    primarias: {
      a: '#5754ed',
      b: '',
      c: ''
    },
    secundarias: {
      a: '#ebeaf9',
      b: '',
      c: '',
    }, 
    neutras: {
      a: '#373737',
      b: '',
      c: '',
      d: ''
    },
    dark: {
      a: '',
      b: '',
      c: ''
    }
  },
  espacamentos: {
    s: '16px',
    m: '24px',
    l: '32px',
    xs: '8px',
    xl: '48px'
  },
  
  fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema = ({children}) => {
  return(
    <ThemeProvider theme={tema}>
      {children}
    </ThemeProvider>
  )
}

