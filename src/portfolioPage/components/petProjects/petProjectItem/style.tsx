import styled from "styled-components";

const PetProjectContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 19px;

  p {
    font-size: 14px;
    line-height: 139.02%;
    /* or 19px */
    color: #FFFFFF;

  }
`

const Gif = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0 0 3px 3px;
  max-height: 209px;
  image-rendering: optimizeQuality;
  object-fit: cover;
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
  color: #4C4CFF;
`

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: 8px;

  animation: fadeIn 0.77s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Button = styled.button`
  font-size: 14px;
  padding: 9px 20px;
  gap: 10px;
  background: #1A1B22;
  border-radius: 7px;
  border: solid 1px #252525;
  -webkit-text-decoration: 1px solid #151515 underline;
  text-decoration: 1px solid #4C4CFF underline;
  cursor: pointer;
  animation: ease-in-out;
  transition: 0.3s;

  :hover {
    background: #2c2c3f;
  }
`

const Description = styled.p`
  font-size: 14px;
  line-height: 139.02%;
  min-height: 77px;
`

export {
	PetProjectContainer,
	PetProjectHeader,
	ImagesContainer,
	Button,
	ButtonRow,
	Description,
	Gif,
};
