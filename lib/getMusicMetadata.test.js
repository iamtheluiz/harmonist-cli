const NodeID3 = require('node-id3');

const getMusicMetadata = require('./getMusicMetadata');

describe('get music metadata', () => {
  beforeAll(() => {
    // Set default data
    NodeID3.write({
      title: 'We Are One',
      artist: 'Vexento',
      album: 'We Are One'
    }, './test/WeAreOne.mp3')
  });

  it('should get music name, author and album', () => {
    const metadata = getMusicMetadata('./test/WeAreOne.mp3');

    expect(metadata).toStrictEqual({
      title: 'We Are One',
      artist: 'Vexento',
      album: 'We Are One'
    });
  });
});