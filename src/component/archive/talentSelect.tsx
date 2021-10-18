import { useState } from 'react'
import IProfile from '@/interfaces/profile.interface'
import { Dispatch, SetStateAction } from 'react'
import Style from '@/styles/archive/talentSelect.module.css'
import { sortTalentsByGeneration } from '@/functions/sort'
import { g1order } from '@/constant/drawerOrder'

const TalentSelect = ({ personaData, talent, setTalent, setPage }
  : { personaData: IProfile[], talent: string, setTalent: Dispatch<SetStateAction<string>>, setPage: Dispatch<SetStateAction<number>> }) => {
  const g1talents = sortTalentsByGeneration(personaData, g1order, 'generation 1');

  const select = (href: string) => {
    setPage(1);
    if (href === talent) return setTalent("");
    setTalent(href);
  }

  return (
    <div className={Style.wrapper}>
      {g1talents.map((t, index) => (
        <div className={Style.talentBox} key={index}
          onClick={e => select(t.href)}
          style={{
            backgroundImage: `url(${t.photo})`,
            filter: talent && talent !== t.href ? 'grayscale(100)' : '',
            boxShadow: talent && talent === t.href
              ? '0px 0px 15px 1px #ffffff'
              : '1px 1px 4px #ffffff',
          }}
        />
      ))
      }
    </div >
  )
}

export default TalentSelect
