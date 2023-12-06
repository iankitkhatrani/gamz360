const rows = document.querySelectorAll('.privacy-row');

rows.forEach((row) => {
    row.addEventListener('click', () => {
        row.classList.toggle('active');
    });
});
