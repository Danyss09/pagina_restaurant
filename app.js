// Crear un cliente
document.getElementById('createCustomerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    fetch('http://localhost:5000/customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, phoneNumber })
    })
    .then(response => response.json())
    .then(data => {
        alert('Customer created successfully!');
    })
    .catch(error => {
        console.error('Error creating customer:', error);
        alert('Error creating customer');
    });
});

// Obtener un cliente
document.getElementById('getCustomerButton').addEventListener('click', function () {
    const customerId = document.getElementById('customerId').value;

    fetch(`http://localhost:5000/customer/${customerId}`)
        .then(response => response.json())
        .then(data => {
            const customerDataDiv = document.getElementById('customerData');
            if (data.message) {
                customerDataDiv.innerHTML = `Error: ${data.message}`;
            } else {
                customerDataDiv.innerHTML = `
                    <p><strong>ID:</strong> ${data.CustomerID}</p>
                    <p><strong>Name:</strong> ${data.FirstName} ${data.LastName}</p>
                    <p><strong>Email:</strong> ${data.Email}</p>
                    <p><strong>Phone Number:</strong> ${data.PhoneNumber}</p>
                    <p><strong>Address:</strong> ${data.Address}</p>
                    <p><strong>Created At:</strong> ${data.CreatedAt}</p>
                    <p><strong>Updated At:</strong> ${data.UpdatedAt}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching customer:', error);
            alert('Error fetching customer');
        });
});

// Actualizar un cliente
document.getElementById('updateCustomerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const customerId = document.getElementById('updateCustomerId').value;
    const firstName = document.getElementById('updateFirstName').value;
    const lastName = document.getElementById('updateLastName').value;
    const email = document.getElementById('updateEmail').value;
    const phoneNumber = document.getElementById('updatePhoneNumber').value;

    fetch(`http://localhost:5000/customer/${customerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, phoneNumber })
    })
    .then(response => response.json())
    .then(data => {
        alert('Customer updated successfully!');
    })
    .catch(error => {
        console.error('Error updating customer:', error);
        alert('Error updating customer');
    });
});

// Eliminar un cliente
document.getElementById('deleteCustomerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const customerId = document.getElementById('deleteCustomerId').value;

    fetch(`http://localhost:5000/customer/${customerId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('Customer deleted successfully!');
    })
    .catch(error => {
        console.error('Error deleting customer:', error);
        alert('Error deleting customer');
    });
});
