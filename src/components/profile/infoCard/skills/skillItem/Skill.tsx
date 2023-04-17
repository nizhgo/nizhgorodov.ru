import React from "react";
import {MainSkillContainer, MainSkillTitle, SecondSkillContainer, SecondSkillTitle} from './style'


interface ISkill {
    type?: 'main' | 'second',

}

const Skill = (props: ISkill & { children?: any }) => {
    const {type, children} = props;
    switch (type) {
        case 'main': {
            return (
                <MainSkillContainer>
                    <MainSkillTitle>
                        {children}
                    </MainSkillTitle>
                </MainSkillContainer>
            )
        }
        case 'second': {
            return (
                <SecondSkillContainer>
                    <SecondSkillTitle>
                        {children}
                    </SecondSkillTitle>
                </SecondSkillContainer>
            )
        }
        default: {
            return (
                <MainSkillContainer>
                    <MainSkillTitle>
                        {children}
                    </MainSkillTitle>
                </MainSkillContainer>
            )
        }
    }
}

export default Skill;
