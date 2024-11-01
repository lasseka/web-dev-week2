let taskArray = []
let nextId = 1;

function getAll() {
    return taskArray;
}

function addOne(task, completionStatus, dueDate){
    if(!task || !completionStatus || !dueDate){
        return false;
    }

    const newTask = {
        id: nextId++,
        task,
        completionStatus,
        dueDate

    };
    taskArray.push(newTask)
    return newTask;
}

function findById(id){
    const numericId = Number(id)
    const task = taskArray.find(item => item.id === numericId)
    return task || false;
}

function updateOneById(id, updatedData){
    const task = findById(id)
    if(task){
        if (updatedData.task) task.task = updatedData.task;
        if (updatedData.completionStatus) task.completionStatus = updatedData.completionStatus;
        if (updatedData.dueDate) task.dueDate = updatedData.dueDate;
        return task;
    }
    return false;
}

function deleteOneById(id){
    const task = findById(id)
    if(task){
        const initialLength = taskArray.length;
        taskArray = taskArray.filter(task => task.id !== Number(id))
        return taskArray.length < initialLength
    }
    return false;
}



if (require.main === module) {
    let task = addOne("groceries", false, "1/11/24");
    console.log(task)
    task = addOne("walk the dog", true, "30/10/24")
    console.log(task)
    console.log("getAll called:", getAll());
    console.log("findByAll called: ", findById(1))
    console.log("updateOneById called:", updateOneById(1, { age: 4, color: "Black" }));
    console.log("findById called after item updated:", findById(1));
    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;