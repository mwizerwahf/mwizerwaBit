// Blog search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Store the current page URL when clicking on blog links
    const blogLinks = document.querySelectorAll('.blog-card .read-more');
    blogLinks.forEach(link => {
        link.addEventListener('click', function() {
            sessionStorage.setItem('blogReturnUrl', window.location.href);
        });
    });

    const searchInput = document.getElementById('blog-search');
    const blogCards = document.querySelectorAll('.blog-card');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();

            blogCards.forEach(card => {
                const title = card.querySelector('h2').textContent.toLowerCase();
                const content = card.querySelector('p').textContent.toLowerCase();

                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Blog detail page functionality
    const blogData = {
        1: {
            title: 'Network Security Best Practices',
            date: 'Jan 15, 2024',
            author: 'Admin',
            comments: 12,
            image: 'images/blog1.jpg',
            content: `
                <p>Network security is more important than ever in today's digital landscape. With cyber threats evolving constantly, organizations need to stay ahead of potential vulnerabilities and implement robust security measures.</p>
                
                <h3>Key Security Measures</h3>
                <p>Here are some essential practices for maintaining network security:</p>
                <ul>
                    <li>Regular security audits</li>
                    <li>Up-to-date firewall configuration</li>
                    <li>Employee security training</li>
                    <li>Incident response planning</li>
                </ul>
                
                <p>Implementation of these measures requires careful planning and expertise...</p>
            `
        },
        // Add more blog entries as needed
    };

    // Load blog detail content
    const blogTitle = document.getElementById('blog-title');
    const blogDate = document.getElementById('blog-date');
    const blogAuthor = document.getElementById('blog-author');
    const blogComments = document.getElementById('blog-comments');
    const blogImage = document.getElementById('blog-image');
    const blogContent = document.getElementById('blog-content');

    if (blogTitle && window.location.pathname.includes('blog-detail.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const blogId = urlParams.get('id');
        const blog = blogData[blogId];

        if (blog) {
            document.title = `${blog.title} - MWIZERWA Bit`;
            blogTitle.textContent = blog.title;
            blogDate.innerHTML = `<i class="far fa-calendar"></i> ${blog.date}`;
            blogAuthor.innerHTML = `<i class="far fa-user"></i> ${blog.author}`;
            blogComments.innerHTML = `<i class="far fa-comments"></i> ${blog.comments} Comments`;
            blogImage.src = blog.image;
            blogImage.alt = blog.title;
            blogContent.innerHTML = blog.content;
        }
    }

    // Comment form handling
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add comment handling logic here
            alert('Comment functionality will be implemented with backend integration.');
        });
    }
});

function goBackToBlog(event) {
    event.preventDefault();
    const returnUrl = sessionStorage.getItem('blogReturnUrl');
    if (returnUrl) {
        window.location.href = returnUrl;
    } else {
        window.location.href = 'blog.html';
    }
}
