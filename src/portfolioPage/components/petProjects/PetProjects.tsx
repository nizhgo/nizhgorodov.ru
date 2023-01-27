import React from "react";
import BebraBankScreencast from '../../../assets/images/bebraBankScreencast.gif'
import BebraBankMoc from '../../../assets/images/bebraBankMoc.png'
import DarkMockup from '../../../assets/images/darkMockup.png'
import NizhgoCatsMoc from '../../../assets/images/nizhgoCatsMoc.png'
import NizhgoOrganizerScreencast from '../../../assets/images/nizhgoOrganizerScreencast.webp'
import WhiteMockup from '../../../assets/images/whiteMockup.png'
import NizhgoCipherScreencast from '../../../assets/images/nizhgoChipherScreencast.webp'
import PetProjectItem from "./petProjectItem/PetProjectItem";
import NizhgoCatsScreencast from '../../../assets/images/nizhgoCatsScreencast.webp'
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
					visual={NizhgoOrganizerScreencast} mockup={WhiteMockup} title={'ORGANIZER'}
					siteLink={'https://organizer.nizhgorodov.ru'} githubLink={'https://github.com/nizhgo/organizer'}/>
				<PetProjectItem
					description={'Небольшая соцсеть с возможность смотреть случайных котов, авторизацией, лайками и общей лентой лайкнутых кошечек. Самый первый пет-проджект. БД — firebase'}
					visual={NizhgoCatsScreencast} mockup={NizhgoCatsMoc} title={'NIZHGOCATS'}
					siteLink={'https://cats.nizhgorodov.ru'} githubLink={'https://github.com/nizhgo/nizhgo-cats'}/>
				<PetProjectItem
					description={'DES шифрование и дешифрование в формате переводчка. Выбор темы и локализации. Vite + React + Typescript'}
					visual={NizhgoCipherScreencast} mockup={DarkMockup} title={'CIPHER'}
					siteLink={'https://cipher.nizhgorodov.ru/'}
					githubLink={'https://github.com/nizhgo/cipherCipherCipher'}/>
				<PetProjectItem
					description={'Вымышленный финтех стартап. Красивый лэндинг. Регистрация, выбор дизайна карта, переводы и пополенения. Работа с формами через Formik + yup'}
					visual={BebraBankScreencast} mockup={BebraBankMoc} title={'BEBRA BANK'} siteLink={'https://bebrabank.ru'}
					githubLink={'https://github.com/nizhgo/bebra-bank'}/>
			</PetProjectsGrid>
		</PetProjectsContainer>
	)
}


export default PetProjects;
