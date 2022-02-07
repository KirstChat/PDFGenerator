const uri = 'api/pdfcreator';
let todos = [];

function addItem() {

    const item = {
        "FirstName": document.getElementById('first-name').value.trim(),
        "Surname": document.getElementById('surname').value.trim(),
        "Body": document.getElementById('body').value.trim(),
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .catch(error => console.error('Unable to generate PDF.', error));
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}
