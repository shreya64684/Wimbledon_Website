fetch("../components/footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      })
      .catch(error => console.error('Error fetching footer:', error));