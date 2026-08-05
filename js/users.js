function fetchUsers() {
    fetch('https://dummyjson.com/users') // Cambia esta URL por la real
        .then(response => response.json())
        .then(data => {
            const users = data.users; // Ajusta según la estructura de tu respuesta
            const userList = document.getElementById('user-list');
            userList.innerHTML = '';

            users.forEach(user => {
                const userCard = `<div class="col-md-4 mb-3">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">${user.email}</h5>
                                                    <p class="card-text">${user.id}</p>
                                                    <p class="card-text">${user.firstName}</p>
                                                    <p class="card-text">${user.age}</p>
                                                </div>
                                            </div>
                                        </div>`;
                userList.innerHTML += userCard
            });
        })
        document.addEventListener('DOMContentLoaded', fetchUsers);
}

async function deleteUser() {
    try {
        const response = await fetch('https://dummyjson.com/users/0', {
            method: 'DELETE',
        })
        const data = await response.json();
        if (response.ok) {
            console.log(data)
        } else {
            throw new Error(data.message);
        }

    } catch (error) {
        alert(error);
    }
}
