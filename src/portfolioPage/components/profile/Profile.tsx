import React from "react";
import Avatar from "../../../assets/images/avatar.jpg"
import InfoCard from "./infoCard/InfoCard";
import {
	ProfileGrid,
	UserPic
} from './style'

const Profile = () => {
	return (
		<ProfileGrid>
			<UserPic src={Avatar} alt={'userpic'}/>
			<InfoCard/>
		</ProfileGrid>
	)
}


export default Profile;