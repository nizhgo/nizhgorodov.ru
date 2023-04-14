import styled from "styled-components";

const InfoCardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0;
gap: 44px;
  max-width: 550px;
`

const InfoCardHeader = styled.h2`
	font-family: 'Jost', sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 139.02%;
`

export {
	InfoCardContainer,
	InfoCardHeader
};