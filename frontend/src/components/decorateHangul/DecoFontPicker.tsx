import React from 'react'
import {List, ListItem, Divider } from '@mui/material';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { UseSelectorHook } from '../../_hook/HangulMakerHook';
import { decoActions } from '../../_slice/DecorateHangulSlice';

const FONT_SIZE = 40;

const FontBlackHanSans = styled.div`
  font-family: 'BlackHanSans';
  font-size: ${FONT_SIZE}px;
`;
const FontBMEuljiro = styled.div`
  font-family: 'BMEuljiro';
  font-size: ${FONT_SIZE}px;
`;
const FontGabiaBombaram = styled.div`
  font-family: 'GabiaBombaram';
  font-size: ${FONT_SIZE}px;
`;
const FontHSBombaram = styled.div`
  font-family: 'HSBombaram';
  font-size: ${FONT_SIZE}px;
`;
const FontHSGooltokki = styled.div`
  font-family: 'HSGooltokki';
  font-size: ${FONT_SIZE}px;
`;
const FontMapoHongdaeFreedom = styled.div`
  font-family: 'MapoHongdaeFreedom';
  font-size: ${FONT_SIZE * 0.9}px;
`;
const FontSangjuGotgam = styled.div`
  font-family: 'SangjuGotgam';
  font-size: ${FONT_SIZE}px;
`;
const FontSuseongBatang = styled.div`
  font-family: 'SuseongBatang';
  font-size: ${FONT_SIZE}px;
`;
const FontClassicB = styled.div`
  font-family: 'ClassicB';
  font-size: ${FONT_SIZE}px;
`;
const FontDolBomB = styled.div`
  font-family: 'DolBomB';
  font-size: ${FONT_SIZE}px;
`;
const FontGwangJu = styled.div`
  font-family: 'GwangJu';
  font-size: ${FONT_SIZE}px;
`;
const FontNamsan = styled.div`
  font-family: 'Namsan';
  font-size: ${FONT_SIZE}px;
`;
const FontHangang = styled.div`
  font-family: 'Hangang';
  font-size: ${FONT_SIZE}px;
`;
const FontYanolja = styled.div`
  font-family: 'Yanolja';
  font-size: ${FONT_SIZE * 1.2}px;
`;
const FontJSArirangPPURI = styled.div`
  font-family: 'JSArirangPPURI';
  font-size: ${FONT_SIZE}px;
`;
const FontDanGam = styled.div`
  font-family: 'DanGam';
  font-size: ${FONT_SIZE}px;
`;
const FontKCCAhnjunggeun = styled.div`
  font-family: 'KCCAhnjunggeun';
  font-size: ${FONT_SIZE}px;
`;
const FontJikji = styled.div`
  font-family: 'Jikji';
  font-size: ${FONT_SIZE}px;
`;
const FontHanDoetEum = styled.div`
  font-family: 'HanDoetEum';
  font-size: ${FONT_SIZE}px;
`;
const FontGoheung = styled.div`
  font-family: 'Goheung';
  font-size: ${FONT_SIZE * 1.5}px;
`;


function FontPicker() {
  const dispatch = useDispatch();
  const style =  UseSelectorHook(state => state.deco.style);

  const fontNameHandler = (type: string) => {
    dispatch(decoActions.fontName(type));
  };

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button onClick={() => fontNameHandler('BlackHanSans')}>
        <FontBlackHanSans>???????????????</FontBlackHanSans>
      </ListItem>
      <Divider />
      <ListItem button divider onClick={() => fontNameHandler('BMEuljiro')}>
        <FontBMEuljiro>?????? ????????????</FontBMEuljiro>
      </ListItem>
      <ListItem button onClick={() => fontNameHandler('GabiaBombaram')}>
        <FontGabiaBombaram>?????????????????????</FontGabiaBombaram>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('HSBombaram')}>
        <FontHSBombaram>HS???????????? 3.0</FontHSBombaram>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('HSGooltokki')}>
        <FontHSGooltokki>HS????????????</FontHSGooltokki>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('MapoHongdaeFreedom')}>
        <FontMapoHongdaeFreedom>Mapo ???????????????</FontMapoHongdaeFreedom>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('SangjuGotgam')}>
        <FontSangjuGotgam>???????????????</FontSangjuGotgam>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('SuseongBatang')}>
        <FontSuseongBatang>???????????????</FontSuseongBatang>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('ClassicB')}>
        <FontClassicB>???????????? B</FontClassicB>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('DolBomB')}>
        <FontDolBomB>??????????????????B</FontDolBomB>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('GwangJu')}>
        <FontGwangJu>?????????????????? B</FontGwangJu>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('Namsan')}>
        <FontNamsan>??????????????? EB</FontNamsan>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('Hangang')}>
        <FontHangang>??????????????? EB</FontHangang>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('Yanolja')}>
        <FontYanolja>????????? ??????</FontYanolja>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('JSArirangPPURI')}>
        <FontJSArirangPPURI>??????????????? ?????????</FontJSArirangPPURI>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('KCCAhnjunggeun')}>
        <FontKCCAhnjunggeun>KCC ????????????</FontKCCAhnjunggeun>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('DanGam')}>
        <FontDanGam>?????????????????????</FontDanGam>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('Jikji')}>
        <FontJikji>????????? ?????????</FontJikji>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('HanDoetEum')}>
        <FontHanDoetEum>????????? ????????????</FontHanDoetEum>
      </ListItem>
      <Divider />
      <ListItem button onClick={() => fontNameHandler('Goheung')}>
        <FontGoheung>??????????????? B</FontGoheung>
      </ListItem>
    </List>
  );
}

export default FontPicker