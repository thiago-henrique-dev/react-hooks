import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)     
    const [fatorial, setFatorial] = useState(1)


        //#01 ex
    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        if(fatorial > 1000000){
            document.title = 'EItaaa'
        }
    }, [fatorial])

    // #02 ex
    const [status, setStatus] = useState('Impar')

    useEffect(function(){
        setStatus(number % 2 === 0 ? "Par" : "Impar")
    })

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <div className="center">
                <div>
                <span className="text">Fatorial:</span>
                <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className="input" 
                 value={number} onChange={e  => setNumber(e.target.value|| 0 )  } />
            </div>
            <SectionTitle title="Exercicio #02"/>
            <div className="center">
              <div>
              <span className="text">Status: </span>
                <span className="text red">{status}</span>
              </div>
            </div>
        </div>
    )
}

export default UseEffect
