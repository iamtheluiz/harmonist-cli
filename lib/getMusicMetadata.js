const NodeID3 = require('node-id3');

module.exports = (filename) => {
  const { title, artist, album = null } = NodeID3.read(filename);

  return { title, artist, album };
}