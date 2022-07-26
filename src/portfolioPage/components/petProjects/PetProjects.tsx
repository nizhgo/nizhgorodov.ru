import React from "react";
import BebraBankGif from '../../../assets/images/bebraBank.gif'
import BebraBankMoc from '../../../assets/images/bebraBankMoc.png'
import NizhgoCatsGif from '../../../assets/images/nizhgoCats.gif'
import NizhgoCatsMoc from '../../../assets/images/nizhgoCatsMoc.png'
import OrganizerGif from '../../../assets/images/organizer.gif'
import WhiteMockup from '../../../assets/images/whiteMockup.png'
import PetProjectItem from "./petProjectItem/PetProjectItem";
import {
	PetProjectHeader,
	PetProjectsContainer,
	PetProjectsGrid
} from "./style";

const PetProjects = () => {
	return (
		<PetProjectsContainer>
			<PetProjectHeader>
				ПЕТ ПРОДЖЕКТЫ
			</PetProjectHeader>
			<PetProjectsGrid>
				<PetProjectItem
					description={'Таск менеджер. Переключение месяцов. Добавление, редактирование и удаление тасков. Счетчик незаврешенных задач. Задачи сохраняются в local storage. Формы через React Hook Form и валидацией через Yup'}
					img={OrganizerGif} mockup={WhiteMockup} title={'ORGANIZER'}
					siteLink={'https://organizer.nizhgorodov.ru'} githubLink={'https://github.com/nizhgo/organizer'}/>
				<PetProjectItem
					description={'Небольшая соцсеть с возможность смотреть случайных котов, авторизацией, лайками и общей лентой лайкнутых кошечек. Самый первый пет-проджект. БД — firebase'}
					img={NizhgoCatsGif} mockup={NizhgoCatsMoc} title={'NIZHGOCATS'}
					siteLink={'https://cats.nizhgorodov.ru'} githubLink={'https://github.com/nizhgo/nizhgo-cats'}/>
				<PetProjectItem
					description={'Вымышленный финтех стартап. Красивый лэндинг. Регистрация, выбор дизайна карта, переводы и пополенения. Работа с формами через Formik + yup'}
					img={BebraBankGif} mockup={BebraBankMoc} title={'BEBRA BANK'} siteLink={'https://bebrabank.ru'}
					githubLink={'https://github.com/nizhgo/bebra-bank'}/>
			</PetProjectsGrid>
		</PetProjectsContainer>
	)
}


export default PetProjects;