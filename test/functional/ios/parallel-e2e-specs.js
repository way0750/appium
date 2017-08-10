// transpile:mocha
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import wd from 'wd';
import { main as appiumServer } from '../../../lib/main';
import { TEST_HOST, TEST_PORT, MOCHA_TIMEOUT } from '../../helpers';
import { system } from 'appium-support';
import xcode from 'appium-xcode';
import sampleApps from 'sample-apps';


chai.use(chaiAsPromised);
const should = chai.should();

const shouldStartServer = process.env.USE_RUNNING_SERVER !== "0";
const caps = {
  automationName: 'xcuitest',
  platformName: 'iOS',
  platformVersion: '10.3',
  deviceName: 'iPhone 6',
  app: sampleApps('UICatalog-iphonesimulator'),
};

describe('XCUITest - parallel', function () {
  this.timeout(MOCHA_TIMEOUT);

  let server;
  before(async function () {
    if (!await system.isMac() || (await xcode.getVersion(true)).major < 9) {
      return this.skip();
    }

    if (shouldStartServer) {
      let args = {port: TEST_PORT, host: TEST_HOST};
      server = await appiumServer(args);
    }
  });
  after(async function () {
    if (server) {
      await server.close();
    }
  });

  it('should start a session and get status', async function () {
    let driver = wd.promiseChainRemote(TEST_HOST, TEST_PORT);
    let [sessionId] = await driver.init(caps);
    should.exist(sessionId);

    let status = await driver.status();
    status.build.should.exist;

    await driver.quit();
  });
});
