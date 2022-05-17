import Hangman from '../containers/Hangman';
import { useParams } from 'react-router-dom';

export default function HangmanRoute() {
    const id = useParams()
    return (
        <Hangman id={id} />
    )
}