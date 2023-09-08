// import './ExpenseItem.css'

// function ExpenseItem(){
//     const expenseDate =" 8th sept, 2023"
//     const expenseTitle = "shopping"
//     const expensePrice = 100
//     return(
//         <div className='expense-item' >
//             <div>{expenseDate}</div>
//             <div className='expense-item__description '>
//                 <h2>{expenseTitle}</h2>
//                 <div className='expense-item__price'>Rs.{expensePrice}</div>
//             </div>
//         </div>
//     )
// }

// export default ExpenseItem;




import './ExpenseItem.css'

function ExpenseItem(props){
    
    return(
        <div className='expense-item' >
            <div>{props.date}</div>
            <div className='expense-item__description '>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>Rs.{props.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;
