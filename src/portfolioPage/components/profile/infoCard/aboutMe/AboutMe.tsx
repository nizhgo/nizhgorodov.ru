import React from "react";
import InfoBlock from "../shared/InfoBlock";
import InfoCardSubtitle from "../shared/InfoCardSubtitle";
import {
	AboutMeList,
	Accent
} from './style'

const AboutMe = () => {
	return (
		<InfoBlock>
			<InfoCardSubtitle>Обо мне</InfoCardSubtitle>
			<AboutMeList>
				<li>— Работаю с библиотекой <Accent>React</Accent></li>
				<li>— Использую хуки в React <Accent>(useState, useEffect, useContext...)</Accent></li>
				<li> — Знаю <Accent>JavaScript</Accent>, но всегда использую <Accent>TypeScript</Accent> для строгой
					типизации
				</li>
				<li>— Умею cтилизовать компоненты с использованем <Accent>StyledComponents</Accent></li>
				<li>— Всегда верстаю через <Accent>flex и grid</Accent> адаптивно</li>
				<li>— Имею опыт работы с формами через <Accent>React Hook Form</Accent> и их валидацией
					через <Accent>Yup</Accent></li>
				<li>— Для роутинга применяю <Accent>React Router Dom</Accent></li>
				<li>— Умею работать с <Accent>Git (GitHub)</Accent></li>
				<li>— Чуть-чуть тестировал с <Accent>Jest</Accent>, но понимаю общие принципы тестирования фронта</li>
				<li>— Пользуюсь <Accent>Figma</Accent></li>
				<li>— Участавую в <Accent>хакатонах!</Accent></li>
				<li>— Контрибьючу в <Accent>опен сорс</Accent> проекты</li>
			</AboutMeList>
			<p>(❁´◡`❁)</p>
		</InfoBlock>
	)
}


export default AboutMe;
