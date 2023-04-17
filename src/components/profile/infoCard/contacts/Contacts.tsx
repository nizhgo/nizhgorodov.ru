import React from "react";
import InfoBlock from "../shared/InfoBlock";
import InfoCardSubtitle from "../shared/InfoCardSubtitle";
import {ContactsContainer} from './style';

const Contacts = () => {
    return (
        <ContactsContainer>
            <InfoCardSubtitle>Контакты</InfoCardSubtitle>
            <InfoBlock>
                <p>Telegram: <a href={'https://t.me/nizhgo'}>@nizhgo</a></p>
                <p>GitHub: <a href={'https://github.com/Nizhgo'}>https://github.com/Nizhgo</a></p>
                <p>Email: <a>alexey@nizhgorodov.ru</a></p>
            </InfoBlock>
        </ContactsContainer>
    )
}

export default Contacts;



