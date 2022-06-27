import React from "react";
import styled from "styled-components";
import {MainSkill, SecondSkill} from "./SingleSkillsCard/SingleSkill";


const Skills = () =>
{
    return(
        <SkillsBoxContainer>
            <SkillsTitle>Навыки:</SkillsTitle>
            <SkillsRow>
                <MainSkill title={'React'}/>
                <MainSkill title={'TypeScript'}/>
                <MainSkill title={'HTML'}/>
                <MainSkill title={'CSS'}/>
                <MainSkill title={'Git'}/>
                <SecondSkill title={'React Hooks'}/>
                <SecondSkill title={'Router Dom'}/>
                <SecondSkill title={'Styled-components'}/>
                <SecondSkill title={'PHP'}/>
                <SecondSkill title={'C#'}/>
            </SkillsRow>
            <SkillsRow>

            </SkillsRow>
        </SkillsBoxContainer>
    )
}

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
  flex-wrap: wrap;
  align-items: flex-end;
  padding: 0px;
  gap: 11px;
`
const SkillsBoxContainer = styled.div`
    display: flex;
  flex-direction: column;
  gap: 0.7em;
`

export default Skills;