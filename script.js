

To enhance the WayQueer Travel Society website, the JavaScript (`script.js`) can be used for several purposes, such as form validation, event handling, and dynamic content updates. Here are examples of how JavaScript can be applied to this website:

#### 1. Form Validation

Ensuring that the contact form is correctly filled before submission is crucial for user experience. Below is an example of JavaScript code for validating the contact form:

```javascript
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (!name || !email || !message) {
            alert("All fields are required.");
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
```

#### 2. Event Handling

JavaScript can handle various events to enhance interactivity. For example, highlighting navigation links when hovered over:

```javascript
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "#FFD700"; // Change color on hover
        });
        link.addEventListener("mouseout", function() {
            this.style.color = "#FFF"; // Revert color on mouse out
        });
    });
});
```

#### 3. Dynamic Content Updates

JavaScript can be used to dynamically load content, such as blog posts or testimonials, without refreshing the page. Here’s a basic example of loading blog posts dynamically:

```javascript
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.example.com/blog-posts')
        .then(response => response.json())
        .then(data => {
            const blogSection = document.getElementById("blog");
            data.posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.className = "post";
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="${post.url}">Read more</a>
                `;
                blogSection.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching blog posts:', error));
});
```

By incorporating these JavaScript functions, the WayQueer Travel Society website will provide a more interactive and user-friendly experience.

