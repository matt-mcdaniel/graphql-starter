const videoA = {
    id: 'a',
    title: 'Testing',
    duration: 120,
    watched: false
};

const videoB = {
    id: 'b',
    title: 'Nope',
    duration: 100,
    watched: true
};

const videos = [videoA, videoB];

const getVideos = () =>
    new Promise(resolve => {
        return resolve(videos);
    });

const getVideoById = id =>
    new Promise(resolve => {
        const [video] = videos.filter(video => video.id === id);

        resolve(video);
    });

const createVideo = ({title, duration, released}) => {
    const video = {
        id: new Buffer(title, 'utf8').toString('base64'),
        title,
        duration,
        released
    };

    videos.push(video);

    return video;
};

exports.getVideoById = getVideoById;
exports.getVideos = getVideos;
exports.createVideo = createVideo;
