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

    expect(filename).toBe('WeAreOne.mp3');
  });

  it('should get the music file name and not show the help info to user', () => {
    process.argv.push('--help');  // Set help flag
    process.argv.push('--file', 'WeAreOne.mp3');

    const filename = getApplicationFlags();

    expect(filename).toBe('WeAreOne.mp3');
  });
});