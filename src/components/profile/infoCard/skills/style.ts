import styled from "styled-components";

const SkillsTitle = styled.h5`
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 139.02%;
	color: #D1D1D1;
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