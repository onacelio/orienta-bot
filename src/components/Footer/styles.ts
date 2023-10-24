import { styleGuide } from '@/styles';
import { FaInstagramSquare } from 'react-icons/fa';
import {BiLogoGithub, BiLogoDiscordAlt} from 'react-icons/bi'
import {IoLocationOutline} from 'react-icons/io5'
import styled from 'styled-components';

export const FooterHome = styled.footer`
    background-color: #fafafa;
    height: 400px;
    position: relative;
    width: 1440px;
`;

export const Logo1 = styled.img `
    height: 67px;
    left: 186px;
    position: absolute;
    top: 36px;
    width: 75px;
`;

export const Overlap = styled.div `
    height: 259px;
    left: 180px;
    position: absolute;
    top: 128px;
    width: 1083px;
`;

export const OverlapGroup = styled.div `
    height: 259px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1080px;
`;

export const Barrinha = styled.img `
    height: 1px;
    left: 1px;
    object-fit: cover;
    position: absolute;
    top: 231px;
    width: 1079px;
`;

export const Group = styled.div `
    height: 259px;
    left: 0;
    position: absolute;
    top: 0;
    width: 632px;
`;

export const Texto1 = styled.div `
    color: ${styleGuide.colors.yellow.yeellowCard};
    font-size: 23px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: normal;
`;

export const Descricao = styled.p `
    color: #838080e8;
    font-family: "Radio Canada", Helvetica;
    font-size: 18px;
    font-weight: 700;
    height: 66px;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 37px;
    width: 350px;
`;

export const Rodape = styled.p `
    color: #838080e8;
    font-family: "Radio Canada", Helvetica;
    font-size: 13px;
    font-weight: 700;
    height: 16px;
    left: 453px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 243px;
    width: 173px;
`;

export const Group2 = styled.div `
    height: 29px;
    left: 0;
    position: absolute;
    top: 115px;
    width: 142px;
`;

export const Group3 = styled.div `
    height: 141px;
    left: 550px;
    position: absolute;
    top: 0;
    width: 102px;
`;

export const Links = styled.div `
    color: #121212;
    font-family: "Archivo", Helvetica;
    font-size: 18.5px;
    font-weight: 700;
    height: 20px;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    white-space: nowrap;
`;

export const Group4 = styled.div `
    height: 101px;
    left: 0;
    position: absolute;
    top: 40px;
    width: 108px;
`;

export const Link1 = styled.div `
    color: #474545e8;
    font-family: "Archivo", Helvetica;
    font-size: 13px;
    font-weight: 800;
    height: 14px;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    white-space: nowrap;
`;

export const Link2 = styled.div `
    color: #474545e8;
    font-family: "Archivo", Helvetica;
    font-size: 13px;
    font-weight: 800;
    height: 14px;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 29px;
    white-space: nowrap;
`;

export const Link3 = styled.div `
    color: #474545e8;
    font-family: "Archivo", Helvetica;
    font-size: 13px;
    font-weight: 800;
    height: 14px;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 58px;
    white-space: nowrap;
`;

export const Link4 = styled.div `
    color: #474545e8;
    font-family: "Archivo", Helvetica;
    font-size: 13px;
    font-weight: 800;
    height: 14px;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 87px;
    white-space: nowrap;
`;

export const Group5 = styled.div `
    height: 83px;
    left: 736px;
    position: absolute;
    top: 0;
    width: 89px;
`;

export const Separador1 = styled.div `
    height: 14px;
    left: 0;
    position: absolute;
    top: 40px;
    width: 30px;
`;

export const Group6 = styled.div `
    height: 14px;
    left: 0;
    position: absolute;
    top: 69px;
    width: 89px;
`;

export const Group7 = styled.div `
    height: 61px;
    left: 892px;
    position: absolute;
    top: 0;
    width: 191px;
`;

export const Links2 = styled.div `
    color: #121212;
    font-family: "Archivo", Helvetica;
    font-size: 18.5px;
    font-weight: 700;
    height: 20px;
    left: 3px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    white-space: nowrap;
`;

export const  Separador2 = styled.div `
    height: 28px;
    left: 18px;
    position: absolute;
    top: 33px;
    width: 173px;
`;

export const EEEP = styled.p `
    color: #474545e8;
    font-family: "Archivo", Helvetica;
    font-size: 13px;
    font-weight: 800;
    height: 28px;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    white-space: nowrap;
`;

export const Local = styled.svg `
    height: 14px !important;
    left: 0 !important;
    position: absolute !important;
    top: 33px !important;
    width: 14px !important;
`;

export const Instagram = styled(FaInstagramSquare) `
    height: 29px !important;
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
    width: 29px !important;
`;

export const Discord = styled(BiLogoDiscordAlt) `
    height: 29px !important;
    left: 58px !important;
    position: absolute !important;
    top: 2px !important;
    width: 29px !important;
`;

export const Github = styled(BiLogoGithub) `
    height: 29px !important;
    left: 118px !important;
    position: absolute !important;
    top: 2px !important;
    width: 29px !important;
`;

export const Local1 = styled(IoLocationOutline) `
    height: 14px !important;
    left: 0 !important;
    position: absolute !important;
    top: 33px !important;
    width: 14px !important;
`;