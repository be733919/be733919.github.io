function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}

function showAddNew() {
    document.getElementById("filterContent").style.display = "none";
    document.getElementById("newContent").style.display = "block";
}

function filterArticles() {
    let opinionChecked = document.getElementById("opinionCheckbox").checked;
    let recipeChecked = document.getElementById("recipeCheckbox").checked;
    let updateChecked = document.getElementById("updateCheckbox").checked;

    let opinion = document.querySelectorAll(".opinion");
    opinion.forEach(function(article) {
        if (opinionChecked === true) {
            article.style.display = "block";
        }
        else {
            article.style.display = "none";
        }
    });

    let recipe = document.querySelectorAll(".recipe");
    recipe.forEach(function(article) {
        if (recipeChecked === true) {
            article.style.display = "block";
        }
        else {
            article.style.display = "none";
        }
    });

    let update = document.querySelectorAll(".update");
    update.forEach(function(article) {
        if (updateChecked === true) {
            article.style.display = "block";
        }
        else {
            article.style.display = "none";
        }
    });
}

function addNewArticle() {

    let title = document.getElementById("inputHeader").value;
    let text = document.getElementById("inputArticle").value;

    let type = "";
    let name = "";

    if (document.getElementById('opinionRadio').checked) {
        type = "opinion";
        name = "Opinion";
    } 
    else if (document.getElementById('recipeRadio').checked) {
        type = "recipe";
        name = "Recipe";
    } 
    else if (document.getElementById('lifeRadio').checked) {
        type = "update"; 
        name = "Update";
    }

    if (!title || !text || !type) {
        alert("Please fill out all fields and select an article type.");
        return;
    }

    let articleList = document.getElementById('articleList');
    let newArticle = document.createElement('article');
    newArticle.className = type;

    newArticle.innerHTML = `
                    <span class="marker">${type}</span>
                    <h2>${title}</h2>
                    <p>${text}</p>
                    <p><a href="moreDetails.html">Read more...</a></p>`;

    articleList.appendChild(newArticle);
}