import React from 'react';
import {SideBarContainer} from './style'
import Folder from '../../assets/Folder.svg'

export default function SideBar(){
    return(
        <SideBarContainer>
            <img src={Folder} alt="Imagem de uma pasta"></img>
        </SideBarContainer>
    );
}