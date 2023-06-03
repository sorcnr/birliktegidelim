import Image from 'next/image';
import React, { useState } from 'react'
import { api, type RouterOutputs } from '~/utils/api'


type Work = RouterOutputs["work"]["getByDriver"][number];
type Driver = RouterOutputs["work"]["getAllDrivers"][number];
type Car = RouterOutputs["work"]["getCarById"]
interface Props {
    id: number;
}

const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
const locales: Intl.Locale = new Intl.Locale('tr-TR')

const WorksList: React.FC = () => {
    const [driver, setDriver] = useState<Driver | null>(null);
    const { data: drivers } = api.work.getAllDrivers.useQuery();
    const { data: d } = api.work.getExpensesAndWork.useQuery({ driverId: driver?.id || 1 })
    const { data: cars } = api.work.getAllCars.useQuery();
    const { data: expenses } = api.work.getExpensesByDriver.useQuery({ DriverId: driver?.id || 1 })
    
    const sumWork: number | undefined = d?.works?.reduce((acc, work) => acc + (typeof work.cost === 'number' ? work.cost : 0), 0)
    const sumExpense: number | undefined = expenses?.reduce((acc, work) => acc + (typeof work.cost === 'number' ? work.cost : 0), 0)
    let sumSum:number;
    sumSum = 0;
    if (sumExpense && sumWork) {
        sumSum = -sumExpense+sumWork; 
        
    }

    return (
        <div className='w-full flex flex-col gap-2 items-center'>
            <div className="btn-group">
                {drivers?.map((d) => {
                    return (
                        <input type="radio" name="options" data-title={d.name} className="btn" key={d.id} onClick={(e) => setDriver(d)} />
                    )
                })}


            </div >
            <button title="Contact Sale"
                className="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl open::animate-pulse duration-150 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                    <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>

            </button>
            <table className='w-full table table-compact table-zebra'>
                {/* head */}
                <thead>
                    <tr>

                        <th>Tarih</th>
                        <th>Araç</th>
                        <th>Toplam Km</th>
                        <th>Gelir</th>
                        <th className='w-20'></th>

                    </tr>
                </thead>

                <tbody>
                    {d?.works.map(work =>{

                        return (
                            <tr key={work.id} className=''>

                                <th>{
                                    work.createdAt?.toLocaleDateString(locales, options)
                                }</th>
                                <th> {cars?.find((car) => car.id === work.carId)?.brand} </th>
                                <th>{`(${work.kmLast} - ${work.kmInit}): ${work.kmLast-work.kmInit}`}</th>
                                <th >{work.cost} ₺</th>
                                <th >
                                    <button className="btn btn-ghost btn-xs ">details</button>

                                </th>

                            </tr>
                        )
                    })}

                    {d?.Expense?.map(expense => {


                        return (
                            <tr key={expense.id} className='text-fuchsia-300'>

                                <th>{
                                    expense.createdAt?.toLocaleDateString(locales, options)
                                }</th>
                                <th> {cars?.find((car) => car.id === expense.carId)?.brand} </th>
                                <th>{expense.description}</th>
                                <th >- {expense.cost} ₺</th>
                                <th >
                                    <button className="btn btn-ghost btn-xs ">details</button>

                                </th>

                            </tr>
                        )
                    })}
                    
                </tbody>
                <tr className='bg-red-600 text-slate-100 glass'>
                    <th></th>
                    <th></th>
                    <th ></th>
                    <th>{sumSum}</th>
                    <th></th>
                </tr>
            </table>
        </div>
    )
}

export default WorksList

