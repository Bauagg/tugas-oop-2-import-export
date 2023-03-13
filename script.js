class table {
    constructor(isiTabel) {
        this.tabel = isiTabel;
    }

    createHaeder(data) {
        let open = "<thead><tr>";
        let closs = "</tr></thead";
        data.forEach(function (d) {
            open += `<th>${d}</th>`;
        });

        return open + closs;
    }

    createBody(data) {
        let open = "<body>"
        let closs = "</body"

        data.forEach(function (d) {
            open += `
            <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            </tr>`;
        })
        return open + closs;
    }

    render(element) {
        let table =
            "<table class ='table table hover'>" +
            this.createHaeder(this.tabel.colom) +
            this.createBody(this.tabel.data) +
            "</table>";
        element.innerHTML = table;
    }
}

const dataContent = new table({
    colom: ["nama", "email"],
    data: [
        ["A. Mambaus Sholihin", "bagas1234@gmail.com"],
        ["Melinda Aprilia Malik", "april1234@gmail.com"]
    ]
});

const app = document.getElementById('app');
dataContent.render(app);

export default dataContent;
export { app };

export { createHaeder, createBody, render }





