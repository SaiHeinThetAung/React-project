import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useGetProverbTitlesQuery, useGetProverbsQuery } from './services/proverbApi'
import {BsBookHalf} from 'react-icons/bs'
const Detail = () => {
    const {id}=useParams()
    const {state}=useLocation()
    const {data}=useGetProverbsQuery()
    const nav=useNavigate()
    console.log(state)
    const filter=data?.filter(it=>it.TitleId==id)
  return (
    <div>
        <div className='flex gap-4 m-4'>
            <p className='text-4xl text-yellow-600'><BsBookHalf/></p>  
            <h2 className='text-2xl font-semibold'>{state} (စကားပုံ)</h2>

        </div>
        <div className='flex  flex-wrap justify-center w-[1200px]'>
            {filter?.map(ft=>(
                
                   <>
                    <Link to={'/eachDetail'} state={ft}>
                    <div className='bg-sky-100 p-3 w-[500px]  border text-center shadow-md m-3'>
                        <h2 className='m-3 text-2xl text-yellow-500 font-semibold'>{ft.ProverbName}</h2>
                    </div>
                    </Link>
                    
                   </>
                
            ))}
        </div>
    </div>

  )
}

export default Detail