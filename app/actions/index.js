//action:(1.是行为的抽象；2.是普通JS对象；3.一般由方法生成；4.必须有一个type)
//用户触发的行为抽象


//todo list
let nextTodoId =0;
export const addTodo = (text) =>{
	
	return{
		type: "ADD_TODO",
		id: nextTodoId++,
		text
	}
}
// 状态筛选
export const setVisibility = (filter) =>{
	
	return {
		
		type: "SET_VISIBILITY",
		filter
	}
	
}
//点击列表项
export const toggleTodo = (id) =>{
	
	return {
		
			type: "TOGGLE_TODO",
			id
	}
}




