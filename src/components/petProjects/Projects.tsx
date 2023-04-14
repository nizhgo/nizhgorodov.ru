import React from "react";
import BebraBankScreencast from '../../../assets/images/bebraBankScreencast.gif'
import BebraBankMoc from '../../../assets/images/bebraBankMoc.png'
import DarkMockup from '../../../assets/images/darkMockup.png'
import NizhgoCatsMoc from '../../../assets/images/nizhgoCatsMoc.png'
import NizhgoOrganizerScreencast from '../../../assets/images/nizhgoOrganizerScreencast.webp'
import WhiteMockup from '../../../assets/images/whiteMockup.png'
import NizhgoCipherScreencast from '../../../assets/images/nizhgoChipherScreencast.webp'
import ProjectItem from "./petProjectItem/ProjectItem";
import NizhgoCatsScreencast from '../../../assets/images/nizhgoCatsScreencast.webp'
import {
	Card,
	Title,
	ProjectsContainer,
	ProjectsGrid
} from "./style";

const Projects = () => {
	return (
		<ProjectsContainer>
			<Title>
				Проекты
			</Title>
			<ProjectsGrid>
				<ProjectItem
					title={'APOLLO.DOC'}
					description={'Веб-приложение, которое предсказывает тип документа по его содержанию 📝'}
					visual={'https://user-images.githubusercontent.com/68601180/209818356-babdd64b-805d-4a6e-8388-bf8826f46836.png'} mockup={'/images/darkMockup.png'}
					githubLink={'https://github.com/izveigor/X-MAS-HACK'}
					type={{name: 'Хакатон', color: '#EFF6C3'}}/>
				<ProjectItem
					description={'Таск менеджер. Переключение месяцов. Добавление, редактирование и удаление тасков. Счетчик незаврешенных задач. Задачи сохраняются в local storage. Формы через React Hook Form и валидацией через Yup'}
					visual={'video/nizhgoOrganizerScreencast.webp'} mockup={'/images/darkMockup.png'} title={'ORGANIZER'}
					siteLink={'https://organizer.nizhgorodov.ru'} githubLink={'https://github.com/nizhgo/organizer'}
					type={{name: 'Пет проджект', color: '#C3EAF6'}}/>

				<ProjectItem
					title={'TRUE-TECH-HACK'}
					description={'Разработка дополнительного функционал для плеера KION, который поможет пользователям комфортно смотреть любимые фильмы и сериалы. Например, настраивать яркость и контрастность изображения, цветовую палитру и удалять сцены, которые могут вызвать эпилептический припадок'}
					visual={'https://user-images.githubusercontent.com/68601180/228579697-196d0b55-a6dd-43d4-bef5-d08d0a6c151b.png'} mockup={'/images/darkMockup.png'}
					githubLink={'https://github.com/itatmisis/MISIS-RIGEL-TRUE-TECH-HACK'}
					type={{name: 'Хакатон', color: '#EFF6C3'}}/>
				<ProjectItem
					title={'CIPHER'}
					description={'DES шифрование и дешифрование в формате переводчка. Выбор темы и локализации. Vite + React + Typescript'}
					visual={'/video/nizhgoChipherScreencast.webp'} mockup={'/images/darkMockup.png'}
					siteLink={'https://cipher.nizhgorodov.ru/'} githubLink={'https://github.com/nizhgo/cipherCipherCipher'}
					type={{name: 'Пет проджект', color: '#C3EAF6'}}/>
				<ProjectItem
					title={'NIZHGO CATS'}
					description={'Небольшая соцсеть с возможность смотреть случайных котов, авторизацией, лайками и общей лентой лайкнутых кошечек. Самый первый пет-проджект. БД — firebase'}
					visual={'/video/nizhgoCatsScreencast.webp'} mockup={'/images/darkMockup.png'}
					siteLink={'cats.nzihgorodov.ru'} githubLink={'https://github.com/nizhgo/nizhgo-cats'}
					type={{name: 'Пет проджект', color: '#C3EAF6'}}/>
				{/*<ProjectItem*/}
				{/*	title={''}*/}
				{/*	description={''}*/}
				{/*	visual={''} mockup={'/images/darkMockup.png'}*/}
				{/*	siteLink={''} githubLink={''}*/}
				{/*	type={{name: '', color: ''}}/>*/}
			</ProjectsGrid>
		</ProjectsContainer>
	)
}


export default Projects;
