export const BASE_URL = "https://api.lucia-movies.nomoredomains.icu";

export function register (name, password, email) {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "password": password,
            "email": email
        })
    })
        .then((res) => res.json())
}

export function authorize (password, email) {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        })
    })
        .then((response => response.json()))
        .then((data) => {
            if (data.token){
                localStorage.setItem('token', data.token);
            }
            return data;
        })
}

export function editUserData(token, name, email) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(res => res.json())
        .then(data => data)
}

export function getUserData(token) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
        .then(res => res.json())
        .then(data => data)
}
