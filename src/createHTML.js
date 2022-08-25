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

