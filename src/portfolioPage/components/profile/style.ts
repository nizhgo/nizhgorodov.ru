import styled from "styled-components";

const ProfileGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: 56px;
  
  @media (max-width: 700px)
  {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`


const UserPic = styled.img`
  min-width: 120px;
  border-radius: 8px;
  max-width: 212px;
  width: 100%;
`

export {
	UserPic,
	ProfileGrid
}