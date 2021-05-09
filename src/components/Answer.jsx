

export default function Answer(props) {

    return (
        <div className='answer' onClick={props.onClick(props.id)} >{props.value}</div>
    )
}