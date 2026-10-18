import {useLanguage} from './i18n.jsx';
import React, {useState} from 'react';
import {IconButton} from './components/Buttons.jsx';
import {MantineProvider, Modal, createTheme} from '@mantine/core';
import {DatesProvider} from '@mantine/dates';
import {useMediaQuery, useReducedMotion} from '@mantine/hooks';
import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import 'dayjs/locale/uk';
import 'dayjs/locale/pl';
import './questionnaire.css';
import {CooperationForm} from './CooperationForm.jsx';

const theme=createTheme({fontFamily:'Montserrat Variable, sans-serif',defaultRadius:0,
 headings:{fontFamily:'Montserrat Variable, sans-serif'},primaryColor:'yar',primaryShade:9,
 colors:{yar:['#f3f3f6','#e5e6ed','#cbd0de','#b0b8cf','#919dbc','#7181a8','#536890','#384f78','#283b60','#1D223D']}});
export default function CooperationModal({opened,onClose,onExit,initialType,logo}) {
 const {t, language} = useLanguage();
 const reduced=useReducedMotion(), mobile=useMediaQuery('(max-width:900px)');
 const [calendarOpen,setCalendarOpen]=useState(false);
 return <MantineProvider theme={theme}><DatesProvider settings={{locale:language,firstDayOfWeek:1}}>
  <Modal.Root opened={opened} onClose={onClose} returnFocus={false} onExitTransitionEnd={onExit} keepMounted fullScreen={mobile} centered size={1040}
   transitionProps={{duration:reduced?0:140}} closeOnEscape={!calendarOpen}
   classNames={{content:'yar-modal-content',header:'yar-modal-header',body:'yar-modal-body',title:'yar-modal-title'}}>
   <Modal.Overlay backgroundOpacity={.75} blur={5}/>
   <Modal.Content>
    <Modal.Header>
     <Modal.Title><span aria-hidden="true">{logo}</span><span className="request-title-text">{t("Співпраця")}</span></Modal.Title>
     <IconButton icon="close" label={t("Закрити анкету")} className="request-close" onClick={onClose}/>
    </Modal.Header>
    <Modal.Body><CooperationForm initialType={initialType} active={opened} onCalendarOpenChange={setCalendarOpen}/></Modal.Body>
   </Modal.Content>
  </Modal.Root>
 </DatesProvider></MantineProvider>;
}
