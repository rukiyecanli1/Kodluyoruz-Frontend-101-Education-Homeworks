import React from 'react';

function Buttons({ todosss, setActive, active, setCompleted, completed, setFilteredVal}) {


	

	
		

		const setValueByButton1 = () => {

	const actives = todosss.filter((todo) => {
			if (todo.state1 === false) {
				console.log(todo.name + " " + todo.state1);
				return todo;
			}
		})
		setActive([...active, ...actives]);
         setFilteredVal(1);
		};


		const setValueByButton2 = () => {
			const completeds = todosss.filter((todo) => {
				if (todo.state1 === true) {
					console.log(todo.name + " " + todo.state1);
					return todo;
				}
		  })
			

			
			setCompleted([...completed, ...completeds])
			setFilteredVal(2);

		};





		// const allButton = () => {
		//  todosss.map((todo) => {

		//  })
		// }



		// const activeButton= () => {
		// 	const actives = todosss.filter((todo) => {
		// 		if (todo.state1 == false){
		// 		console.log(todo.name+ " "+todo.state1);
		// 		return {name: todo.name, state1 : false};
		// 		}
		//      })

		// 	setActive([...active, ...actives]);

		//    }

		//    const completedButton= () => {
		// 	const completeds = todosss.filter((todo) => {
		// 		if (todo.state1 == true){
		// 		console.log(todo.name+ " "+todo.state1);
		// 		return {name: todo.name, state1 : true};
		// 		}
		//      })

		// 	setCompleted([...completed, ...completeds]);

		//    }



		return (
			<div >
				<footer className="footer">
					<span className="todo-count">
						<strong>2</strong>
						items left
					</span>

					<ul className="filters">
						<li>
							<a href="#/" className="selected" >All</a>
						</li>
						<li>
							<a href="#/" onClick={setValueByButton1} >Active </a>
						</li>
						<li>
							<a href="#/" onClick={setValueByButton2}>Completed </a>
						</li>
					</ul>

					<button className="clear-completed">
						Clear completed
					</button>
				</footer>

				{/* onClick={clearCompletedButton} onClick={completedButton} onClick={allButton} */}


			</div>
		);
	}

export default Buttons;
