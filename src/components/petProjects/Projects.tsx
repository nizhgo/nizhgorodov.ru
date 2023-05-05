import React from "react";
import ProjectItem from "@/components/petProjects/projectItem/ProjectItem";
import {ProjectsContainer, ProjectsGrid, Title} from "./style";

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
                    visual={'images/apollo.webp'} mockup={'/images/darkMockup.png'}
                    githubLink={'https://github.com/izveigor/X-MAS-HACK'}
                    type={{name: 'Хакатон', color: '#EFF6C3'}}/>
                <ProjectItem
                    description={'Таск менеджер. Переключение месяцов. Добавление, редактирование и удаление тасков. Счетчик незаврешенных задач. Задачи сохраняются в local storage. Формы через React Hook Form и валидацией через Yup'}
                    visual={'video/nizhgoOrganizerScreencast.webp'} mockup={'/images/darkMockup.png'}
                    title={'ORGANIZER'}
                    siteLink={'https://organizer.nizhgorodov.ru'} githubLink={'https://github.com/nizhgo/organizer'}
                    type={{name: 'Пет проджект', color: '#C3EAF6'}}/>

                <ProjectItem
                    title={'TRUE-TECH-HACK'}
                    description={'Разработка дополнительного функционал для плеера KION, который поможет пользователям комфортно смотреть любимые фильмы и сериалы. Например, настраивать яркость и контрастность изображения, цветовую палитру и удалять сцены, которые могут вызвать эпилептический припадок'}
                    visual={'images/rigel.webp'} mockup={'/images/darkMockup.png'}
                    githubLink={'https://github.com/itatmisis/MISIS-RIGEL-TRUE-TECH-HACK'}
                    type={{name: 'Хакатон', color: '#EFF6C3'}}/>
                <ProjectItem
                    title={'CIPHER'}
                    description={'DES шифрование и дешифрование в формате переводчка. Выбор темы и локализации. Vite + React + Typescript'}
                    visual={'/video/nizhgoChipherScreencast.webp'} mockup={'/images/darkMockup.png'}
                    siteLink={'https://cipher.nizhgorodov.ru/'}
                    githubLink={'https://github.com/nizhgo/cipherCipherCipher'}
                    type={{name: 'Пет проджект', color: '#C3EAF6'}}/>
                <ProjectItem
                    title={'NIZHGO CATS'}
                    description={'Небольшая соцсеть с возможность смотреть случайных котов, авторизацией, лайками и общей лентой лайкнутых кошечек. Самый первый пет-проджект. БД — firebase'}
                    visual={'/video/nizhgoCatsScreencast.webp'} mockup={'/images/darkMockup.png'}
                    siteLink={'https://cats.nzihgorodov.ru'} githubLink={'https://github.com/nizhgo/nizhgo-cats'}
                    type={{name: 'Пет проджект', color: '#C3EAF6'}}/>
                <ProjectItem
                	title={'BEBRABANK'}
                	description={'Вымышленный финтех стартап. Красивый лэндинг. Регистрация, выбор дизайна карта, переводы и пополенения. Работа с формами через Formik + yup'}
                	visual={'/video/bebraBankScreencast.webp'} mockup={'/images/darkMockup.png'}
                	siteLink={'https://bebrabank.ru'} githubLink={'https://github.com/nizhgo/bebra-bank'}
                    type={{name: 'Пет проджект', color: '#C3EAF6'}}/>
                {/*<projectItem*/}
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
