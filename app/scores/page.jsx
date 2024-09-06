
import { roaster } from './roaster'
import TeamRoaster from './TeamRoaster'
import TimeTable from './TimeTable'

const leftTeam = roaster.filter(data=>data.team=="ヘベウデス")
const rightTeam = roaster.filter(data=>data.team=="05ユニティーズ")

function Scores() {
  const nameStyle = 'grid grid-cols-7 items-center justify-center m-1 bg-gray-900'
  return (
    <div className='bg-[#230C35] h-screen'>
      <header className='flex mx-6 items-center'>
        <p>Kannami Hockey League</p>
        <p className='px-4'>Game #1</p>
        <p>2024/9/18</p>
      </header>
      <main className='grid grid-cols-3 col-auto items-center'>
        <div className='leftTeam text-2xl flex p-4 items-center justify-start  w-full'>
          ユニティーズ05sdfsdf
        </div>
        <div className='timer flex justify-center items-center w-full bg-slate-600'>
          <h1 className='text-6xl align-right'>3</h1>
          <h2 className='text-4xl mx-6'>00:00</h2>
          <h1 className='text-6xl align-left'>2</h1>
        </div>
        <div className='rightTeam text-2xl flex p-4 items-center justify-end '>
          コンパネロス
        </div>
      </main>
      <section className='records grid grid-cols-9 col-auto p-2 bg-gray-800'>
        <div className='left Roaster col-span-2'>
          <TeamRoaster teamName="ヘベウデス" />
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
          <TeamRoaster teamName="TUC"/>
          </div>
      </section>
    </div>
  )
}

export default Scores
