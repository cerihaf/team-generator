// returns html
function generateCard(employee) {
    return `<div class="col-lg-4 col-md-6 col-sm-12 mb-5">
    <div class="card">
        <div class="card-body p-0">
        <div class="bg-primary p-3 text-white">
            <h2 class="card-title">${employee.getName()}</h2>
            <p class="card-subtitle">
            <i class="bi bi-person-badge"></i> ${employee.getRole()}
            </p>
        </div>
        <div class="card-text">
            <ul class="list-group">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: ${employee.getEmail()}</li>
            <li class="list-group-item">${getExtraInfo(employee)}</li>
            </ul>
        </div>
        </div>
    </div>
</div>`
}

// returns extra information about the employee
function getExtraInfo(employee){
    switch(employee.getRole()){
        case "Manager":
            return "Office Number: " + employee.getOfficeNumber()
            break;
        case "Intern":
            return "School: " + employee.getSchool()
            break;
        case "Engineer":
            return "Github: " + employee.getGithub()
            break;
    }
}

module.exports = generateCard