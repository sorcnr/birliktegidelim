/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import Image from 'next/image';
import React, { useState } from 'react'
import { api, type RouterOutputs } from '~/utils/api'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


type Work = RouterOutputs["work"]["getByDriver"][number];
type Driver = RouterOutputs["work"]["getAllDrivers"][number];
type Car = RouterOutputs["work"]["getCarById"]
type Expense = RouterOutputs["work"]["dailyReport"][number]["Expense"][number]
interface Props {
    id: number;
}

const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
const locales: Intl.Locale = new Intl.Locale('tr-TR')
interface DriverWithTotals extends Driver {
    totalWorkCost: number;
    totalExpenseCost: number;
}

function calculateTotals(drivers: (Driver & { Expense: Expense[]; works: Work[] })[] | undefined): DriverWithTotals[] {
    if (!drivers) {
        return [];
    }

    return drivers.map(driver => {
        const totalWorkCost = driver.works.reduce((total, work) => total + work.cost, 0);
        const totalExpenseCost = driver.Expense.reduce((total, expense) => total + expense.cost, 0);

        return {
            ...driver,
            totalWorkCost,
            totalExpenseCost,
        };
    });
}

const Daily: React.FC = () => {
   
    const [specificDate, setSpecificDate] = useState(new Date());
    const startDate = new Date(
        specificDate.getFullYear(),
        specificDate.getMonth(),
        specificDate.getDate(),
        0, 0, 0
    );

    const endDate = new Date(
        specificDate.getFullYear(),
        specificDate.getMonth(),
        specificDate.getDate(),
        23, 59, 59
    );

    const { data: drivers } = api.work.dailyReport.useQuery({
        startDate: startDate, endDate: endDate
    })
    const { data: cars } = api.work.getAllCars.useQuery();
    const driverWithTotals = calculateTotals(drivers);

    return (
        <div className='w-full flex flex-col gap-2 items-center'>
            <div className='h-auto'>
            <DatePicker className='z-1' selected={startDate} onChange={(date: typeof specificDate) => setSpecificDate(date)} />
            </div>
            <table className='w-full table table-compact table-zebra'>
                {/* head */}
                <thead>
                    <tr>

                        <th className='w-20'>Tarih</th>
                        <th>Araç</th>
                        <th>Sürücü</th>
                        <th>Açıklama</th>
                        <th>Gelir</th>
                        

                    </tr>

                </thead>
                <tbody>
                    {drivers?.map((d) => {
                        return [
                            d.works.map((w) => {
                                return (
                                    <tr key={w.id}>
                                        <td>{w.createdAt.toLocaleDateString(locales, options)}</td>
                                        <td>{cars?.find((car) => car.id === w.carId)?.brand} </td>
                                        <td className='capitalize'>{d.name}</td>
                                        <td>{`(${w.kmLast} - ${w.kmInit}): ${w.kmLast - w.kmInit} km`}</td>
                                        <td>{w.cost.toLocaleString('tr-TR', {
                                            style: 'currency',
                                            currency: 'TRY',
                                        })}</td>
                                    </tr>
                                )
                            }),
                                d.Expense.map((e) => {
                                    return (
                                        <tr key={e.id} className='text-fuchsia-600'>
                                            <td>{e.createdAt.toLocaleDateString(locales, options)}</td>
                                            <td>{cars?.find((car) => car.id === e.carId)?.brand} </td>
                                            <td className='capitalize'>{d.name}</td>
                                            <td>{e.description}</td>
                                            <td>{e.cost.toLocaleString('tr-TR', {
                                                style: 'currency',
                                                currency: 'TRY',
                                            })}</td>
                                        </tr>
                                    )
                                })]}
                        )
                    }
                </tbody>

            </table>
            <div className="stats shadow">
                {driverWithTotals?.map((d)=>{
                    return(
                        <div className="stat" key={d.id}>
                            <div className="stat-title capitalize">{d.name}</div>
                            <div className="stat-value text-secondary"> {((d.totalWorkCost - d.totalExpenseCost)* 0.3).toLocaleString('tr-TR', {
                                style: 'currency',
                                currency: 'TRY',
                            })} </div>
                            <div className="stat-des">
                                
                            </div>
                        </div>
                    )
                })}
                

            </div>
            {specificDate.toLocaleDateString(locales, options)}
        </div>
    )
}

export default Daily

