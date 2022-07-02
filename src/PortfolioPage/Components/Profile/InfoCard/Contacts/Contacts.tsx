import React from "react";
import styled from "styled-components";
import InfoCardSubtitle from "../Shared/InfoCardSubtitle";
import InfoBlock from "../Shared/InfoBlock";

const Contacts = () =>
{
    return(
        <ContactsContainer>
            <InfoCardSubtitle>Контакты</InfoCardSubtitle>
            <InfoBlock>
                <p>Telegram: <a href={'https://t.me/nizhgo'}>@nizhgo</a></p>
                <p>GitHub:  <a href={'https://github.com/Nizhgo'}>https://github.com/Nizhgo</a></p>
                <p>Email:  <a>alexey@nizhgorodov.ru</a></p>
            </InfoBlock>
        </ContactsContainer>
    )
}

export default Contacts;

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
`

