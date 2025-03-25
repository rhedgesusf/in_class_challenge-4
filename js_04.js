import { getPosts } from "./api.js"

async function displayPosts() {
    const container = document.getElemenyByID("postContainer");
 
    try { 
        const posts = await getPosts();

        posts.slice(0, 5).forEacH(post => { 
            const div = document.createElement('div');
            div.innterHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            container.appendChild(div);
        });
    } catch (err) {
        container.innterHTML = `<p style="color:red;">Failed to load posts:${err.message}</p>`;       
    }
}
displayPosts();