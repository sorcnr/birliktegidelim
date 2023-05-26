import Image from 'next/image';
import React, { useState } from 'react'
import { api, type RouterOutputs } from '~/utils/api'


const WorksList: React.FC = () => {
    const [works, setWorks] = useState<RouterOutputs["work"]["findManyWork"]>();
    const workz = api.work.findManyWork.useQuery({

    })
    return (
        <div className='w-full flex flex-col'>
            <button  title="Contact Sale"
        className="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl open::animate-pulse duration-150 ">+</button>
            {workz.data?.map(work => {
                
                
                return (
                    <div className=' w-full bg-slate-300 m-0 even:bg-slate-100 odd:bg-slate-200'>
                        <div className='h-auto  m-0 flex  justify-between mr-0.5 w-full'>

                            <p>
                                <Image className='avatar w-10 rounded-full' src= {"https://i.pravatar.cc/150?u=d"+work.driverId} width={36} height={36} alt='avatar'/>
                            </p>
                            <p>{work.createdAt.toDateString()}</p>
                            <p>
                                <DriverDetails id = {work.driverId} />
                            </p>
                            <p>{work.cost}</p>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default WorksList

interface Props {
    id: number;
}

const DriverDetails: React.FC<Props> = ({id}) => {
    const driver = api.driver.findFirstDriver.useQuery({
        where: {
            id: id
        }
    })
    return(
        <div>{driver.data?.name}</div>
    )
}
