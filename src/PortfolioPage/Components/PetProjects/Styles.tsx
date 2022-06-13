import styled from "styled-components";
import React from "react";

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

export {PetProjectHeader, PetProjectsContainer};