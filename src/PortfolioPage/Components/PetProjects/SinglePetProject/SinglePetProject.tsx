import styled from "styled-components";
import React from "react";
interface IPetProject
{
    title: string,
    description: string,
    mockup: string,
    img: string,
    siteLink?: string,
    githubLink?: string,

}
const SinglePetProject = (props: IPetProject) =>
{
    const {title, description, mockup, img, siteLink, githubLink} = props;
    return(
        <PetProjectContainer>
            <PetProjectHeader>{title}</PetProjectHeader>
            <p>{description}</p>
            <ImagesContainer>
                <img src={mockup} style={{maxWidth:'100%'}}/>
                <img src={img} style={{maxWidth:'100%', borderRadius:'0px 0px 3px 3px'}}/>
            </ImagesContainer>
            <ButtonRow>
                {githubLink &&
                    <Button onClick={() => {window.open(githubLink, 'blank')}}>GitHub</Button>}
                {siteLink &&
                <Button onClick={() => {window.open(siteLink, 'blank')}}>Рабочий прототип</Button>}
            </ButtonRow>
        </PetProjectContainer>
    )
}

export default SinglePetProject;

const PetProjectContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 19px;
  
  p{
    font-size: 14px;
    line-height: 139.02%;
    /* or 19px */
    color: #FFFFFF;

  }
`

const ButtonRow = styled.div`
  width: 100%;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 12px;
`

const PetProjectHeader = styled.h4`
  font-family: 'SovMod', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height */
  color: #4C4CFF;
`

const ImagesContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
  pointer-events: none;
  border-radius: 8px;
`

const Button = styled.button`
  font-size: 14px;
  padding: 9px 20px;
  gap: 10px;
  background: #1A1B22;
  border-radius: 7px;
  text-decoration: 1px solid #4C4CFF underline;
  -webkit-text-decoration-line: 1px #4C4CFF underline;
  cursor: pointer;
  animation: ease-in-out;
  transition: 0.3s;
  :hover {
    background: #2c2c3f;
    scale: 105%;
  }
`