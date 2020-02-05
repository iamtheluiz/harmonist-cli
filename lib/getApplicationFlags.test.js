const getApplicationFlags = require('./getApplicationFlags');
const getHelpInfo = require('./getHelpInfo');

describe('Application Flags', () => {
  const processArgvBackup = [...process.argv];
  let consoleLogFunctionBackup = console.log;
  let consoleLogOutputData = "";

  // Capture console.log data
  console.log = (content) => { consoleLogOutputData = content };

  afterAll(() => {
    console.log = consoleLogFunctionBackup;
  });

  afterEach(() => {
    process.argv = [ ...processArgvBackup ];
  });

  it('should show how to get help', () => {
    const filename = getApplicationFlags();

    expect(consoleLogOutputData).toBe("If you need help, use: 'harmonist -h'");
    expect(filename).toBe(null);
  });

  it('should show the help info to user', () => {
    process.argv.push('--help');  // Set help flag

    const filename = getApplicationFlags();

    expect(consoleLogOutputData).toBe(getHelpInfo());
    expect(filename).toBe(null);
  });

  it('should get the music file name', () => {
    process.argv.push('--file', 'WeAreOne.mp3');

    const filename = getApplicationFlags();

    expect(filename).toStrictEqual({ content: 'WeAreOne.mp3', type: 'file' });
  });

  it('should get the music file name and not show the help info to user', () => {
    process.argv.push('--help');  // Set help flag
    process.argv.push('--file', 'WeAreOne.mp3');

    const filename = getApplicationFlags();

    expect(filename).toStrictEqual({ content: 'WeAreOne.mp3', type: 'file' });
  });

  it('should get music link', () => {
    process.argv.push('--link', 'https://www.youtube.com/watch?v=Ssvu2yncgWU');

    const link = getApplicationFlags();

    expect(link).toStrictEqual({ content: 'https://www.youtube.com/watch?v=Ssvu2yncgWU', type: 'link' });
  });
});