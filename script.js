const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}


function dragStart() {
    this.className += ' hold'          // we are appending class hold with fill class and not just add the class
    setTimeout(() => this.className = 'invisible', 0)
    // console.log('drag start')
}

function dragEnd() {
    this.className = 'fill'
    // console.log('drag end')
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    // console.log('drag leave')
    this.className = 'empty'
}

function dragDrop() {
    // this.className = ''              // this too is cool animation
    this.className = "empty"
    this.append(fill)
    // console.log('drag drop')
}
