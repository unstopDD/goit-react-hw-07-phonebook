const BASE_URL = 'http://localhost:4040';

export function fetchContacts() {
  return fetch(`${BASE_URL}/contacts`).then(res => res.json());
}

// export function fetchContactById(contactID) {
//   const url = `${BASE_URL}/contacts/${contactID}`;
//   return fetch(url).then(res => res.json());
// }

export function addContact(contact) {
  const url = `${BASE_URL}/contacts`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  };

  return fetch(url, options).then(res => res.json());
}

export function removeContact(contactID) {
  const url = `${BASE_URL}/contacts/${contactID}`;
  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(res => res.json());
}

// export function updateContactById(update, contactID) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };
//   return fetch(`${BASE_URL}/contacts/${contactID}`, options).then(res =>
//     res.json(),
//   );
// }
