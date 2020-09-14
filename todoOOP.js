const input = document.getElementById('input'),
      buttonadd = document.getElementById('add'),
      list = document.getElementById('list');

class Todo {
    constructor(){
        this.data = []
    }
    show(){
        list.innerHTML = "";
        for (let i = 0; i < this.data.length; i++) {
            const {text, date, completed} = this.data[i];
            list.innerHTML += `<li>${i + 1}. ${text} | ${date} | ${completed}
                <button onclick="todo.remove(${i})">🗑️</button>
                <button onclick="todo.edit(${i}, event)">✏️</button>
                <button onclick="todo.completeTask(${i}, event)">✔️</button>
            </li>`
        }
    }
    setTodo(value){
        this.data.push(
            {
                text: value,
                date: new Date(),
                completed: false,
            }
        )
        this.show()
    }
    remove(i) {
        this.data.splice(i,1);
        this.show();
    }
    edit(i, event){
        let elem = event.target.parentNode;
        elem.innerHTML = `<input type="text" onkeypress="todo.done(${i}, event)">`
    }
    done(i, event){
        if (event.which == 13) {
            this.data[i].text = event.target.value;
            this.show();
        }
    }
    completeTask(i){
        this.data[i].completed = true;
        this.show();
    }
};
let todo = new Todo;
buttonadd.addEventListener('click', () => 
todo.setTodo(input.value));



