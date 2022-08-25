//creates Manager section/card 
const createManager = (manager) => {
    return `<div class="card">
    <div class="card-header">
        <h2>${manager.name}</h2>
        <h3>${manager.title}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>`
}

//creates Engineer section/card
const createEngineer = (engineer) => {
    return `<div class="card">
    <div class="card-header">
        <h2>${engineer.name}</h2>
        <h3>${engineer.title}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">Github: ${engineer.github}</li>
        </ul>
    </div>
</div>`
}


