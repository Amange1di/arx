import React from 'react'
import { JurnalCovponent } from './JurnalCovponent'

import './Jurnal.scss'

export const JurnalSection = () => {
    const newsB = [
        {
            title: 'Журнал исламской академии',
            descr: 'Исламская академия продолжает свою миссию по обучению, духовному развитию и просвещению!В этом месяце мы запустили несколько новых образовательных программ, направленных на углубленное изучение Корана, хадисов и исламской юриспруденции (фикха). Наши преподаватели — уважаемые ученые, готовые делиться своими знаниями и вдохновлять учеников на путь самосовершенствования.'

        },
        {
            hottitle: 'САМЫЕ ГОРЯЧИЕ НОВОСТИ',
            hotdisc: 'Скоро открытие новых курсов! Мы рады сообщить о запуске онлайн-курсов по основам исламского богословия и нравственного воспитания. Теперь каждый желающий сможет изучать религию, не выходя из дома. Благотворительные инициативы Недавно Академия организовала масштабную акцию помощи нуждающимся семьям в честь благословенного месяца Рамадан. Мы благодарим всех, кто принял участие и поддержал это благородное дело.'
          },
    ]

    const newsDataS = [
        {
            name: 'НОВОСТИ ДНЯ!',
            descTitle: 'Лекция «Современные вызовы и исламский ответ» — 20 марта',
            descTitle2: 'Благотворительный ифтар –',
            descTitle3: ' Конференция «Ислам и наука: точки соприкосновения» –',
        }
    ]

    return (
        <div className='container'>
            {newsB.map((item) => (
                <div className="news__banner">
                    <h1 className='news__title'>{item.title}</h1>
                    <p className='news__desc'>{item.descr}</p>
                    <h2 className='hot__title'>{item.hottitle}</h2>
                    <p className='hot__disc'>{item.hotdisc}</p>
                </div>
            ))}

            {newsDataS.map((item) => (
                <div className="news__content">
                    <div className="news__slides">
                        <div className="news__texts">
                            <h2 className='news__name'>{item.name}</h2>
                            <li className='news__li'>{item.descTitle}</li>
                            <li className='news__li'>{item.descTitle2}</li>
                            <li className='news__li'>{item.descTitle3}</li>
                        </div>
                    </div>


                </div>
            ))}

            <JurnalCovponent />
        </div>
    )
}