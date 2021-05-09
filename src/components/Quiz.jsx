import Answers from './Answers'
import { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import './Quiz.css'


let options = []

export default function Quiz() {

    let [timerWidth, setTimerWidth] = useState(100)
    let [currentQ, setCurrentQ] = useState(0)
    let [score, setScore] = useState(0);

    function startTimer(timeStart) {

        let interval = setInterval(function () {
            let timeNow = new Date().getTime();
            let distance = timeStart - timeNow;
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // console.log(timeStart, timeNow, distance, seconds)
            setTimerWidth( prevWidth => {
                if (prevWidth < 0) {
                    clearInterval(interval)
                } 
                return prevWidth + seconds
            } )
           
        }, 1000);
    }

    useEffect(() => {
        startTimer(new Date().getTime())
         // eslint-disable-next-line 
    },[])

    let questions = [
        {
            Question: 'The programming language Swift was created to replace what other programming language?',
            Answers: ['Objective-C', 'C#', 'Ruby', 'C++'],
            correctAnswer: 0,
        },
        {
            Question: 'The original Roman alphabet lacked the following letters EXCEPT:',
            Answers: ['W', 'X', 'U', 'J'],
            correctAnswer: 1,
        },
        {
            Question: 'In which Shakespearean play will you find the suicide of Ophelia?',
            Answers: ['Macbeth', 'Othello', 'Hamlet', 'King Lear'],
            correctAnswer: 2,
        },
        {
            Question: 'If you grab the bladed end of a longsword in a specific way, you will not cut yourself.',
            Answers: ['True', 'False'],
            correctAnswer: 0,
        },
        {
            Question: 'In the 1999 movie Fight Club, which of these is not a rule of the "fight club"',
            Answers: ['You do not talk about FIGHT CLUB', 'Only two guys to a fight', "Always wear a shirt", "Fights will go on as long as they have to"],
            correctAnswer: 2,
        },
        {
            Question: "How long was Ken Jenning's win streak on Jeopardy?",
            Answers: ['74', "88", "49", "62"],
            correctAnswer: 0,
        },
        {
            Question: "Which of the following countries was not an axis power during World War II?",
            Answers: ["Italy", " Soviet Union", "Germany", "Japan"],
            correctAnswer: 1,
        },
        {
            Question: "In Diablo lore, this lesser evil spawned from one of the seven heads of Tathamet, and was known as the Maiden of Anguish.",
            Answers: ["Valla", "Malthael", "Andariel", "Kashya"],
            correctAnswer: 2,
        },
        {
            Question: "In Magic: The Gathering, what term for blocking was established in the Portal set?",
            Answers: ["Blocking", "Resisting", "Shielding", "Intercepting"],
            correctAnswer: 3,
        },
        {
            Question: 'What vault in the video game "Fallout"  is the home of multiple clones named Gary?',
            Answers: ["Vault 101", "Vault 108", "Vault 87", "Vault 21"],
            correctAnswer: 1,
        },
    ]



    let [selected, setSelected] = useState(null)

    let history = useHistory();


    function gotoResult() {
        history.push({
            pathname: '/results',
            state: {
                score: { score },
                options: options,
                questions: questions
            }
        })
    }

    let clickHandler = (option, i) => {
        console.log(option, i)
        options.push(option.answer)
        console.log(options)
        if (selected == null) {
            setSelected(i)
        }
        if (i === questions[currentQ].correctAnswer) {
            setScore(score = score + 1);
        }
        setTimeout(() => {
            (currentQ + 1) < questions.length ? setCurrentQ(currentQ + 1) : gotoResult()
            setSelected(null)
        }, 2000)
    }


    return (
        <div className='quiz'>
            <div className="Timer" style={{ width: `${timerWidth}%` }}></div>
            <div className='score'> Score:{score}</div>
            <div className='question'>{questions[currentQ].Question}</div>
            <Answers option={selected} options={questions[currentQ].Answers} correctAnswer={questions[currentQ].correctAnswer} onClick={clickHandler} />
        </div>
    )
}