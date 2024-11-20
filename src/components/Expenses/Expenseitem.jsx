import Card from '../UI/Card.jsx'
import ExpenseDate from './Expensedate.jsx'
import './Expenseitem.css'
import '../UI/Card.css'

const ExpenseItem = (props) => {
    return (
    <Card className="expense-item">
        <ExpenseDate date={props.data.date}/>
        <div className='expense-item__description'>
            <h2>{props.data.title}</h2>
            <div className='expense-item__price'>{props.data.price}</div> 
        </div>  
    </Card>
    )
}

export default ExpenseItem;