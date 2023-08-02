import { useState, useEffect } from 'react';



function List({ addTodo, todosss ,active, completed, filteredVal}) {

    

    // useEffect(() => {
    //     //eğer contacts değişmişse formu ilk haline getirmek için
    //     // useEffect() kullanabilirim
    //     setInput("");
    // }, todosss);


   

    const removeTodo = (val) => { // val result index of component and item array
        const assoc = [...todosss];
        assoc.splice(val, 1);
        addTodo(assoc);
    }

    const changeStateOfTodo = (val) => { // val result index of component and item array
      
       todosss[val].state1 == true ? todosss[val].state1=false : todosss[val].state1=true ;
     
        console.log(todosss[val].state1+" List");
    }


    //isim ve numara girildiğinde form değişkeni addContact'e veriliyor
    //... eski verileri koruyarak atama yapıyoruz
    //  props.addContact([...props.currentContacts, form]); 
    // currentContacrt olmadan da bu işlemi şu şekilde gerçekleştiğrebilirdik:
    //addContact((prevState) => [...prevState, form]); 


    // const a = active.map((i) =>{
	// 	console.log(i.name + " "+ i.state +" list class");
	//  });

    console.log("fgggfvcfgbgb") ;
	//  console.log(active[0].name + " "+ active[0].state);
	//  console.log(active[1].name + " "+ active[1].state);
	// active.forEach(i => {
	// 	console.log( i.name  +"      "+i.state);
	
	//  });


    return (

        <section >
          
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {
                         (filteredVal === 0
                            ? todosss 
                            : (filteredVal === 1
                              ? (active)
                              : (completed)
                              )).map((todo, i) =>
                            <li className="completed" key={i}>
                                <div className="view">
                                    <input className="toggle " type="checkbox" onClick={() => changeStateOfTodo(i)} />
                                    <label>{todo.name}</label>
                                    <button className="destroy" onClick={() => removeTodo(i)}></button>
                                </div>
                            </li>
                        )
                    }
                </ul>
<br/>
<br/>
<br/>
               
               
            </section>
        </section>


    );

}

export default List;
