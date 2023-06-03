import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CashView: React.FC = () => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const locales: Intl.Locale = new Intl.Locale('tr-TR')

    return(
        <div>

        </div>
    )
}



export default CashView;