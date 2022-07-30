window.addEventListener('DOMContentLoaded', () => {
    let toDoList = []

    
    let btnInput = document.getElementById('addItem');
    btnInput.addEventListener('click', function() {
        console.log('123');
        event.preventDefault();
        const value = document.getElementById('inputtask').value
        if (!!!value) {
            alert('Add a task!')
            return
        }
        addItemtoDoList(value)
    });
    


    // добавление таска в блок задач
    function addItemtoDoList(item) {
        if (item !== null) {
            const toDo = {
                id: Date.now(),
                name: item,
                completed: false
            }
            toDoList.push(toDo)
            document.getElementById('inputtask').value = ''
            const newElement = `<div class="itemadd mb-20">
            <input type="text" placeholder="Напишите задачу" value = '${item}'>
            <button type="button" class="login, addRemove" data-id = '${toDo.id}'>Remove</button>
            </div>`
            document.querySelector('.itemlist').insertAdjacentHTML('beforeend', newElement)
        }
    }



    // эта функция отвечает за удаление task
    function removeItemtoDoList(item) { // удаление элемента из массива (последнего)
        const myIndex = toDoList.indexOf(item)
        toDoList.splice(myIndex, 1)

    }
    // кнопка remove
    document.body.addEventListener("click", function (evt) {
        const removeButton = evt.target.classList.contains('addRemove')
        if (removeButton) {
            removeItemtoDoList(evt.target.dataset.id)
            evt.target.parentElement.remove()
        }
    });

});