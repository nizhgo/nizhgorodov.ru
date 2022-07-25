import styled from "styled-components";

const MainSkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  gap: 10px;
  border: 2px solid #4C4CFF;
  border-radius: 22px;
`

const SecondSkillContainer = styled(MainSkillContainer)`
  border: 1px solid #747474;
`

const MainSkillTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: white;
`

const SecondSkillTitle = styled(MainSkillTitle)`
  font-size: 10px;
  color: #787878;
`

export {
	MainSkillContainer,
	MainSkillTitle,
	SecondSkillTitle,
	SecondSkillContainer
}