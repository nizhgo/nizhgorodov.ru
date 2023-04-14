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
	font-weight: 800;
	font-size: 26px;
	line-height: 139.02%;
`

export {
	InfoCardContainer,
	InfoCardHeader
};