import React from 'react';
import {MantineProvider, Modal, createTheme} from '@mantine/core';
import {DatesProvider} from '@mantine/dates';
import {useMediaQuery, useReducedMotion} from '@mantine/hooks';
import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import 'dayjs/locale/uk';
import './questionnaire.css';
import {CooperationForm} from './CooperationForm.jsx';

const theme=createTheme({fontFamily:'Manrope Variable, sans-serif',defaultRadius:0,
 headings:{fontFamily:'Oswald Variable, sans-serif'},primaryColor:'yar',primaryShade:9,
 colors:{yar:['#f3f3f6','#e5e6ed','#cbd0de','#b0b8cf','#919dbc','#7181a8','#536890','#384f78','#283b60','#1D223D']}});
export default function CooperationModal({opened,onClose,onExit,initialType,logo,actionIcon}) {
 const reduced=useReducedMotion(), mobile=useMediaQuery('(max-width:650px)');
 return <MantineProvider theme={theme}><DatesProvider settings={{locale:'uk',firstDayOfWeek:1}}>
  <Modal opened={opened} onClose={onClose} returnFocus={false} onExitTransitionEnd={onExit} keepMounted fullScreen={mobile} centered size={1040} title={<><span aria-hidden="true">{logo}</span><span className="request-title-text">Співпраця</span></>}
   closeButtonProps={{'aria-label':'Закрити анкету'}} transitionProps={{duration:reduced?0:140}}
   overlayProps={{backgroundOpacity:.75,blur:5}} classNames={{content:'yar-modal-content',header:'yar-modal-header',body:'yar-modal-body',title:'yar-modal-title',close:'yar-modal-close'}}>
   <CooperationForm initialType={initialType} active={opened} actionIcon={actionIcon}/>
  </Modal>
 </DatesProvider></MantineProvider>;
}
