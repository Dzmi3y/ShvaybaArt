import React from 'react'
import { CloseButton, CloseImg, Container, DateContainer, DayTitle, Header, Mounth, NextMounthButton, NextMounthImg, PreviousMounthButton, PreviousMounthImg } from './styles'
import { CalendarDayButton } from '../Buttons/CalendarDayButton'
import { useTranslation } from 'react-i18next';

export const Calendar = () => {
  const { t } = useTranslation(['calendar']);
  
  const mounthN =3;
  const weekdayList = (t("weekdayList", { returnObjects: true, ns: ['calendar'] })) as string[];
  const mounthsList = (t("mounthsList", { returnObjects: true, ns: ['calendar'] })) as string[];
  const dayInPreviousMounth = new Date(2024, mounthN-1, 0).getDate();
  const dayInCurrentMounth = new Date(2024, mounthN, 0).getDate();
 
  let mounthDayList = []; 
  
  const firstDayOfweek = new Date(`2024-${mounthN}-1`).getDay()

   console.log(dayInCurrentMounth);

  for(let i=1;i<=35;i++){
    if(i<firstDayOfweek){
      mounthDayList.push(dayInPreviousMounth-firstDayOfweek+i+1);
      console.log("ff ",dayInPreviousMounth-i-firstDayOfweek+1)
    }
    if(i>=firstDayOfweek && (i-firstDayOfweek+1)<=dayInCurrentMounth){
      mounthDayList.push(i-firstDayOfweek+1);
    }
    if((i-firstDayOfweek+1)>dayInCurrentMounth){
      mounthDayList.push(i-firstDayOfweek-dayInCurrentMounth+1);
    }
  }

  console.log(mounthDayList);


  return (
    <Container>
      <Header>
        <Mounth>{mounthsList[mounthN-1]}</Mounth>
        <PreviousMounthButton>
          <PreviousMounthImg />
        </PreviousMounthButton>
        <NextMounthButton>
          <NextMounthImg />
        </NextMounthButton>
        <CloseButton>
          <CloseImg />
        </CloseButton>
      </Header>
      <DateContainer>
        {weekdayList.map((d, i) => (
          <DayTitle key={d} className={(i === 5 || i === 6) ? "weekend" : ""} >{d}</DayTitle>
        ))}

        {mounthDayList.map((d,i)=>(
          <CalendarDayButton key={i}> {d} </CalendarDayButton>
        ))}
      </DateContainer>
    </Container>
  )
}
