const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts(params) {
    try { 
        const res = await fetch(BASE_URL);

        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.error("API Fetch Failed:", err.message);
        throw err;
    }
}

// part 3

import { getPosts } from "./api.js"

asynch function displayPosts() {
    const container = document.getElemenyByID("postContainer");
 
    try { 
        const posts = await getPosts();

        posts.slice(0, 5).forEacH(post => { 
            const div = document.createElement('div');
            div.innterHTML = `<h3>${post.title}</h3><p>${post.body}</p>`
        });
    } catch (err) {
        container.innterHTML = `<p style="color:red;">Failed to load posts:${err.message}</p>`;       
    }
}
displayPosts();