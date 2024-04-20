import React, { useEffect, useState } from 'react'
import { CloseButton, CloseImg, Container, DateContainer, DayTitle, Header, Mounth, NextMounthButton, NextMounthImg, PreviousMounthButton, PreviousMounthImg } from './styles'
import { CalendarDayButton } from '../Buttons/CalendarDayButton'
import { useTranslation } from 'react-i18next';
import { Exhibition } from '../../core/types/Exhibition';
import { useAppDispatch } from '../../core/hooks';
import { changeExhibitionDate } from '../../core/store/reducers/CartReducer';

type CalendarItem = {
  date: Date,
  isWeekend: boolean,
  isDisabled: boolean
}

export const Calendar: React.FC<{ currentExhibition: Exhibition, isVisible: boolean, close: () => void }> = ({ currentExhibition, close, isVisible }) => {
  const { t } = useTranslation(['calendar']);
  const dispatch = useAppDispatch();

  const convertStringToDate = (dateString: string) => {
    const [day, mounth, year] = dateString.split(".");
    const result = new Date(parseInt(year), parseInt(mounth) - 1, parseInt(day))
    return result;
  }
  const selectedDate = convertStringToDate(currentExhibition.selectedDate);
  const [currentMonth, setCurrentMonth] = useState<Date>(selectedDate);

  const weekdayList = (t("weekdayList", { returnObjects: true, ns: ['calendar'] })) as string[];
  const mounthsList = (t("mounthsList", { returnObjects: true, ns: ['calendar'] })) as string[];

  const isDisabled = (date: Date): boolean => {
    const from = convertStringToDate(currentExhibition.from);
    const to = convertStringToDate(currentExhibition.to);
    const isExhibitionDate = (from.getTime() <= date.getTime()) && (date.getTime() <= to.getTime())
    const isNonWorkingDay = currentExhibition.nonWorkingDays.find(d => date.getDay() === d) !== undefined
    return !isExhibitionDate || isNonWorkingDay;
  }


  const dayToCalendarItem = (date: Date): CalendarItem => {

    return {
      date: date,
      isWeekend: (date.getDay() === 6) || (date.getDay() === 0),
      isDisabled: isDisabled(date)
    }
  }

  const dayInPreviousMounth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate();
  const dayInCurrentMounth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();


  let mounthDayList: CalendarItem[] = [];

  const firstDayOfweek = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const changeDate = (date: Date) => {
    const cartId = currentExhibition.cartId as string;
    const day = date.getDate().toString().padStart(2, '0');
    const mounth = (date.getMonth() + 1).toString().padStart(2, '0');

    const dateString = `${day}.${mounth}.${date.getFullYear()}`;
    dispatch(changeExhibitionDate({ cartId, selectedDate: dateString }))
  }

  const previousMounth = new Date(currentMonth);
  previousMounth.setMonth(previousMounth.getMonth() - 1)

  const nextMounth = new Date(currentMonth)
  nextMounth.setMonth(nextMounth.getMonth() + 1)

  for (let i = -6; i <= 35; i++) {
    if (i <= 0) {
      const day = dayInPreviousMounth - firstDayOfweek + i + 1;
      const currentDate = new Date(previousMounth.getFullYear(), previousMounth.getMonth(), day)

      mounthDayList.push(dayToCalendarItem(currentDate));
    } else {
      if (i < firstDayOfweek) {

        const day = dayInPreviousMounth - firstDayOfweek + i + 1;
        const currentDate = new Date(previousMounth.getFullYear(), previousMounth.getMonth(), day)

        mounthDayList.push(dayToCalendarItem(currentDate));
      }
      if (i >= firstDayOfweek && (i - firstDayOfweek + 1) <= dayInCurrentMounth) {
        const day = i - firstDayOfweek + 1;
        const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)

        mounthDayList.push(dayToCalendarItem(currentDate));
      }
      if ((i - firstDayOfweek + 1) > dayInCurrentMounth) {

        const day = i - firstDayOfweek - dayInCurrentMounth + 1;
        const currentDate = new Date(nextMounth.getFullYear(), nextMounth.getMonth(), day)

        mounthDayList.push(dayToCalendarItem(currentDate));
      }
    }
  }

  const isSelectedDate = (date: Date): boolean => {
    return date.getTime() === selectedDate.getTime();
  }

  const toNextMounth = () => {
    const nextMounth = new Date(currentMonth)
    nextMounth.setDate(1);
    nextMounth.setMonth(currentMonth.getMonth() + 1);

    setCurrentMonth(nextMounth);
  }

  const toPreviousMounth = () => {
    const previousMounth = new Date(currentMonth)
    previousMounth.setDate(1);
    previousMounth.setMonth(currentMonth.getMonth() - 1);

    setCurrentMonth(previousMounth);
  }

  const getDayTitleClasses = (d: string, i: number): string => {

    let dayOfWeek = i === 6 ? 0 : i + 1 ;
    

    if ((currentExhibition.nonWorkingDays.find(d => dayOfWeek === d)) !== undefined) {
      return "disabled";
    }

    return (i === 5 || i === 6) ? "weekend " : "";
  }


  useEffect(() => {
    if (!isVisible) {
      const [day, mounth, year] = currentExhibition.selectedDate.split(".");
      setCurrentMonth(new Date(parseInt(year), parseInt(mounth) - 1, parseInt(day)));
    }
  }, [isVisible, currentExhibition]);


  return (
    <Container>
      <Header>
        <Mounth>{mounthsList[currentMonth.getMonth()]}</Mounth>
        <PreviousMounthButton onClick={toPreviousMounth}>
          <PreviousMounthImg />
        </PreviousMounthButton>
        <NextMounthButton onClick={toNextMounth}>
          <NextMounthImg />
        </NextMounthButton>
        <CloseButton onClick={close}>
          <CloseImg />
        </CloseButton>
      </Header>
      <DateContainer>
        {weekdayList.map((d, i) => (
          <DayTitle key={d} className={getDayTitleClasses(d, i)} >{d}</DayTitle>
        ))}

        {mounthDayList.map((d, i) => (
          <CalendarDayButton
            onClick={() => { changeDate(d.date) }}
            isWeekend={d.isWeekend}
            disabled={d.isDisabled}
            isSelected={isSelectedDate(d.date)}
            key={i}> {d.date.getDate()} </CalendarDayButton>
        ))}
      </DateContainer>
    </Container>
  )
}
