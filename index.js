fetch("https://web0final-project.herokuapp.com/data")
    .then(response=>response.json())
    .then(data=>{
        data.Sheet1.forEach(element => {
            console.log(element.A);
        });
    })