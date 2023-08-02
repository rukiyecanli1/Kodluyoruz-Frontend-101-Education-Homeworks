import { useState, useEffect } from 'react';



function Input({ addTodo, todosss }) {

    const [input, setInput] = useState("");

    useEffect(() => {
        //eğer todosss değişmişse formu ilk haline getirmek için
        // useEffect() kullanabilirim
        setInput("");
    }, [todosss]);



    const onChangeInput = (event) => {

        // if (input === "") {
        //     return false; // formu göndermeyi engelliyor
        // }
        if (event.key === 'Enter') {
           
            addTodo([...todosss, {name: event.target.value, state1 : false}]); 
            console.log("buraya kadar pro yok")
        }
    }




    return (

        <section >
            <header className="header">
                <h1>todos</h1>

                <input className="new-todo" placeholder="What needs to be done?" onKeyDown={onChangeInput} autoFocus />

            </header>

        
        </section>


    );

}

export default Input;
