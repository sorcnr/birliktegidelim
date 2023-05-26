import React, { SyntheticEvent, useState } from 'react'
import { api } from '~/utils/api';
interface Selection {
    dId: number,
    cId: number,
    onIdChange: (newIDs: number[]) => void
}
interface Props {
    id: number
}
interface SelProps {
    id: number,
    onIdChange: (newId: number) => void
}
const SelectDC: React.FC<Selection> = ({dId,cId,onIdChange}) => {
    const [driverId, setDriverId] = useState<number>(0);
    const [carId, setCarId] = useState<number>(0)
    dId=driverId;
    cId=carId;
    const handleCarChange = (id: number) => {
        setCarId(id);
    }
    const handleDriverChange = (id: number) => {
        setDriverId(id);
    }
    const handleIdChange = (event:SyntheticEvent<HTMLDivElement, Event>)=>{
        onIdChange([carId,driverId])
    }
    return (
        <div onChange={handleIdChange}>
            <SelectCar id={carId} onIdChange={handleCarChange} ></SelectCar>
            <SelectDriver id={driverId} onIdChange={handleDriverChange} />
        </div>
    )
};

export default SelectDC;

const SelectCar: React.FC<SelProps> = ({ id, onIdChange }) => {

    const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const Id = Number(event.target.value);
        onIdChange(Id);
    }
    const cars = api.car.findManyCar.useQuery({

    })
    return (

        <div>
            {cars.data?.map(car => {
                return (
                    <label className="label cursor-pointer">
                        <span className="label-text">{car.model}</span>
                        <input type="radio" name="radio-car" className="radio checked:bg-red-500"
                            value={car.id}
                            checked={id === car.id}
                            onChange={handleIdChange} />
                    </label>
                )
            })}
            <label className="label cursor-pointer">
                <span className="label-text">Red pill</span>
                <input type="radio" name="radio-car" className="radio checked:bg-red-500"
                    value={1}
                    checked={id === 4}
                    onChange={handleIdChange} />
            </label>
        </div>
    )
}


const SelectDriver: React.FC<SelProps> = ({ id, onIdChange }) => {

    const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const Id = Number(event.target.value);
        onIdChange(Id);
    }
    const drivers = api.driver.findManyDriver.useQuery({

    })
    return (

        <div>
            {drivers.data?.map(driver => {
                return (
                    <label className="label cursor-pointer">
                        <span className="label-text">{driver.name}</span>
                        <input type="radio" name="radio-driver" className="radio checked:bg-red-500"
                            value={driver.id}
                            checked={id === driver.id}
                            onChange={handleIdChange} />
                    </label>
                )
            })}
            <label className="label cursor-pointer">
                <span className="label-text">Red pill</span>
                <input type="radio" name="radio-driver" className="radio checked:bg-red-500"
                    value={1}
                    checked={id === 4}
                    onChange={handleIdChange} />
            </label>
        </div>
    )
}