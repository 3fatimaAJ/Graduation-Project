const videos = [
    {
        src: 'https://www.youtube.com/embed/BdJvl02gJIU?si=ozZty0hwZkpmrp_F',
        description: 'Description for video 1',
        yesCount: 0,
        noCount: 0
    },
    {
        src: 'https://www.example.com/video2.mp4',
        description: 'Description for video 2',
        yesCount: 0,
        noCount: 0
    },
    // Add more videos as needed
];

const videoPlayer = document.getElementById('videoPlayer');
const videoDescription = document.getElementById('videoDescription');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const yesPercentageDisplay = document.getElementById('yesPercentage');
const noPercentageDisplay = document.getElementById('noPercentage');

let currentVideoIndex = Math.floor(Math.random() * videos.length);

function playRandomVideo() {
    videoPlayer.innerHTML = `<video width="100%" controls><source src="${videos[currentVideoIndex].src}" type="video/mp4">Your browser does not support the video tag.</video>`;
    videoDescription.textContent = videos[currentVideoIndex].description;
}

function updatePercentageDisplays() {
    const currentVideo = videos[currentVideoIndex];
    const totalCount = currentVideo.yesCount + currentVideo.noCount;
    const yesPercentage = totalCount === 0 ? 0 : Math.round((currentVideo.yesCount / totalCount) * 100);
    const noPercentage = 100 - yesPercentage;
    yesPercentageDisplay.textContent = `${yesPercentage}%`;
    noPercentageDisplay.textContent = `${noPercentage}%`;
}

yesButton.addEventListener('click', () => {
    // Handle 'Yes' button click
    videos[currentVideoIndex].yesCount++;
    updatePercentageDisplays();
    currentVideoIndex = Math.floor(Math.random() * videos.length);
    playRandomVideo();
});

noButton.addEventListener('click', () => {
    // Handle 'No' button click
    videos[currentVideoIndex].noCount++;
    updatePercentageDisplays();
    currentVideoIndex = Math.floor(Math.random() * videos.length);
    playRandomVideo();
});

// Initial video play
playRandomVideo();
