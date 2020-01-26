const fs = require('fs');

const downloadMusicCoverImage = require('./downloadMusicCoverImage');

describe('download music cover image', () => {
  beforeAll(() => {
    try {
      fs.unlinkSync('./test/0003664319_10.jpg');
    } catch (error) {
      
    }
  });

  it('should download music cover image from link', () => {
    async function startDownload() {
      const filename = await downloadMusicCoverImage('https://f4.bcbits.com/img/0003664319_10.jpg', './test');

      expect(fs.existsSync(filename)).toBe(true);
      expect(filename).toBe('test\\0003664319_10.jpg');
    }
    startDownload();
  });
});