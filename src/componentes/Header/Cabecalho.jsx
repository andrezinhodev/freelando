import styled from '@emotion/styled'

const CabecalhoHome = styled.header `
    padding: 24px 120px;
    display: flex;
    width: 1440px;
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m};
`

 
export const Cabecalho = ({ children }) => {
    return(
        <CabecalhoHome>  
            {children}
        </CabecalhoHome>
    )
}

 