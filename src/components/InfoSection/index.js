import React from 'react';
import ImgCar from '../images/svg-1.svg'

import {
    BtnWrap,
    Column1, Column2,
    Heading, Img, ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    TopLine
} from "./InfoElements";
import {Button} from "../ButtonElements";

const InfoSection = ({
                         lightBg,
                         id,
                         imgStart,
                         topLine,
                         lightText,
                         headline,
                         darkText,
                         description,
                         buttonLabel,
                         alt
                     }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={ImgCar} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection