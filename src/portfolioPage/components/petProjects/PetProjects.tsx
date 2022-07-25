import React from "react";
import BebraBankMoc from '../../../assets/images/BBmockup.png'
import BebraBankGif from '../../../assets/images/BebraBank.gif'
import NizhgoCatsGif from '../../../assets/images/nizhgoCats.gif'
import NizhgoCatsMoc from '../../../assets/images/NizhgoCatsMoc.png'
import OrganizerPic from '../../../assets/images/organizer.png'
import WhiteMockup from '../../../assets/images/WhiteMockup.png'
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
					description={'Большой интерактивный календарь. Авторизация. Добавление, редактирование и удаление тасков на кажый день'}
					img={OrganizerPic} mockup={WhiteMockup} title={'ORGANIZER'}
					siteLink={'https://organizer.nizhgorodov.ru'} githubLink={'https://github.com/nizhgo/organizer'}/>
				<PetProjectItem
					description={'Вымышленный финтех стартап. Регистрация, выбор дизайна карта, переводы и пополенения. Работа с формами через Formik'}
					img={BebraBankGif} mockup={BebraBankMoc} title={'BEBRA BANK'} siteLink={'https://bebrabank.ru'}
					githubLink={'https://github.com/nizhgo/bebra-bank'}/>
				<PetProjectItem
					description={'Небольшая соцсеть с возможность смотреть случайных котов, авторизацией, лайками и общей лентой лайкнутых кошечек'}
					img={NizhgoCatsGif} mockup={NizhgoCatsMoc} title={'NIZHGOCATS'}
					siteLink={'https://cats.nizhgorodov.ru'} githubLink={'https://github.com/nizhgo/nizhgo-cats'}/>

			</PetProjectsGrid>
		</PetProjectsContainer>
	)
}


export default PetProjects;