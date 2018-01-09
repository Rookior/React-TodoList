//reducer:(1.是响应的抽象；2.纯方法（非存方法是指比如依赖当前的时间）)



const todo =(state, action) =>{
	
		switch (action.type){
			
			case "ADD_TODO":
				return{
					
					id: action.id,
					text: action.text,
					completted: false
				}
			
			case "TOGGLE_TODO":
				 if (state.id !== action.id) {  
	         return state
	       }  
				return Object.assign({}, state, {  // 把state和completed合并成一个对象返回
          completed: !state.completed
       	})
			default: 
        return state
		}
}

const todos =(state=[], action) =>{
	switch (action.type){
		 
		 case "ADD_TODO":
		 	
		 		return [
		 			...state,
		 			todo(undefined, action)
		 		]
		 
		 case "TOGGLE_TODO":
		 
		 	return state.map(t=>todo(t,action));
		 	
		 default: 		 
        return state
	}
	
}

export default todos;