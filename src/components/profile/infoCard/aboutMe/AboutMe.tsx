import React from "react";
import InfoBlock from "../shared/InfoBlock";
import InfoCardSubtitle from "../shared/InfoCardSubtitle";
import {AboutMeList, Accent} from './style'

const AboutMe = () => {
    return (
        <InfoBlock>
            <InfoCardSubtitle>Обо мне</InfoCardSubtitle>
            <p>Член хакатон клуба, часто участвую в хакатонах и кейс чемпионатах, контрибьючу в опенсорс проекты, даже
                сделал первый фронт для некоммерческого ВПНа с 2000 среднего онлайна</p>
            <AboutMeList>
                <li>— Знаю <Accent>JavaScript (ES6+)</Accent>, но всегда используют <Accent>TypeScript</Accent></li>
                <li>— Работаю с библиотекой <Accent>React</Accent>, использую хуки</li>
                <li>— Умею стилизовать компоненты с использованием <Accent>styledComponents</Accent></li>
                <li>— Я знаю <Accent>HTML</Accent> и <Accent>CSS</Accent> и имею опыт верстки веб-страниц и создания
                    адаптивного дизайна, всегда использую <Accent>flex и grid</Accent></li>
                <li>— Для роутинга я применяю <Accent>React Router Dom</Accent></li>
                <li>— Умею работать с <Accent>Git (Github, GitLab)</Accent></li>
                <li>— Пользуюсь <Accent>Figma.</Accent></li>
                <li>— Я умею работать с API и имею опыт работы с различными <Accent>RESTful API, WebSocket.</Accent>
                </li>
                <li>— Я знаю <Accent>PostgreSQL</Accent> и умею создавать базы данных, таблицы и выполнять запросы на
                    языке <Accent>SQL.</Accent></li>
                <li>— Имею опыт работы с <Accent>Node.js</Accent> и использую его для создания серверных приложений и
                    API.
                </li>
                <li>— Я знаком с фреймворком <Accent>Express для Node.js</Accent> и умею создавать серверные приложения,
                    используя его.
                </li>
                <li>— Есть опыт использования <Accent>Docker</Accent>, могу собрать образы, запускать их
                    через <Accent>docker-compose</Accent>, писать свои собственные docker-compose файлы.
                </li>
                <li>— Тестирую API через <Accent>Postman</Accent></li>
            </AboutMeList>
            <p>(❁´◡`❁)</p>
        </InfoBlock>
    )
}


export default AboutMe;
