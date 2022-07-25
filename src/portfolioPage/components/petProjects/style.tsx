import React from "react";
import styled from "styled-components";

const PetProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
`

const PetProjectHeader = styled.h2`
  font-family: 'SovMod', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 139.02%;
  color: #FFFFFF;
  
 `

const PetProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6em;

  @media (max-width: 650px)
  {
    display: flex;
    flex-direction: column;
    margin-inline: auto;
  }
`


export {
	PetProjectHeader,
	PetProjectsContainer,
	PetProjectsGrid
};