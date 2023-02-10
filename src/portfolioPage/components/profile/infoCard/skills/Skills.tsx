import React from "react";
import Skill from "./skillItem/Skill";
import {
	SkillsBoxContainer,
	SkillsRow,
	SkillsTitle
} from './style';


const Skills = () => {
	return (
		<SkillsBoxContainer>
			<SkillsTitle>Навыки:</SkillsTitle>
			<SkillsRow>
				<Skill type={'main'}><abbr>React</abbr></Skill>
				<Skill type={'main'}><abbr>TypeScript</abbr></Skill>
				<Skill type={'main'}><abbr>HTML</abbr></Skill>
				<Skill type={'main'}><abbr>CSS</abbr></Skill>
				<Skill type={'main'}><abbr>Git</abbr></Skill>
				<Skill type={'second'}>React Hooks</Skill>
				<Skill type={'second'}><abbr>REST API</abbr></Skill>
				<Skill type={'second'}>Router Dom</Skill>
				<Skill type={'second'}>Styled-components</Skill>
				<Skill type={'second'}>Figma</Skill>
				<Skill type={'second'}>Адаптивная верстка</Skill>
				<Skill type={'second'}><abbr>PHP</abbr></Skill>
				<Skill type={'second'}>C#</Skill>
			</SkillsRow>
		</SkillsBoxContainer>
	)
}

export default Skills;
