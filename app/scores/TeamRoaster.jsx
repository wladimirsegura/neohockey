
import { roaster } from './roaster'

function TeamRoaster(props) {

  const listUp= roaster.filter(data=>data.team==props.teamName)
  const nameStyle = 'grid grid-cols-7 items-center justify-center m-1 bg-slate-900'
  
  return (
    <section className='flex-col'>
    <div  className={`${nameStyle}`}>
      <p>#</p>
      <p className='col-span-4'>Name</p>
      <p className='text-xs'>G</p>
      <p className='text-xs'>A</p>
    </div>
      {listUp.map((item, i) => (
        <div key={i} className={`${nameStyle}`}>
          <p>{item.number}</p>
          <p className='col-span-4
          '>{item.name}</p>
          <p className='text-xs'>{item.goals}</p>
          <p className='text-xs'>{item.assists}</p>
        </div>
      ))}
    

  </section>
  )
}

export default TeamRoaster
