import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrapper>
            <img src={'images/nizhgo.svg'} alt={'logo'}/>
        </HeaderWrapper>
    )
}


const HeaderWrapper = styled.header`
display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 2em;
`
export default Header