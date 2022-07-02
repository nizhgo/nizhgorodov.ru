import React from "react";
import InfoBlock from "../Shared/InfoBlock";
import InfoCardSubtitle from "../Shared/InfoCardSubtitle";
import styled from "styled-components";

const AboutMe = () => {
    return(
        <InfoBlock>
        <InfoCardSubtitle>Обо мне</InfoCardSubtitle>
            <AboutMeList>
                <li>— Работаю с библиотекой <Accent>React</Accent></li>
                <li>— Использую хуки в React <Accent>(useState, useEffect, useContext...)</Accent></li>
                <li> — Знаю <Accent>JavaScript</Accent>, но всегда использую <Accent>TypeScript</Accent> для строгой типизации</li>
                <li>— Умею cтилизовать компоненты с использованем <Accent>StyledComponents</Accent></li>
                <li>— Всегда верстаю через <Accent>flex и grid</Accent> адаптивно</li>
                <li>— Имею опыт работы с формами через <Accent>Formik</Accent> и их валидацией через <Accent>Yup</Accent></li>
                <li>— Для роутинга применяю <Accent>React Router Dom</Accent></li>
                <li>— Умею работать с <Accent>Git (GitHub)</Accent></li>
                <li>— Чуть-чуть тестировал с <Accent>Jest</Accent>, но понимаю общие принципы тестирования фронта</li>
                <li>— Пользуюсь <Accent>Figma</Accent></li>
            </AboutMeList>
            <p>(❁´◡`❁)</p>
        </InfoBlock>
    )
}

const Accent = styled.span`
    color: #4C4CFF
    `

const AboutMeList = styled.ul`
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
    `

export default AboutMe;