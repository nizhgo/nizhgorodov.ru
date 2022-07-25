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
				<Skill type={'main'}>React</Skill>
				<Skill type={'main'}>TypeScript</Skill>
				<Skill type={'main'}>HTML</Skill>
				<Skill type={'main'}>CSS</Skill>
				<Skill type={'main'}>Git</Skill>
				<Skill type={'second'}>React Hooks</Skill>
				<Skill type={'second'}>Router Dom</Skill>
				<Skill type={'second'}>Styled-components</Skill>
				<Skill type={'second'}>Figma</Skill>
				<Skill type={'second'}>PHP</Skill>
				<Skill type={'second'}>C#</Skill>
			</SkillsRow>
		</SkillsBoxContainer>
	)
}

export default Skills;