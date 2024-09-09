document.addEventListener('DOMContentLoaded', () => {

    fetch("../components/timeline.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('timeline-container').innerHTML = data;
        })
        .catch(error => console.error('Error fetching timeline:', error));

    fetch("../components/championCard.html")
        .then(response => response.text())
        .then(data => {
            const champions = [
                { name: "Roger Federer", achievements: "8-time Wimbledon Champion" },
                { name: "Serena Williams", achievements: "7-time Wimbledon Champion" }
            ];

            const championContainer = document.getElementById('champions-container');
            champions.forEach(champion => {
                let championHtml = data.replace('{{name}}', champion.name).replace('{{achievements}}', champion.achievements);
                championContainer.innerHTML += championHtml;
            });
        })
        .catch(error => console.error('Error fetching champion cards:', error));

    fetch("../components/gallery.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('gallery-container').innerHTML = data;
        })
        .catch(error => console.error('Error fetching gallery:', error));

    fetch("../components/videoEmbed.html")
        .then(response => response.text())
        .then(data => {
            const videoUrls = [
                "https://www.youtube.com/embed/mnLdAeSXZv0?si=sgmarDSLmTPpc9N7",
                "https://www.youtube.com/embed/9gUvgm23qMU?si=2sPtFbIrb2uMuFzW",
            ];

            const videoContainer = document.getElementById('videos-container');
            videoUrls.forEach(url => {
                let videoHtml = data.replace('{{url}}', url);
                videoContainer.innerHTML += videoHtml;
            });
        })
        .catch(error => console.error('Error fetching videos:', error));

    const addTimelineInteractivity = () => {
        const timelineItems = document.querySelectorAll('.timeline-item');

        timelineItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('expanded');
            });
        });
    };

    document.getElementById('timeline-container').addEventListener('DOMSubtreeModified', addTimelineInteractivity);
});
