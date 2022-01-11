import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from '@mui/material/Container'
import { Definitions, Header} from './components'

const App = () => {

    const [word, setWord] = useState('')
    const [meanings, setMeanings] = useState([])
    const [category, setCategory] = useState('en')

    const dictionaryApi = async () => {
        try {
            const {data} = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
            setMeanings(data)
        } catch(error) {
            console.log(error)
        }
    }
    

    useEffect(() => {
        dictionaryApi()
    }, [word, category])
    return (
        <div className='App'>
            <Container maxWidth="md" className='container'> 
                <Header category={category} setCategory={setCategory} word={word} setWord={setWord} setMeanings={setMeanings} />
                <Definitions word={word} meanings={meanings} category={category}/>
            </Container>
        </div>
    )
}

export default App
