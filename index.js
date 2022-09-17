//[left , top]
let finish = false
let Answer = [
    1 , 2 , 3 , 4 , 5 , 6 , 7 ,8 ,9
]

let Orders = [
     1 , 2 , 3 , 4 , 5 , 6 , 7 ,8 ,9
]
const positions = [
    [0, 0],
    [100, 0],
    [200, 0],
    [0, 100],
    [100, 100],
    [200, 100],
    [0, 200],
    [100, 200],
    [200, 200],
]

let boxStatus = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
]



// let boxStatus = [
//     [-1, 2, 4, -1],
//     [-1, 3, 5, 1],
//     [-1, -1, 6, 2],
//     [1, 5, 7, -1],
//     [2, 6, 8, 4],
//     [3, -1, 0, 5],
//     [4, 8, -1, -1],
//     [5, 0, -1, 7],
//     [6,-1,-1,8]
// ]

onLoad()


function onLoad() {
    const Squer = document.getElementById("square")
    Orders = Orders.sort(() => Math.random() - 0.5);
    const newOrders = []
    Orders.forEach((index1,index2)=>{
        const left = positions[index2][0];
        const top = positions[index2][1];
        const newBox = document.createElement("div");
        if(index1 !== 9){
            newBox.addEventListener('click', onClick)
            newBox.innerText = index1
            newBox.className = 'box'
        }
        newBox.style.left = left + 'px'
        newBox.style.top = top + 'px'
        newBox.id = `${index1}`
        Squer?.appendChild(newBox)
    })
    createMap(Orders);
}


function createMap(orders) {
    const empty = orders.indexOf(9)

    boxStatus = boxStatus.map(status=>{
       return status.fill(1)
    })
    

    // console.log(empty);
    switch (empty) {
        case 0://2 همسایه
        boxStatus[empty + 1][3] = 0
        boxStatus[empty + 3][0] = 0
        break;

        case 1://3 همسایه
        boxStatus[empty - 1][1] = 0
        boxStatus[empty + 1][3] = 0
        boxStatus[empty + 3][0] = 0
        break;

        case 2://2 همسایه
        boxStatus[empty - 1][1] = 0
        boxStatus[empty + 3][0] = 0
        break;

        case 3://3 همسایه
        boxStatus[empty - 3][2] = 0
        boxStatus[empty + 1][3] = 0
        boxStatus[empty + 3][0] = 0
        break;

        case 4://4 همسایه
        boxStatus[empty - 3][2] = 0
        boxStatus[empty + 1][3] = 0
        boxStatus[empty - 1][1] = 0
        boxStatus[empty + 3][0] = 0
        break;

        case 5://3 همسایه
        boxStatus[empty - 3][2] = 0
        boxStatus[empty - 1][1] = 0
        boxStatus[empty + 3][0] = 0
        break;

        case 6://2 همسایه
        boxStatus[empty - 3][2] = 0
        boxStatus[empty + 1][3] = 0
        break;

        case 7://3 همسایه
        boxStatus[empty - 3][2] = 0
        boxStatus[empty - 1][1] = 0
        boxStatus[empty + 1][3] = 0
        break;

        case 8://2 همسایه
        boxStatus[empty - 3][2] = 0
        boxStatus[empty - 1][1] = 0
        break;
        default:
            break;
    }

    // console.log(boxStatus);
}


function onClick({target}) {
    const id = target.id
    const index = Orders.indexOf(Number(id));
    const empty = Orders.indexOf(9)
    const status = boxStatus[index];
    const access = Move(status , id)
    if(access){
        [Orders[empty] ,Orders[index] ] = [ Orders[index] , Orders[empty]]
        createMap(Orders);
        if(JSON.stringify(Orders) == JSON.stringify(Answer) ){
            setTimeout(()=>{
                alert("finish")
            },1000)
        }
    }
    else{
        console.log("acess denied!");
    }
    // console.log(Orders);
}


function Move(status , id) {
    let access = false
    const dir = status.indexOf(0)
    switch (dir) {
        case 0://Up
        moveUp(id)
        access = true
        break;
        case 1://Right
        moveRight(id)
        access = true
        break;
        case 2://Down
        moveDown(id)
        access = true
        break;
        case 3://Left
        moveLeft(id)
        access = true
        break;
        default:
            break;
    }

    return access
}


function moveUp(id) {
    const element = document.getElementById(id);
    const top = Number(element.style.top.split('p')[0])
    element.style.top = top - 100 +'px';
    
}
function moveRight(id) {
    const element = document.getElementById(id);
    const left = Number(element.style.left.split('p')[0])
    element.style.left = left + 100 +'px';

    
}
function moveDown(id) {
    const element = document.getElementById(id);
    const top = Number(element.style.top.split('p')[0])
    element.style.top = top + 100 +'px';
    
}
function moveLeft(id) {
    const element = document.getElementById(id);
    const left = Number(element.style.left.split('p')[0])
    element.style.left = left - 100 +'px';
    
}








