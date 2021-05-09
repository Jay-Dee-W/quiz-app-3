import { useHistory } from 'react-router-dom';
import TableRow from './TableRow'
import './Results.css'

export default function Result() {
    let history = useHistory()
    let score = history.location.state.score.score
    let questions = history.location.state.questions
    let options = history.location.state.options

    return (
        <div className='Results'>
            <p>Total Score: {score}</p>
            <table>
                <tbody>
                    {questions.map((question, i) => {
                        return <TableRow question={question} option={options[i]} key={i} />
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}