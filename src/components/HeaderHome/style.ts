import styled from "styled-components";
import { styleGuide } from "@/styles";

interface ContainerProps{
    $headerCor: boolean;
}
interface ButtonProps{
    $open: boolean;
}

export const Container = styled.header<ContainerProps>`
    width: 100%;
    height: auto;
    position: fixed;
    padding: 1rem 4.8rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 0.5px 16px;
    background-color: ${({$headerCor}) => $headerCor ? '#1c1c1c' : '#fff'};
    z-index: 115;
    transition: 1s;
    
    nav{
        position: relative;
        max-width: 1440px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        z-index: 116;
    }
    

        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
            p {
                color: ${({$headerCor}) => $headerCor ? '#f3f3f3' : '#171717'};
                font-weight: 700;
                font-size: 1.09375rem;
                transition: all ease 0.3s;
                
            }

            span {
                color: ${styleGuide.colors.yellow.yelloPrincipal}
            }

                
                
                button {
                    background: ${styleGuide.colors.yellow.yelloPrincipal};
                    border-radius: 0.3125rem;
                    max-height: 2rem;
                    padding: 0.4rem 1.09375rem 0.5rem 1.125rem;
                    color: #fff;
                    font-weight: 600;
                    transition: all ease 0.3s;
                    
                }
            .logo{
                width: 3.92656rem;
                height: 3.47094rem;
                flex-shrink: 0;
            }

    @media(max-width: ${styleGuide.breakpoints.medium}){
        .noneD{
            display: none;
        }
        
    }

`;
export const ButtonMenu = styled.section<ButtonProps>`
    width: 2rem;
    height: 2rem;
    display: none;
    justify-content: space-around;
    flex-direction: column;
    div{
        background-color: ${styleGuide.colors.yellow.yelloPrincipal};
        width: 2rem;
        height: 0.25rem;
        border-radius: 10px;

        &:nth-child(1){
            
            transition: 1s;
            transform: ${({$open}) => $open ? 'rotate(45deg)' : 'rotate(0)'};
            position: ${({$open}) => $open ? 'relative' : 'static'};
            top: 0.6rem;
        }
        &:nth-child(2){
            transition: 1s;
            transform: ${({$open}) => $open ? 'translateX(-100%)' : 'translateX(0)'};
            opacity: ${({$open}) => $open ? '0' : '1'};
        }
        &:nth-child(3){
            
            transition: 1s;
            transform: ${({$open}) => $open ? 'rotate(-45deg)' : 'rotate(0)'};
            position: ${({$open}) => $open ? 'relative' : 'static'};
            top: -0.75rem;
        }
    }

    @media (max-width: ${styleGuide.breakpoints.medium}){
        display: flex;
    }
`
export const Ul = styled.ul<ButtonProps&ContainerProps>`
    display: flex;
    list-style: none;
    align-items: center;
    right: 0;
    gap: 1rem;
    

    a{
        color: ${({$headerCor}) => $headerCor ? '#f1f1f1' : '#171717'};
        font-size: 1.09375rem;
        font-weight: 500;
        padding: 0.3125rem 0.5rem 0.28125rem 0.5625rem;
        border-bottom: ${({$headerCor}) => $headerCor ? '#fff 3px solid' : '#171717 3px solid'};
        transition: 1s;         
    }
    a:hover{
        border-bottom: ${styleGuide.colors.yellow.yelloPrincipal} 3px solid;
    }
    .active{
        color: ${styleGuide.colors.yellow.yelloPrincipal};
        border-bottom: 3px solid ${styleGuide.colors.yellow.yelloPrincipal};
    }
    @media (max-width: ${styleGuide.breakpoints.medium}){
        border-top: 1px solid #f1f1f1;
        transition: 1s;
        flex-flow: column nowrap;
        background-color: ${({$headerCor}) => $headerCor ? '#1c1c1c' : '#f1f1f1'};
        position: fixed;
        transform: ${({$open}) => $open ? 'translateY(0)' : 'translateY(100%)'};
        top: 5.4rem;
        height: 100%;
        width: 100%;
        padding-top: 3rem;

    }
`