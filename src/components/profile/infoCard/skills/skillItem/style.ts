import styled from "styled-components";

const MainSkillContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 5px 12px;
	gap: 10px;
	background: #DBFF00;
	border-radius: 22px;
`

const SecondSkillContainer = styled(MainSkillContainer)`
	border: 1px solid #DBFF00;
	background: transparent;
	padding: 3px 10px;
`

const MainSkillTitle = styled.p`
	font-family: 'Jost', sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	display: flex;
	align-items: center;
	text-align: center;

	color: #000000;
`

const SecondSkillTitle = styled(MainSkillTitle)`
	font-family: 'Jost';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	display: flex;
	align-items: center;
	text-align: center;

	color: #DBFF00;
`

export {
	MainSkillContainer,
	MainSkillTitle,
	SecondSkillTitle,
	SecondSkillContainer
}