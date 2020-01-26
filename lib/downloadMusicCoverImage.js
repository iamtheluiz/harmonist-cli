const download = require('image-downloader');

module.exports = async (url, destination) => {
  if (url) {
    const { filename } = await download.image({
      url,
      dest: destination
    });

    return filename;
  }
  return null;
}