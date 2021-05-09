import './TableRow.css'

export default function TableRow(props) {

    return (
        <tr>
            <td>{props.question.Question}</td>
            <td>{props.question.Answers[props.question.correctAnswer]}</td>
            { props.question.Answers[props.question.correctAnswer] === props.option ?
                <td className='correct'>{props.option}</td>
                : <td className='incorrect'>{props.option}</td>
            }


        </tr>
    )
}