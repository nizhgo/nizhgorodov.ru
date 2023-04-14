import styled from "styled-components";

const PetProjectContainer = styled.div`
  display: flex;
	max-width: 500px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 19px;
	
`

const Gif = styled.img`
  width: 100%;
  height: 100%;
	max-height: 278px;
  border-radius: 0 0 3px 3px;
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

const Title = styled.h4`
	font-family: 'Press Start 2P';
	font-style: normal;
	font-weight: 400;
	font-size: 26px;
	line-height: 26px;
	width: 100%;
	text-align: start;
	color: #DBFF00;
	//black border for text not box or container
	text-stroke: 1px #000000;
	-webkit-text-stroke: 1px #000000;
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
	background: #DBFF00;
  border-radius: 7px;
  cursor: pointer;
  animation: ease-in-out;
  transition: 0.3s;
	border: none;

	font-style: normal;
	font-weight: 500;
	line-height: 20px;
	text-align: center;

	color: #000000;



	:hover {
    filter: brightness(0.9);
  }
	
`

const Description = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 139.02%;
	color: #ffffff;
	min-height: 90px;
`

export {
	PetProjectContainer,
	Title,
	ImagesContainer,
	Button,
	ButtonRow,
	Description,
	Gif,
};
