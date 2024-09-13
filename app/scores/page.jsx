"use client"
import * as Dialog from '@radix-ui/react-dialog'
import InputScore from './InputScore'
import { roaster } from './roaster'
import TeamRoaster from './TeamRoaster'
import TimeTable from './TimeTable'
import { useState } from 'react'


function Scores() {
  const [leftTeam, setLeftTeam] = useState("ヘベウデス")
  const [rightTeam, setRightTeam] = useState("TUC")
  const leftTeamScore = roaster.filter(data=>data.team=="ヘベウデス")
  const rightTeamScore = roaster.filter(data=>data.team==leftTeam)
  const nameStyle = 'grid grid-cols-7 items-center justify-center m-1 bg-gray-900'
  return (
    <div className='bg-[#230C35] h-screen'>
        <header className='flex mx-6 items-center'>
          <p>Kannami Hockey League</p>
          <p className='px-4'>Game #1</p>
          <p>2024/9/18</p>
        </header>
        <main className='grid grid-cols-3 col-auto items-center'>
          <div className='leftTeamScore text-2xl flex p-4 items-center justify-start  w-full'>
            {leftTeam}
          </div>
          <div className='timer flex justify-center items-center w-full bg-slate-600'>
        <Dialog.Root>
          <Dialog.Trigger >
            <h1 className='leftScore text-6xl align-right'>3</h1>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className='DialogOverlay'/>
            <Dialog.Content maxWidth={"450px"} className='DialogContent text-3xl' >
              <div>
                <p>{leftTeam}:</p>
                <TeamRoaster teamName={leftTeam}/>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

            <h2 className='text-4xl mx-6'>00:00</h2>

            <Dialog.Root>
          <Dialog.Trigger >
            <h1 className='rightScore text-6xl align-right'>7</h1>
          </Dialog.Trigger>
          {/* <Dialog.Portal> */}
            <Dialog.Overlay className='DialogOverlay'/>
            <Dialog.Content maxWidth={"450px"} className='DialogContent text-3xl' >
              <div>
                <p>{rightTeam}:</p>
                <TeamRoaster teamName={rightTeam} />
              </div>
            </Dialog.Content>
          {/* </Dialog.Portal> */}
        </Dialog.Root>
          </div>
          <div className='rightTeamScore text-2xl flex p-4 items-center justify-end '>
            コンパネロス
          </div>
        </main>
        <section className='records grid grid-cols-9 col-auto p-2 bg-gray-800'>
          <div className='left Roaster col-span-2'>
            <TeamRoaster teamName={leftTeam} />
          </div>
          <section className='timeline grid grid-cols-2 col-span-5 h-min'>
            <div>
              <TimeTable eventDate='2024-06-12' gameNumber='1' team='TUC'/>
            </div>
            <div>
              <TimeTable eventDate='2024-06-12' gameNumber='1' team='いやさか'/>
            </div>
          </section>
            <div className='col-span-2'>
            <TeamRoaster teamName={rightTeam}/>
            </div>
        </section>

    </div>
  )
}

export default Scores
