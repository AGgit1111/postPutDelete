/* POST is used to send data to a server to send data to a server to create a new source.
   - Typically used when submitting form data or uploading a file.
   - Example: Creating a new user, posting a message, or new blog post. */
const postData = {
    userId: 1,
    title: 'poo',
    body: 'nar',
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error: ' + error));

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.error('Error: ' + error);
//     })

/* PUT is used to send data to a server to update an existing resource.
   - It replaces the entire resource with the provided data.
   - Example: Updating user details or updating and saving changes to a blog post. */
const putData = {
    id: 1,
    title: 'updated title',
    body: 'updated body',
    userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(putData),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error: ' + error));

/* DELETE is used to delete a resource from the server.
   - Example: Deleting a user or a post. */
fetch('https://jsonplaceholder.typicode.com/posts/2', {
    method: 'DELETE',
})
    .then(() => console.log('Post deleted'))
    .catch(error => console.error('Error: ' + error));