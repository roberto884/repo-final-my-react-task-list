import { noRepeat } from "../utils/arrayFunctionalities";


export const tasksInitialState = JSON.parse(localStorage.getItem("tasks") ? localStorage.getItem("tasks") : "[]");

export const tasksReducer = (state, { type, task, taskId, tasks }) => {
    let modifiedState = state;
    switch (type) {

        case "add":
            modifiedState = [
                ...modifiedState,
                task
            ]
            localStorage.setItem("tasks", JSON.stringify([...modifiedState]))
            return [...modifiedState];
        case "delete":
            modifiedState = state.filter((task) => task.id !== taskId);
            localStorage.setItem("tasks", JSON.stringify([...modifiedState]))
            return [...modifiedState];
        case "modify":
            modifiedState = state.map((taskItem) => {
                if (taskItem.id === taskId) {
                    return {
                        ...taskItem,
                        title: task.title,
                        content: task.content
                    }
                }
                else {
                    return taskItem
                }
            })
            localStorage.setItem("tasks", JSON.stringify([...modifiedState]));
            return [...modifiedState];
        case "completed":
            modifiedState = state.map((taskItem) => {
                if (taskItem.id === taskId) {
                    return {
                        ...taskItem,
                        completed: !taskItem.completed
                    }
                } else {
                    return taskItem;
                }
            })
            localStorage.setItem("tasks", JSON.stringify([...modifiedState]))
            return [...modifiedState];
        case "combine":
        default:
            return [...modifiedState]

    }

}