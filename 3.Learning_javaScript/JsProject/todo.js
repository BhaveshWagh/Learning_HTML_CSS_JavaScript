var addBtn = document.getElementById('add');
var removeBtn = document.getElementById('remove');
var clearBtn = document.getElementById('clearAll')
var ul = document.getElementById('list')
var li;

addBtn.addEventListener('click',addItem);
function addItem(){
    // console.log('add button to add');
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if (item === '') {
        return alert("please add some todo's ")
        // Add p Tag & assign a value enter ur todo
    }
    else{
        // create li
        li = document.createElement('li')
        
        // create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')
        
        // create label
        var label = document.createElement('label')
        label.setAttribute('for', 'item') // optional
        
        //add these element on web page:
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label)

        ul.insertBefore(li, ul.childNodes[0])

        // li.className = 'visual'

        setTimeout(() => {
            li.className = 'visual'
        }, 2)
        input.value = '';
    }
}

removeBtn.addEventListener('click',removeItem);
function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
        
        // const element = li[index];
        // console.log(element);
        
    }
}

clearBtn.addEventListener('click',clearItem);
function clearItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0]) {
            ul.removeChild(li[index])
        }
        
    }
}