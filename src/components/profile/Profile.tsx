import styled from "styled-components";
import InfoCard from "@/components/profile/infoCard/InfoCard";

const Profile = () => {
    return(
        <ProfileGrid>
            <Photo src={'images/me.png'} alt={'photo'}/>
            <InfoCard/>
        </ProfileGrid>
    )
}

const Photo = styled.img`
  border-radius: 8px;
  width: 100%;
  max-width: 313px;
`

const ProfileGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: 56px;

  @media (max-width: 700px)
  {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`

export default Profile;