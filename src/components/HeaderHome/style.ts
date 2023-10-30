import styled from "styled-components";
import { styleGuide } from "@/styles";

export const Container = styled.header`
    width: 100%;
    height: auto;
    position: fixed;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 0.5px 16px;
    background-color: ${({headerCor}) => headerCor ? 'black' : '#fff'};
    z-index: 115;
    transition: 1s;
    
    nav{
        position: relative;
        max-width: 1440px;
        padding: 1rem 2rem;
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
                color: ${styleGuide.colors.gray.color100};
                font-weight: 700;
                font-size: 1.09375rem;
                transition: all ease 0.3s;
                
            }
            .pscrolls{
                color: ${styleGuide.colors.gray.color05};
                font-weight: 700;
                font-size: 1.09375rem;
            }

            span {
                color: ${styleGuide.colors.yellow.yelloPrincipal}
            }

                #active{
                    color: ${styleGuide.colors.yellow.yelloPrincipal};
                    border-bottom: 3px solid ${styleGuide.colors.yellow.yelloPrincipal};
                }
                a:hover{
                    color: ${styleGuide.colors.yellow.yelloPrincipal};
                    border-bottom: 3px solid ${styleGuide.colors.yellow.yelloPrincipal};
                    font-size: 1.2rem;

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
            .bar{
            }

    @media(max-width: ${styleGuide.breakpoints.small}){
        .noneD{
            display: none;
        }
        
    }

`;
export const ButtonMenu = styled.section`
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
            
            transition: ${({open}) => open ? '1s' : '0'};
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
            position: ${({open}) => open ? 'relative' : 'static'};
            top: 0.6rem;
        }
        &:nth-child(2){
            transform: ${({open}) => open ? 'translateX(-100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? '0' : '1'};
        }
        &:nth-child(3){
            
            transition: ${({open}) => open ? '1s' : '0'};
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
            position: ${({open}) => open ? 'relative' : 'static'};
            top: -0.75rem;
        }
    }

    @media (max-width: ${styleGuide.breakpoints.small}){
        display: flex;
    }
`
export const Ul = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    right: 0;
    

    a{
        color: ${styleGuide.colors.gray.color100};
        font-size: 1.09375rem;
        font-weight: 500;
        padding: 0.3125rem 0.5rem 0.28125rem 0.5625rem;
        border-bottom: ${styleGuide.colors.gray.color100} 3px solid;             
    }
    a:hover{
        font-size: 1.2rem; 
    }

    @media (max-width: ${styleGuide.breakpoints.small}){
        transition: 1s;
        flex-flow: column nowrap;
        background-color: ${({headerCor}) => headerCor ? 'black' : '#f1f1f1'};
        position: fixed;
        transform: ${({open}) => open ? 'translateY(0)' : 'translateY(100%)'};
        top: 5.4rem;
        height: 100%;
        width: 100%;
        padding-top: 3rem;

    }
`