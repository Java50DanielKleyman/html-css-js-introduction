export class Table {
    //data.id
    //data[obj.fieldName]
    #schema //array of objects {columnName: <string>, fieldName: <string>}
    #tbodyElement
    constructor(parentId, tableName, schema) {
        const parentElement = document.getElementById(parentId);
        this.#schema = schema;
        if (!parentElement) {
            throw `wrong parentId ${parentId}`
        }
        parentElement.innerHTML = ` <h3 class="table-logo">${tableName} </h3>
        <table class="center">
            <thead>
                <tr>
                    ${getHeader(schema)}                    
                </tr>
            </thead>
            <tbody id="${tableName}">
               
            </tbody>
        </table>`
        this.#tbodyElement = document.getElementById(tableName);
    }
    addRow(array) {
        this.#tbodyElement.innerHTML = getRow(array, this.#schema);
    }
}
function getHeader(schema) {
    return schema.map(obj => `<th>${obj.columnName}</th>`).join('');
}
function getRow(array, schema) {
    return array.map((obj) => `<tr>${getTds(obj, schema)} </tr>`
    ).join('')
}
function getTds(data, schema) {
    return schema.map(obj => `<td>${data[obj.fieldName]}</td>`).join('')
}
