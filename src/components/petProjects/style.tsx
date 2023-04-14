import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
	margin: 2em auto;
	max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 4em;
	color: #000000
`

const Title = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	line-height: 139.02%;
	/* identical to box height, or 50px */
	color: #ffffff;

	@media (max-width: 650px) {
		text-align: center;
	}

`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3em;

  @media (max-width: 650px)
  {
    display: flex;
    flex-direction: column;
    margin-inline: auto;
  }
`

const Card = styled.section`
//должна занимать весь экран по ширине 
	
	  position: absolute;
	left: 0;
	right: 0;
	height: max-content;
	width: 100%;
	  background: #F4F4F4;
	  border-radius: 54px 54px 0px 0px;
	padding-inline: 0.5em;
	  padding-top: 2em;
	  color: #000000;
		margin-top: 4em;
	  box-sizing: border-box;
	@media (max-width: 650px){
		border-radius: 32px 32px 0px 0px;
	}
`


const ProjectType = styled.div<{color: string}>`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 3px 10px;
background: ${props => props.color};	
border: 1px solid #000000;
border-radius: 22px;
	font-size: 14px;
	font-weight: 400;
`


export {
	Title,
	ProjectsContainer,
	ProjectsGrid,
	Card,
	ProjectType,
};