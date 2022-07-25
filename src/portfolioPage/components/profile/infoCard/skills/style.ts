import styled from "styled-components";

const SkillsTitle = styled.h5`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 139.02%;
  /* identical to box height, or 18px */
  
  color: #959393;
`

const SkillsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px;
  gap: 11px;
`
const SkillsBoxContainer = styled.div`
    display: flex;
  flex-direction: column;
  gap: 0.7em;
`

export {
	SkillsBoxContainer,
	SkillsRow,
	SkillsTitle
};