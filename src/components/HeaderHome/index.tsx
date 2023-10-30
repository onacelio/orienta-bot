import React, {useState, useEffect} from "react";
import OrientaBot from "@/assets/img/header/OrientaLogo.svg"
import {Container,ButtonMenu, Ul} from "./style";

export function HeaderHome(){
    const [headerCor, setheaderCor] = useState(false);

    useEffect(function(){
        function posScroll(){
            if(window.scrollY >= 150){
                setheaderCor(true)
            }else{
                setheaderCor(false)
            }
        }
        window.addEventListener('scroll', posScroll)
    },[])
    const [open, setOpen] = useState(false);

    return(
        <>
            <Container headerCor={headerCor}>
                <nav>
                    <div>
                        <img src={OrientaBot.src} alt="Orienta Bot Logo" className="logo"/>
                        <p className={headerCor ? 'pscrolls' : ''}>ORIENTA <span>BOT</span></p>
                    </div>
                    <Ul open={open} headerCor={headerCor}>
                        <a href="/" id="active">Home</a>
                    </Ul>
                    <button type="button" className="noneD">Acessar o Bot</button>
                    <ButtonMenu open={open} onClick={()=> setOpen(!open)} >
                        <div />
                        <div />
                        <div />
                    </ButtonMenu>
                </nav>
            </Container>
        </>
    )
}
