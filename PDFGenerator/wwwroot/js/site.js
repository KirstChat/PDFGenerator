const uri = 'api/pdfcreator';

function addItem() {
    const addFirstName = document.getElementById('fName');
    const addSurname = document.getElementById('surname');
    const addBody = document.getElementById('body');
    const alert = document.getElementById('alert');

    const item = {
        "FirstName": addFirstName.value.trim(),
        "Surname": addSurname.value.trim(),
        "Body": addBody.value.trim(),
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
        .then(data => {
            addFirstName.value = '';
            addSurname.value = '';
            addBody.value = '';

            document.getElementById('alert').innerHTML = data +
                "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
                "<div><button id='openPdf' onclick='getPdf()' class='btn btn-success' value=" + data.substring(34, 70) + ">Open PDF</button></div>";
            
            alert.classList.remove('d-none');
        })
        .catch(error => console.error('Unable to generate PDF.', error));
}

function getPdf() {
    const documentId = document.getElementById('openPdf').value;

    fetch(`${uri}/${documentId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.blob())
        .then(data => {
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(data);
            link.target = '_blank';
            link.click();
        })
        .catch(error => console.error('Unable to update item.', error));

    return false;
}