// Función para registrar un cliente
async function createCustomer() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    try {
        // Llamada a microservicio de creación de cliente
        const response = await fetch("http://127.0.0.1:5000/customer", {
            method: "POST", // Asegúrate de usar POST aquí
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                PhoneNumber: phoneNumber
            })
        });

        const data = await response.json();

        // Verificación de éxito
        if (response.ok) {
            alert("Customer created successfully!");
        } else {
            alert("Error: " + data.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to create customer");
    }
}

// Función para obtener la información de un cliente
async function getCustomer() {
    const customerId = document.getElementById('customerId').value;

    try {
        // Llamada a microservicio de obtención de cliente
        const response = await fetch(`http://localhost:5000/customer/${customerId}`, {
            method: 'GET',
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('customerDetails').innerHTML = `
                <strong>Customer Information:</strong><br>
                CustomerID: ${result.CustomerID}<br>
                FirstName: ${result.FirstName}<br>
                LastName: ${result.LastName}<br>
                Email: ${result.Email}<br>
                PhoneNumber: ${result.PhoneNumber}<br>
                Address: ${result.Address}<br>
                CreatedAt: ${result.CreatedAt}<br>
                UpdatedAt: ${result.UpdatedAt}<br>
            `;
        } else {
            alert('Error fetching customer: ' + result.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to fetch customer");
    }
}

// Agregar event listeners a los botones
document.getElementById('createCustomerBtn').addEventListener('click', createCustomer);
document.getElementById('getCustomerBtn').addEventListener('click', getCustomer);
