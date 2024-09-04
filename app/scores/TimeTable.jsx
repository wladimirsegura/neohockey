
import { scoreData } from './scoreData'

function TimeTable(event,court,game) {

  const timeList= scoreData.filter(data=>data.event==event)
  console.log(timeList)
  console.log(scoreData.score)

  const nameStyle = 'grid grid-cols-6 items-center justify-center m-1 bg-gray-900'
  
  return (
    <section className='flex-col  bg-slate-700'>
    <div  className={`${nameStyle}`}>
      <p>P</p>
      <p className='col-span-2'>Time</p>
      <p className='text-xs'>G</p>
      <p className='text-xs'>A1</p>
      <p className='text-xs'>A2</p>

    </div>
      {timeList.map((item, i) => (
        <div key={i} className={`${nameStyle}`}>
          <p>{item.score.period}</p>
          <p className='col-span-2
          '>{item.score.time}</p>
          <p className='text-xs'>{item.score.goal}</p>
          <p className='text-xs'>{item.score.a1}</p>
          <p className='text-xs'>{item.score.a2}</p>

        </div>
      ))}

  </section>
  )
}

export default TimeTable
