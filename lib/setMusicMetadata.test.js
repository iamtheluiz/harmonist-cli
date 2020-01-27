const chalk = require('chalk');

const setMusicMetadata = require('./setMusicMetadata');
const getMusicMetadata = require('./getMusicMetadata');

describe('set music metadata', () => {
  let consoleLogFunctionBackup = console.log;
  let consoleLogOutputData = "";

  // Capture console.log data
  console.log = (content) => { consoleLogOutputData = content };

  afterAll(() => {
    console.log = consoleLogFunctionBackup;
  });

  it('should set new music metadata', () => {
    setMusicMetadata({
      title: 'We Are One',
      artist: 'Vexento',
      album: 'We Are One'
    }, './test/WeAreOne.mp3');

    expect(consoleLogOutputData).toBe(chalk.green('Success!'));
  });
});