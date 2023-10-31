import React, {useState, useEffect} from "react";
import OrientaBot from "@/assets/img/header/OrientaLogo.svg"
import {Container,ButtonMenu, Ul} from "./style";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
    
    const pathname = usePathname()
    
    const navLink = [
        {
            name: "Home",
            link: "/",
        }
    ]
    
    return(
        <Container headerCor={headerCor}>
            <nav>
                <div>
                    <img src={OrientaBot.src} alt="Orienta Bot Logo" className="logo"/>
                    <p className={headerCor ? 'pscrolls' : ''}>ORIENTA <span>BOT</span></p>
                </div>
                <Ul open={open} headerCor={headerCor}>
                    {navLink.map(({ link, name }) =>(
                        <Link
                            key={name}
                            href={link}
                            className={`${pathname === link ? 'active' : ''}`}
                        >
                            {name}
                        </Link>
                    ))}
                </Ul>
                <button type="button" className="noneD">Acessar o Bot</button>
                <ButtonMenu open={open} onClick={()=> setOpen(!open)} >
                    <div />
                    <div />
                    <div />
                </ButtonMenu>
            </nav>
        </Container>   
    )
}
