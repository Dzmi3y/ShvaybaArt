import React, { useEffect, useRef, useState } from 'react';
import { Button, Image } from './styles';
import UpArrow from '../../../assets/images/common/UpArrow.png';
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';
import { useLocation } from 'react-router-dom';

enum classesEnum {
    HIDE = "hide ",
    RED = "red "
}

export const UpScrollButton = () => {
    const [redClassName, setRedClassName] = useState<string>("");
    const [hideClassName, setHideClassName] = useState<string>(classesEnum.HIDE);
    const location = useLocation();
    let oldScrollY = useRef<number>(0);;

    const scrollUp=()=>{
        window.scrollTo(0,0)
    };


    useEffect(() => {
        setRedClassName(location.pathname === RouteNamesEnum.TAMARA_DEMENTJEVA ? classesEnum.RED : "");
    }, [location.pathname]);

    useEffect(() => {

        const onScroll = () => {
            if (oldScrollY.current > window.scrollY) {
                setHideClassName(window.scrollY === 0 ? "hide " : "");
            }

            if (oldScrollY.current < window.scrollY) {
                setHideClassName("hide ")
            }

            oldScrollY.current = window.scrollY
        }



        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll,);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Button className={redClassName + hideClassName} onClick={scrollUp}>
            <Image src={UpArrow} alt="up arrow" />
        </Button>
    )
}
