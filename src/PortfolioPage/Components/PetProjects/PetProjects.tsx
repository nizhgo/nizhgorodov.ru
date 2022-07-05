import styled from "styled-components";
import React from "react";
import {PetProjectHeader, PetProjectsContainer} from "./Styles";
import NizhgoCatsMoc from '../../../Images/NizhgoCatsMoc.png'
import WhiteMockup from '../../../Images/WhiteMockup.png'
import BebraBankMoc from '../../../Images/BBmockup.png'
import NizhgoCatsGif from '../../../Images/nizhgoCats.gif'
import BebraBankGif from '../../../Images/BebraBank.gif'
import OrganizerPic from '../../../Images/organizer.png'
import SinglePetProject from "./SinglePetProject/SinglePetProject";

const PetProjects = () =>
{
    return(
        <PetProjectsContainer>
            <PetProjectHeader>
                ПЕТ ПРОДЖЕКТЫ
            </PetProjectHeader>
            <PetProjectsGrid>
            <SinglePetProject description={'Небольшая соцсеть с возможность смотреть случайных котов, авторизацией, лайками и общей лентой лайкнутых кошечек'} img={NizhgoCatsGif} mockup={NizhgoCatsMoc} title={'NIZHGOCATS'} siteLink={'https://cats.nizhgorodov.ru'} githubLink={'https://github.com/nizhgo/nizhgo-cats'}/>
                <SinglePetProject description={'Вымышленный финтех стартап. Регистрация, выбор дизайна карта, переводы и пополенения. Работа с формами через Formik'} img={BebraBankGif} mockup={BebraBankMoc} title={'BEBRA BANK'} siteLink={'https://bebrabank.ru'} githubLink={'https://github.com/nizhgo/bebra-bank'}/>
                <SinglePetProject description={'Большой интерактивный календарь. Авторизация. Добавление, редактирование и удаление тасков на кажый день'} img={OrganizerPic} mockup={WhiteMockup} title={'ORGANIZER'} siteLink={'https://organizer.nizhgorodov.ru'} githubLink={'https://github.com/nizhgo/organizer'}/>
            </PetProjectsGrid>
        </PetProjectsContainer>
    )
}

const PetProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6em;

  @media (max-width: 650px)
  {
    display: flex;
    flex-direction: column;
    margin-inline: auto;
  }
`



export default PetProjects;