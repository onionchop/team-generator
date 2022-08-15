const renderTeam = teamMemberArr => {

    const generateManagerCard = manager => {
      return  `
      <div class="card" style="width: 18rem; margin: 16px">
        <div class="card-body"  style="background-color: #63990c;">
          <h5 class="card-title">${manager.name}</h5>
          <h6 class="card-title">Manager</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <a href="mailto:${manager.email}"><li class="list-group-item">Email: ${manager.email}</li></a>
          <li class="list-group-item">Office number: ${manager.officeNumber}</li>
        </ul>
      </div>
    `
    };

    const generateEngineerCard = engineer => {
        return  `
        <div class="card" style="width: 18rem; margin: 16px">
          <div class="card-body"  style="background-color: #63990c;">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-title">Engineer</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <a href="mailto:${engineer.email}"><li class="list-group-item">Email: ${engineer.email}</li></a>
            <a href="https://github.com/${engineer.getGithub()}" target="_blank"><li class="list-group-item">Github: ${engineer.getGithub()}</li></a>
          </ul>
        </div>
      `
      };
      const generateInternCard = intern => {
        return  `
        <div class="card" style="width: 18rem;  margin: 16px">
          <div class="card-body"  style="background-color: #63990c;">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-title">Intern</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <a href="mailto:${intern.email}"><li class="list-group-item">Email: ${intern.email}</li></a>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
        </div>
      `
      };
    
      const hmtl = [];

      html.push(teamMemberArr
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManagerCard(manager))
        )
    
    html.push(teamMemberArr
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineerCard(engineer))
        )
    html.push(teamMemberArr
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateInternCard(intern))
    )
    
    
     return html.join("")
    }
    
    
    module.exports = renderTeam;
    
    