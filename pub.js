const pubButton = document.getElementById('pubButton');
const publicationInput = document.getElementById('publicationInput');
const publication = document.getElementById('publication');

pubButton.addEventListener('click', () => {
    const publicationText = publicationInput.value.trim();
    if (publicationText) {
        const publicationDiv = document.createElement('div');
        publicationDiv.classList.add('publication');

        const publicationContent = document.createElement('p');
        publicationContent.textContent = publicationText;
        publicationDiv.appendChild(publicationContent);

        const commentInput = document.createElement('textarea');
        commentInput.classList.add('commentInput');
        commentInput.rows = 2;
        commentInput.placeholder = 'Write a comment...';

        const addCommentButton = document.createElement('button');
        addCommentButton.textContent = 'Add a comment';
        addCommentButton.classList.add('addCommentButton');

        addCommentButton.addEventListener('click', () => {
            const commentText = commentInput.value.trim();
            if (commentText) {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.textContent = commentText;
                publicationDiv.appendChild(commentDiv);
                commentInput.value = '';
            }
        });

        publicationDiv.append(commentInput, addCommentButton);
        publication.appendChild(publicationDiv);
        publicationInput.value = '';
    }
});
