

fetch("https://coronavirus-19-api.herokuapp.com/countries")
.then(api=>api.json())
.then(maindata =>{
    maindata.forEach(value =>{
        var table = `
        <tr>
            <td style='padding:10px;border-right:1px solid white';>${value.country}</td>
            <td style='padding:10px;border-right:1px solid white';>${value.cases}</td>
            <td style='padding:10px;border-right:1px solid white';>${value.todayCases}</td>
            <td style='padding:10px;border-right:1px solid white';>${value.deaths}</td>
            <td style='padding:10px;border-right:1px solid white';>${value.todayDeaths}</td>
            <td style='padding:10px;border-right:1px solid white';>${value.recovered}</td>
            <td style='padding:10px;border-right:1px solid white';>${value.active}</td>
            <td style='padding:10px;border-right:1px solid white';>${value.critical}</td>
            <td style='padding:10px;border-right:1px solid white';>${value.casesPerOneMillion}</td>
            <td style='padding:10px;border-right:1px solid white';>${value.deathsPerOneMillion}</td>
            <td style='padding:10px;border-right:1px solid white';>${value.totalTests}</td>
            <td style='padding:10px';>${value.testsPerOneMillion}</td>
            
        <tr>`;
        const covidData = document.querySelector(".tbody");
        covidData.insertAdjacentHTML("beforebegin",table)

    });

    
})






