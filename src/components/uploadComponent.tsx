import { UploadButton } from "@uploadthing/react";
import { useState } from "react";
import { RouterOutputs, api } from "~/utils/api";
import DatePicker from "react-datepicker";
import { OurFileRouter } from "~/server/uploadthing";
import { toast } from "react-toastify";
import "@uploadthing/react/styles.css";
import "react-datepicker/dist/react-datepicker.css";

type Expense = {
    createdAt?: Date;
    expense: boolean;
    amount: number;
    description: string;
    docUrl: string | null;
};
type Cash = RouterOutputs["work"]["getAllCashbyDate"][number]
const ExpenseForm = () => {
    const [specificDate, setSpecificDate] = useState(new Date());
    const [expenses, setExpenses] = useState<Expense[]>([
        { expense: false, amount: 0, description: "", docUrl: null },
    ]);
    const [records, setRecords] = useState<Cash[] | null>(null);
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
    const { data: rcrds, refetch: refetchRecords } = api.work.getAllCashbyDate.useQuery({
        startDate: startDate,
        endDate: endDate
    }, {
        onSuccess: (data) => {
            setRecords(data ?? null);
        },
    })
    const addMultiCash = api.work.addMultiCash.useMutation({
        onSuccess: (result) => {

            const msg = `${result.count} kayıt oluşturuldu.`
            toast.info(msg, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            void refetchRecords();
        },
    });

    const handleExpenseChange = (index: number, checked: boolean) => {
        const updatedExpenses = [...expenses];
        const expenseToUpdate = updatedExpenses[index];
        if (expenseToUpdate) {
            expenseToUpdate.expense = checked;
            setExpenses(updatedExpenses);
        }
    };

    const handleAmountChange = (index: number, amount: number) => {
        const updatedExpenses = [...expenses];
        const expenseToUpdate = updatedExpenses[index];
        if (expenseToUpdate) {
            expenseToUpdate.amount = amount
                setExpenses(updatedExpenses);
        }
        
    };

    const handleDescriptionChange = (index: number, description: string) => {
        const updatedExpenses = [...expenses];
        const expenseToUpdate = updatedExpenses[index];
        if (expenseToUpdate) {
            expenseToUpdate.description = description;
            setExpenses(updatedExpenses);
        }
       
    };

    const handleFileChange = (index: number, file: string | null) => {
        const updatedExpenses = [...expenses];
        const expenseToUpdate = updatedExpenses[index];
        if (expenseToUpdate) {
            expenseToUpdate.docUrl = file;
            setExpenses(updatedExpenses);
        }
    };

    const handleAddRow = () => {
        setExpenses([...expenses, { expense: false, amount: 0, description: "", docUrl: null }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedExpenses = expenses.map((expense) => {
            return {
                ...expense,
                createdAt: specificDate
            };
        });




        addMultiCash.mutate(updatedExpenses);
        setExpenses([
            { expense: false, amount: 0, description: "", docUrl: null },
        ]);
        //const data = api.work.addMultiCash.useQuery(updatedExpenses);
        //console.log(data);
        // You can perform further actions with the expenses data, like sending it to an API.
    };

    const totalIncomeAmount = records ?
        records.filter((cash) => !cash.expense)
            .reduce((total, cash) => total + cash.amount, 0) : 0;
    const totalExpenseAmount = records ?
        records.filter((cash) => cash.expense)
            .reduce((total, cash) => total + cash.amount, 0) : 0;
    const { data: allRecords } = api.work.getAllCash.useQuery({endDate:specificDate});
    const allIncomeAmount = allRecords ?
        allRecords.filter((cash) => !cash.expense)
            .reduce((total, cash) => total + cash.amount, 0) : 0;
    const allExpenseAmount = allRecords ?
        allRecords.filter((cash) => cash.expense)
            .reduce((total, cash) => total + cash.amount, 0) : 0;
    const serkanCash = allRecords ? allRecords.filter(
        (cash) =>
            cash.description.toLowerCase().includes("serkan") ||
            cash.description.toLowerCase().includes("sg")
    ).reduce((total, cash) => total + cash.amount, 0): 0;
    const volkanCash = allRecords ? allRecords.filter(
        (cash) =>
            cash.description.toLowerCase().includes("volkan") 
    ).reduce((total, cash) => total + cash.amount, 0) : 0;
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <div className="stat" >
                    <div className="stat-title capitalize">Günlük Gelir</div>
                    <div className="stat-value text-secondary"> {totalIncomeAmount?.toLocaleString('tr-TR', {
                        style: 'currency',
                        currency: 'TRY',
                    })} </div>
                    <div className="stat-des">

                    </div>
                </div>
                <div className="stat" >
                    <div className="stat-title capitalize">Günlük Gider</div>
                    <div className="stat-value text-secondary"> {totalExpenseAmount?.toLocaleString('tr-TR', {
                        style: 'currency',
                        currency: 'TRY',
                    })} </div>
                    <div className="stat-des">

                    </div>
                    
                </div>
                <div className="stat" >
                    <div className="stat-title capitalize">Kasa Toplam</div>
                    <div className="stat-value text-secondary"> {( allIncomeAmount - allExpenseAmount).toLocaleString('tr-TR', {
                        style: 'currency',
                        currency: 'TRY',
                    })} </div>
                    <div className="stat-des">
                        <p>Serkan : {serkanCash.toLocaleString('tr-TR', {
                            style: 'currency',
                            currency: 'TRY',
                        })}</p>
                        <p>Volkan : {volkanCash.toLocaleString('tr-TR', {
                            style: 'currency',
                            currency: 'TRY',
                        })}</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="form-control form gap-2">
                <DatePicker className='z-1' selected={specificDate} onChange={(date: typeof specificDate) => setSpecificDate(date)} />
                {expenses.map((expense, index) => (
                    <div key={index} className="flex gap-4">
                        <label>
                            Gider:
                            <input
                                type="checkbox"
                                checked={expense.expense}
                                onChange={(e) => handleExpenseChange(index, e.target.checked)}
                            />
                        </label>
                        <br />
                        <label>
                            Mebla:
                            <input

                                type="number"
                                value={expense.amount}
                                onChange={(e) => handleAmountChange(index, parseFloat(e.target.value))}
                            />
                        </label>
                        <br />
                        <label>
                            Açıklama:
                            <input
                                type="text"
                                value={expense.description}
                                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                            />
                        </label>
                        <br />
                        <label>

                            <UploadButton<OurFileRouter>
                                endpoint="imageUploader"
                                onClientUploadComplete={(res) => {
                                    // Do something with the response
                                    console.log("Files: ", res);
                                    res?.map((r) => {
                                        handleFileChange(index, r.fileUrl)
                                    })
                                    toast.info("Yükleme tamamlandı.", {
                                        position: "top-center",
                                        autoClose: 3000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                    });
                                }}
                                onUploadError={(error: Error) => {
                                    // Do something with the error.
                                    alert(`ERROR! ${error.message}`);
                                }}
                            />
                        </label>
                        <br />
                        <hr />
                    </div>
                ))}
                <button type="button" onClick={handleAddRow} className="btn btn-info p-0 w-auto h-10 ">
                    Satır Ekle
                </button>
                <br />
                <button type="submit" className="btn btn-warning relative">Kaydet</button>
            </form>
            <table className="table table-xs w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Mebla</th>
                        <th>Açıklama</th>
                        <th>Dosya</th>
                    </tr>
                </thead>
                <tbody>
                    {records?.map((cash) => {
                        const exp = cash.expense;
                        return (
                            <tr className={exp ? " text-fuchsia-300" : ""} key={cash.id} >
                                <th>{cash.id}</th>
                                <td>{cash.amount.toLocaleString('tr-TR', {
                                    style: 'currency',
                                    currency: 'TRY',
                                })}</td>
                                <td>{cash.description}</td>
                                <td>{cash.docURL ? <a href={cash.docURL.toString()}>Dosya</a> : "Yok"}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
};

export default ExpenseForm;
