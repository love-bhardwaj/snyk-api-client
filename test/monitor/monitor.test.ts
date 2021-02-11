import { Monitor } from '../../src/index';
import utilFunctions from '../testUtils';

const requestBody = {
  depGraph: {
    schemaVersion: '1.2.0',
    pkgManager: {
      name: 'maven',
    },
    pkgs: [
      {
        id: 'my-maven-app@1.0.0',
        info: {
          name: 'my-maven-app',
          version: '1.0.0',
        },
      },
      {
        id: 'ch.qos.logback:logback-core@1.0.13',
        info: {
          name: 'ch.qos.logback:logback-core',
          version: '1.0.13',
        },
      },
    ],
    graph: {
      rootNodeId: 'root-node',
      nodes: [
        {
          nodeId: 'root-node',
          pkgId: 'my-maven-app@1.0.0',
          deps: [
            {
              nodeId: 'ch.qos.logback:logback-core@1.0.13',
            },
          ],
        },
        {
          nodeId: 'ch.qos.logback:logback-core@1.0.13',
          pkgId: 'ch.qos.logback:logback-core@1.0.13',
          deps: [],
        },
      ],
    },
  },
};

describe('POST: test monitor dep graph endpoint', () => {
  it('Should monitor the dep graph', async () => {
    const res = await Monitor.monitorDepGraph({ requestBody });
    utilFunctions.expect200(res);
  });
});
