const getApiRick = async() => {
    const respuesta = await fetch('https://rickandmortyapi.com/api/character/')
    const data = await respuesta.json()
    return data
}



const pintarTabla = async() => {
    const listaApiRick = await getApiRick();
    for (let i = 0; i < listaApiRick.results.length; i++) {
        document.getElementById("table").innerHTML += `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Species</th>
                    <th scope="col">Status</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${listaApiRick.results[i].image}></</td>
                    <td>${listaApiRick.results[i].name}</</td>
                    <td>${listaApiRick.results[i].species}</</td>
                    <td>${listaApiRick.results[i].status}</</td>
                    <td>${listaApiRick.results[i].origin.name}</</td>
                </tr>
            </tbody>
        </table>
        `
    }
}