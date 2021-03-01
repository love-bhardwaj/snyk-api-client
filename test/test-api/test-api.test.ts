import { Test } from '../../src/index';
import utilFunctions from '../testUtils';

let orgId: string;

describe('Test API test', () => {
  describe('GET: Test public Maven package', () => {
    const data = {
      groupId: 'org.apache.flex.blazeds',
      artifactId: 'blazeds',
      version: '4.7.2',
    };

    it('Should test the public package and return results with query params', async () => {
      orgId = await utilFunctions.getOrgId();
      const res = await Test.testMavenPackage(data, {
        queryParams: { org: orgId, repository: 'https://repo1.maven.org/maven2' },
      });
      utilFunctions.expect200(res);
    });

    it('Should test the public package and return results without query params', async () => {
      const res = await Test.testMavenPackage(data);
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Test Maven file', () => {
    const requestBody = {
      encoding: 'plain',
      files: {
        target: {
          contents:
            '<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd"> <modelVersion>4.0.0</modelVersion> <parent> <artifactId>io.snyk.example</artifactId> <groupId>parent</groupId> <version>1.0-SNAPSHOT</version> </parent> <artifactId>my-project</artifactId> <dependencies> <dependency> <groupId>axis</groupId> <artifactId>axis</artifactId> <version>1.4</version> </dependency> </dependencies> </project>\\n',
        },
        additional: [
          {
            contents:
              '<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd"> <modelVersion>4.0.0</modelVersion> <artifactId>io.snyk.example</artifactId> <groupId>parent</groupId> <version>1.0-SNAPSHOT</version> <dependencies> <dependency> <groupId>org.apache.zookeeper</groupId> <artifactId>zookeeper</artifactId> <version>3.5</version> </dependency> <dependency> <groupId>org.aspectj</groupId> <artifactId>aspectjweaver</artifactId> <version>1.8.2</version> </dependency> </dependencies> </project>\\n',
          },
        ],
      },
    };

    it('Should test the file and return the results', async () => {
      const res = await Test.testMavenFile({ requestBody });
      utilFunctions.expect200(res);
    });
  });

  describe('GET: Test public NPM pacakge', () => {
    it('Should test the public pacakge and return results', async () => {
      const res = await Test.testNpmPackage({ packageName: '@angular/core', version: '4.3.2' });
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Test NPM file', () => {
    const requestBody = {
      encoding: 'plain',
      files: {
        target: {
          contents:
            '{ "name": "shallow-goof", "version": "0.0.1", "description": "A vulnerable demo application", "homepage": "https://snyk.io/", "repository": { "type": "git", "url": "https://github.com/Snyk/shallow-goof" }, "dependencies": { "node-uuid": "1.4.0", "qs": "0.0.6" } }',
        },
        additional: [
          {
            contents:
              '{ "name": "shallow-goof", "version": "0.0.1", "lockfileVersion": 1, "requires": true, "dependencies": { "node-uuid": { "version": "1.4.0", "resolved": "https://registry.npmjs.org/node-uuid/-/node-uuid-1.4.0.tgz", "integrity": "sha1-B/myM3Vy/2J1x3Xh1IUT86RdemU=" }, "qs": { "version": "0.0.6", "resolved": "https://registry.npmjs.org/qs/-/qs-0.0.6.tgz", "integrity": "sha1-SBZZt+W/al6omAEN5a7TXrRp4SQ=" } } }',
          },
        ],
      },
    };

    it('Should test the package and return the results', async () => {
      const res = await Test.testNpmFile({ requestBody });
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Test Gopkg file', () => {
    const requestBody = {
      encoding: 'plain',
      files: {
        target: {
          contents:
            '"# Gopkg.toml example\\r\\n#\\r\\n# Refer to https://golang.github.io/dep/docs/Gopkg.toml.html\\r\\n# for detailed Gopkg.toml documentation.\\r\\n#\\r\\n# required = [\\"github.com/user/thing/cmd/thing\\"]\\r\\n# ignored = [\\"github.com/user/project/pkgX\\", \\"bitbucket.org/user/project/pkgA/pkgY\\"]\\r\\n#\\r\\n# [[constraint]]\\r\\n#   name = \\"github.com/user/project\\"\\r\\n#   version = \\"1.0.0\\"\\r\\n#\\r\\n# [[constraint]]\\r\\n#   name = \\"github.com/user/project2\\"\\r\\n#   branch = \\"dev\\"\\r\\n#   source = \\"github.com/myfork/project2\\"\\r\\n#\\r\\n# [[override]]\\r\\n#   name = \\"github.com/x/y\\"\\r\\n#   version = \\"2.4.0\\"\\r\\n#\\r\\n# [prune]\\r\\n#   non-go = false\\r\\n#   go-tests = true\\r\\n#   unused-packages = true\\r\\n\\r\\n\\r\\n[[constraint]]\\r\\n  branch = \\"master\\"\\r\\n  name = \\"github.com/asaskevich/EventBus\\"\\r\\n\\r\\n[[constraint]]\\r\\n  branch = \\"master\\"\\r\\n  name = \\"github.com/cloudevents/sdk-go\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/gin-gonic/gin\\"\\r\\n  version = \\"1.3.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/golang/protobuf\\"\\r\\n  version = \\"1.2.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/goph/emperror\\"\\r\\n  version = \\"0.14.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/goph/logur\\"\\r\\n  version = \\"0.5.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/patrickmn/go-cache\\"\\r\\n  version = \\"2.1.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/pkg/errors\\"\\r\\n  version = \\"0.8.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/satori/go.uuid\\"\\r\\n  version = \\"1.2.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/sirupsen/logrus\\"\\r\\n  version = \\"1.2.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/spf13/cast\\"\\r\\n  version = \\"1.3.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/spf13/pflag\\"\\r\\n  version = \\"1.0.3\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"github.com/spf13/viper\\"\\r\\n  version = \\"1.3.1\\"\\r\\n\\r\\n[[constraint]]\\r\\n  branch = \\"master\\"\\r\\n  name = \\"golang.org/x/net\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"google.golang.org/grpc\\"\\r\\n  version = \\"1.17.0\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"gopkg.in/go-playground/validator.v8\\"\\r\\n  version = \\"8.18.2\\"\\r\\n\\r\\n[[constraint]]\\r\\n  name = \\"gopkg.in/yaml.v2\\"\\r\\n  version = \\"2.2.2\\"\\r\\n\\r\\n[prune]\\r\\n  go-tests = true\\r\\n  unused-packages = true"',
        },
        additional: [
          {
            contents:
              '"# This file is autogenerated, do not edit; changes may be undone by the next \'dep ensure\'.\\r\\n\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:e2a1ff1174d564ed4b75a62757f4a9081ed3b8c99ed17e47eb252b048b4ff018\\"\\r\\n  name = \\"github.com/asaskevich/EventBus\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"d46933a94f05c6657d7b923fcf5ac563ee37ec79\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:b95c3763b72359370262246870366418c1d17446195e3c73921135c2537b9655\\"\\r\\n  name = \\"github.com/cloudevents/sdk-go\\"\\r\\n  packages = [\\r\\n    \\".\\",\\r\\n    \\"v02\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"3a3d34a7231e937edfa20964dc25c29081c3ebea\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:abeb38ade3f32a92943e5be54f55ed6d6e3b6602761d74b4aab4c9dd45c18abd\\"\\r\\n  name = \\"github.com/fsnotify/fsnotify\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"c2828203cd70a50dcccfb2761f8b1f8ceef9a8e9\\"\\r\\n  version = \\"v1.4.7\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:36fe9527deed01d2a317617e59304eb2c4ce9f8a24115bcc5c2e37b3aee5bae4\\"\\r\\n  name = \\"github.com/gin-contrib/sse\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"22d885f9ecc78bf4ee5d72b937e4bbcdc58e8cae\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:d5083934eb25e45d17f72ffa86cae3814f4a9d6c073c4f16b64147169b245606\\"\\r\\n  name = \\"github.com/gin-gonic/gin\\"\\r\\n  packages = [\\r\\n    \\".\\",\\r\\n    \\"binding\\",\\r\\n    \\"json\\",\\r\\n    \\"render\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"b869fe1415e4b9eb52f247441830d502aece2d4d\\"\\r\\n  version = \\"v1.3.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:4c0989ca0bcd10799064318923b9bc2db6b4d6338dd75f3f2d86c3511aaaf5cf\\"\\r\\n  name = \\"github.com/golang/protobuf\\"\\r\\n  packages = [\\r\\n    \\"proto\\",\\r\\n    \\"ptypes\\",\\r\\n    \\"ptypes/any\\",\\r\\n    \\"ptypes/duration\\",\\r\\n    \\"ptypes/timestamp\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"aa810b61a9c79d51363740d207bb46cf8e620ed5\\"\\r\\n  version = \\"v1.2.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:4e0e5d786c35c402574cda1906195d9fbd76a35d2c921eb10199741faf4f0256\\"\\r\\n  name = \\"github.com/goph/emperror\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"b1b4a9b847ebc56299eb729faa942b89e9d8a562\\"\\r\\n  version = \\"v0.14.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:dd95856542089c3e0487299d6ac92f5f2941e97625b5a5754a483c7730e8dc89\\"\\r\\n  name = \\"github.com/goph/logur\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"111a952ccfacab0a90b9e4496da21d9f15187769\\"\\r\\n  version = \\"v0.5.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:c0d19ab64b32ce9fe5cf4ddceba78d5bc9807f0016db6b1183599da3dcc24d10\\"\\r\\n  name = \\"github.com/hashicorp/hcl\\"\\r\\n  packages = [\\r\\n    \\".\\",\\r\\n    \\"hcl/ast\\",\\r\\n    \\"hcl/parser\\",\\r\\n    \\"hcl/printer\\",\\r\\n    \\"hcl/scanner\\",\\r\\n    \\"hcl/strconv\\",\\r\\n    \\"hcl/token\\",\\r\\n    \\"json/parser\\",\\r\\n    \\"json/scanner\\",\\r\\n    \\"json/token\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"8cb6e5b959231cc1119e43259c4a608f9c51a241\\"\\r\\n  version = \\"v1.0.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:be97e109f627d3ba8edfef50c9c74f0d0c17cbe3a2e924a8985e4804a894f282\\"\\r\\n  name = \\"github.com/json-iterator/go\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"36b14963da70d11297d313183d7e6388c8510e1e\\"\\r\\n  version = \\"1.0.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:0a69a1c0db3591fcefb47f115b224592c8dfa4368b7ba9fae509d5e16cdc95c8\\"\\r\\n  name = \\"github.com/konsorten/go-windows-terminal-sequences\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"5c8c8bd35d3832f5d134ae1e1e375b69a4d25242\\"\\r\\n  version = \\"v1.0.1\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:c568d7727aa262c32bdf8a3f7db83614f7af0ed661474b24588de635c20024c7\\"\\r\\n  name = \\"github.com/magiconair/properties\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"c2353362d570a7bfa228149c62842019201cfb71\\"\\r\\n  version = \\"v1.8.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:fa610f9fe6a93f4a75e64c83673dfff9bf1a34bbb21e6102021b6bc7850834a3\\"\\r\\n  name = \\"github.com/mattn/go-isatty\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"57fdcb988a5c543893cc61bce354a6e24ab70022\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:53bc4cd4914cd7cd52139990d5170d6dc99067ae31c56530621b18b35fc30318\\"\\r\\n  name = \\"github.com/mitchellh/mapstructure\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"3536a929edddb9a5b34bd6861dc4a9647cb459fe\\"\\r\\n  version = \\"v1.1.2\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:808cdddf087fb64baeae67b8dfaee2069034d9704923a3cb8bd96a995421a625\\"\\r\\n  name = \\"github.com/patrickmn/go-cache\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"a3647f8e31d79543b2d0f0ae2fe5c379d72cedc0\\"\\r\\n  version = \\"v2.1.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:95741de3af260a92cc5c7f3f3061e85273f5a81b5db20d4bd68da74bd521675e\\"\\r\\n  name = \\"github.com/pelletier/go-toml\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"c01d1270ff3e442a8a57cddc1c92dc1138598194\\"\\r\\n  version = \\"v1.2.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:40e195917a951a8bf867cd05de2a46aaf1806c50cf92eebf4c16f78cd196f747\\"\\r\\n  name = \\"github.com/pkg/errors\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"645ef00459ed84a119197bfb8d8205042c6df63d\\"\\r\\n  version = \\"v0.8.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:274f67cb6fed9588ea2521ecdac05a6d62a8c51c074c1fccc6a49a40ba80e925\\"\\r\\n  name = \\"github.com/satori/go.uuid\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"f58768cc1a7a7e77a3bd49e98cdd21419399b6a3\\"\\r\\n  version = \\"v1.2.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:69b1cc331fca23d702bd72f860c6a647afd0aa9fcbc1d0659b1365e26546dd70\\"\\r\\n  name = \\"github.com/sirupsen/logrus\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"bcd833dfe83d3cebad139e4a29ed79cb2318bf95\\"\\r\\n  version = \\"v1.2.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:d707dbc1330c0ed177d4642d6ae102d5e2c847ebd0eb84562d0dc4f024531cfc\\"\\r\\n  name = \\"github.com/spf13/afero\\"\\r\\n  packages = [\\r\\n    \\".\\",\\r\\n    \\"mem\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"a5d6946387efe7d64d09dcba68cdd523dc1273a3\\"\\r\\n  version = \\"v1.2.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:08d65904057412fc0270fc4812a1c90c594186819243160dc779a402d4b6d0bc\\"\\r\\n  name = \\"github.com/spf13/cast\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"8c9545af88b134710ab1cd196795e7f2388358d7\\"\\r\\n  version = \\"v1.3.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:68ea4e23713989dc20b1bded5d9da2c5f9be14ff9885beef481848edd18c26cb\\"\\r\\n  name = \\"github.com/spf13/jwalterweatherman\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"4a4406e478ca629068e7768fc33f3f044173c0a6\\"\\r\\n  version = \\"v1.0.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:c1b1102241e7f645bc8e0c22ae352e8f0dc6484b6cb4d132fa9f24174e0119e2\\"\\r\\n  name = \\"github.com/spf13/pflag\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"298182f68c66c05229eb03ac171abe6e309ee79a\\"\\r\\n  version = \\"v1.0.3\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:de37e343c64582d7026bf8ab6ac5b22a72eac54f3a57020db31524affed9f423\\"\\r\\n  name = \\"github.com/spf13/viper\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"6d33b5a963d922d182c91e8a1c88d81fd150cfd4\\"\\r\\n  version = \\"v1.3.1\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:c268acaa4a4d94a467980e5e91452eb61c460145765293dc0aed48e5e9919cc6\\"\\r\\n  name = \\"github.com/ugorji/go\\"\\r\\n  packages = [\\"codec\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"c88ee250d0221a57af388746f5cf03768c21d6e2\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:38f553aff0273ad6f367cb0a0f8b6eecbaef8dc6cb8b50e57b6a81c1d5b1e332\\"\\r\\n  name = \\"golang.org/x/crypto\\"\\r\\n  packages = [\\"ssh/terminal\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"505ab145d0a99da450461ae2c1a9f6cd10d1f447\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:89a0cb976397aa9157a45bb2b896d0bcd07ee095ac975e0f03c53250c402265e\\"\\r\\n  name = \\"golang.org/x/net\\"\\r\\n  packages = [\\r\\n    \\"context\\",\\r\\n    \\"http/httpguts\\",\\r\\n    \\"http2\\",\\r\\n    \\"http2/hpack\\",\\r\\n    \\"idna\\",\\r\\n    \\"internal/timeseries\\",\\r\\n    \\"trace\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"e147a9138326bc0e9d4e179541ffd8af41cff8a9\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:ba8cbf57cfd92d5f8592b4aca1a35d92c162363d32aeabd5b12555f8896635e7\\"\\r\\n  name = \\"golang.org/x/sys\\"\\r\\n  packages = [\\r\\n    \\"unix\\",\\r\\n    \\"windows\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"4d1cda033e0619309c606fc686de3adcf599539e\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:a2ab62866c75542dd18d2b069fec854577a20211d7c0ea6ae746072a1dccdd18\\"\\r\\n  name = \\"golang.org/x/text\\"\\r\\n  packages = [\\r\\n    \\"collate\\",\\r\\n    \\"collate/build\\",\\r\\n    \\"internal/colltab\\",\\r\\n    \\"internal/gen\\",\\r\\n    \\"internal/tag\\",\\r\\n    \\"internal/triegen\\",\\r\\n    \\"internal/ucd\\",\\r\\n    \\"language\\",\\r\\n    \\"secure/bidirule\\",\\r\\n    \\"transform\\",\\r\\n    \\"unicode/bidi\\",\\r\\n    \\"unicode/cldr\\",\\r\\n    \\"unicode/norm\\",\\r\\n    \\"unicode/rangetable\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"f21a4dfb5e38f5895301dc265a8def02365cc3d0\\"\\r\\n  version = \\"v0.3.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  branch = \\"master\\"\\r\\n  digest = \\"1:077c1c599507b3b3e9156d17d36e1e61928ee9b53a5b420f10f28ebd4a0b275c\\"\\r\\n  name = \\"google.golang.org/genproto\\"\\r\\n  packages = [\\"googleapis/rpc/status\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"bd91e49a0898e27abb88c339b432fa53d7497ac0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:9edd250a3c46675d0679d87540b30c9ed253b19bd1fd1af08f4f5fb3c79fc487\\"\\r\\n  name = \\"google.golang.org/grpc\\"\\r\\n  packages = [\\r\\n    \\".\\",\\r\\n    \\"balancer\\",\\r\\n    \\"balancer/base\\",\\r\\n    \\"balancer/roundrobin\\",\\r\\n    \\"binarylog/grpc_binarylog_v1\\",\\r\\n    \\"codes\\",\\r\\n    \\"connectivity\\",\\r\\n    \\"credentials\\",\\r\\n    \\"credentials/internal\\",\\r\\n    \\"encoding\\",\\r\\n    \\"encoding/proto\\",\\r\\n    \\"grpclog\\",\\r\\n    \\"internal\\",\\r\\n    \\"internal/backoff\\",\\r\\n    \\"internal/binarylog\\",\\r\\n    \\"internal/channelz\\",\\r\\n    \\"internal/envconfig\\",\\r\\n    \\"internal/grpcrand\\",\\r\\n    \\"internal/grpcsync\\",\\r\\n    \\"internal/syscall\\",\\r\\n    \\"internal/transport\\",\\r\\n    \\"keepalive\\",\\r\\n    \\"metadata\\",\\r\\n    \\"naming\\",\\r\\n    \\"peer\\",\\r\\n    \\"resolver\\",\\r\\n    \\"resolver/dns\\",\\r\\n    \\"resolver/passthrough\\",\\r\\n    \\"stats\\",\\r\\n    \\"status\\",\\r\\n    \\"tap\\",\\r\\n  ]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"df014850f6dee74ba2fc94874043a9f3f75fbfd8\\"\\r\\n  version = \\"v1.17.0\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:cbc72c4c4886a918d6ab4b95e347ffe259846260f99ebdd8a198c2331cf2b2e9\\"\\r\\n  name = \\"gopkg.in/go-playground/validator.v8\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"5f1438d3fca68893a817e4a66806cea46a9e4ebf\\"\\r\\n  version = \\"v8.18.2\\"\\r\\n\\r\\n[[projects]]\\r\\n  digest = \\"1:4d2e5a73dc1500038e504a8d78b986630e3626dc027bc030ba5c75da257cdb96\\"\\r\\n  name = \\"gopkg.in/yaml.v2\\"\\r\\n  packages = [\\".\\"]\\r\\n  pruneopts = \\"UT\\"\\r\\n  revision = \\"51d6538a90f86fe93ac480b35f37b2be17fef232\\"\\r\\n  version = \\"v2.2.2\\"\\r\\n\\r\\n[solve-meta]\\r\\n  analyzer-name = \\"dep\\"\\r\\n  analyzer-version = 1\\r\\n  input-imports = [\\r\\n    \\"github.com/asaskevich/EventBus\\",\\r\\n    \\"github.com/cloudevents/sdk-go/v02\\",\\r\\n    \\"github.com/gin-gonic/gin\\",\\r\\n    \\"github.com/golang/protobuf/proto\\",\\r\\n    \\"github.com/goph/emperror\\",\\r\\n    \\"github.com/goph/logur\\",\\r\\n    \\"github.com/karlseguin/ccache\\",\\r\\n    \\"github.com/patrickmn/go-cache\\",\\r\\n    \\"github.com/pkg/errors\\",\\r\\n    \\"github.com/satori/go.uuid\\",\\r\\n    \\"github.com/sirupsen/logrus\\",\\r\\n    \\"github.com/spf13/cast\\",\\r\\n    \\"github.com/spf13/pflag\\",\\r\\n    \\"github.com/spf13/viper\\",\\r\\n    \\"golang.org/x/net/context\\",\\r\\n    \\"google.golang.org/grpc\\",\\r\\n    \\"gopkg.in/go-playground/validator.v8\\",\\r\\n    \\"gopkg.in/yaml.v2\\",\\r\\n  ]\\r\\n  solver-name = \\"gps-cdcl\\"\\r\\n  solver-version = 1"',
          },
        ],
      },
    };

    //   it('Should test the Gopkg.toml and a Gopkg.lock file', async () => {
    //     try {
    //       const res = await Test.testGopkgFile({ requestBody });
    //       utilFunctions.expect200(res);
    //       console.log('Response: ', res.response);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   });
  });

  describe('POST: Test vendor.json file', () => {
    const requestBody = {
      encoding: 'plain',
      files: {
        target: {
          contents:
            '{\\"comment\\":\\"\\",\\"ignore\\":\\"test\\",\\"package\\":[{\\"checksumSHA1\\":\\"o/3cn04KAiwC7NqNVvmfVTD+hgA=\\",\\"path\\":\\"github.com/Microsoft/go-winio\\",\\"revision\\":\\"78439966b38d69bf38227fbf57ac8a6fee70f69a\\",\\"revisionTime\\":\\"2017-08-04T20:09:54Z\\"},{\\"checksumSHA1\\":\\"GqIrOttKaO7k6HIaHQLPr3cY7rY=\\",\\"path\\":\\"github.com/containerd/continuity/pathdriver\\",\\"revision\\":\\"617902de2ab5e18974efd88a58eeef67ac82d127\\",\\"revisionTime\\":\\"2017-09-25T16:43:31Z\\"},{\\"checksumSHA1\\":\\"ndnAFCfsGC3upNQ6jAEwzxcurww=\\",\\"path\\":\\"github.com/docker/docker/pkg/longpath\\",\\"revision\\":\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\",\\"revisionTime\\":\\"2017-09-26T16:09:50Z\\"},{\\"checksumSHA1\\":\\"IVWozKA/coqhti24Ss2b1nLrTSg=\\",\\"path\\":\\"github.com/docker/docker/pkg/mount\\",\\"revision\\":\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\",\\"revisionTime\\":\\"2017-09-26T16:09:50Z\\"},{\\"checksumSHA1\\":\\"YdUAOhhc/C0zu+eYrJOJjDwr1/4=\\",\\"path\\":\\"github.com/docker/docker/pkg/symlink\\",\\"revision\\":\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\",\\"revisionTime\\":\\"2017-09-26T16:09:50Z\\"},{\\"checksumSHA1\\":\\"UEMAKQqAyL9hs6RWxesQuYMQ3+I=\\",\\"path\\":\\"github.com/docker/docker/pkg/system\\",\\"revision\\":\\"74a084162ce544fe995715ba47aa84d3d75b95c1\\",\\"revisionTime\\":\\"2017-09-26T16:09:50Z\\"},{\\"checksumSHA1\\":\\"UmXGieuTJQOzJPspPJTVKKKMiUA=\\",\\"path\\":\\"github.com/docker/go-units\\",\\"revision\\":\\"0dadbb0345b35ec7ef35e228dabb8de89a65bf52\\",\\"revisionTime\\":\\"2017-01-27T09:51:30Z\\"},{\\"checksumSHA1\\":\\"RCARG9BoOH6jwbqnuix2Ne3K26w=\\",\\"path\\":\\"github.com/docker/libcontainer\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"OVGl5SGmF1HZmaG6JRmkyWiycYA=\\",\\"path\\":\\"github.com/docker/libcontainer/cgroups\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"q56oWh80PeIBiE/8nQ/Emz18ZZ8=\\",\\"path\\":\\"github.com/docker/libcontainer/cgroups/fs\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"3NQtWwKOT4BlnSWn0tTsy/N+XhU=\\",\\"path\\":\\"github.com/docker/libcontainer/console\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"WPIuCuWS1RkrGCHBRZuOJku7ZBc=\\",\\"path\\":\\"github.com/docker/libcontainer/devices\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"HLo2E8AWKNCwE2p7ndEkKc4SPnM=\\",\\"path\\":\\"github.com/docker/libcontainer/label\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"KYcr4bHkervvLS5wuH9w1+EhflY=\\",\\"path\\":\\"github.com/docker/libcontainer/mount\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"tvHnvhbm17pLR/fA2WXWYlY9aDs=\\",\\"path\\":\\"github.com/docker/libcontainer/mount/nodes\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"k9+kwIouq8vqmodLrGFp+9I7Jxs=\\",\\"path\\":\\"github.com/docker/libcontainer/netlink\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"ndpCrSi/XKZNCCrkjpQ2cgMIxKA=\\",\\"path\\":\\"github.com/docker/libcontainer/network\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"cfgnX7wKfSHOJ4mbhKyjAWizl+s=\\",\\"path\\":\\"github.com/docker/libcontainer/selinux\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"M7/2WUk1uzgdqc5Ce/k9UcSyv1M=\\",\\"path\\":\\"github.com/docker/libcontainer/system\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"2ZMmNaPI3TM4WyMjCw+h1jErSr0=\\",\\"path\\":\\"github.com/docker/libcontainer/utils\\",\\"revision\\":\\"53eca435e63db58b06cf796d3a9326db5fd42253\\",\\"revisionTime\\":\\"2014-12-02T23:28:38Z\\",\\"version\\":\\"v1.4\\",\\"versionExact\\":\\"v1.4.0\\"},{\\"checksumSHA1\\":\\"rJab1YdNhQooDiBWNnt7TLWPyBU=\\",\\"path\\":\\"github.com/pkg/errors\\",\\"revision\\":\\"2b3a18b5f0fb6b4f9190549597d3f962c02bc5eb\\",\\"revisionTime\\":\\"2017-09-10T13:46:14Z\\"},{\\"checksumSHA1\\":\\"BYvROBsiyAXK4sq6yhDe8RgT4LM=\\",\\"path\\":\\"github.com/sirupsen/logrus\\",\\"revision\\":\\"89742aefa4b206dcf400792f3bd35b542998eb3b\\",\\"revisionTime\\":\\"2017-08-22T13:27:46Z\\"},{\\"checksumSHA1\\":\\"nqWNlnMmVpt628zzvyo6Yv2CX5Q=\\",\\"path\\":\\"golang.org/x/crypto/ssh/terminal\\",\\"revision\\":\\"847319b7fc94cab682988f93da778204da164588\\",\\"revisionTime\\":\\"2017-08-18T09:57:21Z\\"},{\\"checksumSHA1\\":\\"uggjqMBFNJd11oNco2kbkAT641w=\\",\\"path\\":\\"golang.org/x/sys/unix\\",\\"revision\\":\\"429f518978ab01db8bb6f44b66785088e7fba58b\\",\\"revisionTime\\":\\"2017-09-20T21:38:28Z\\"},{\\"checksumSHA1\\":\\"pBPFzDGt3AVSRffB7ffiUnruFUk=\\",\\"path\\":\\"golang.org/x/sys/windows\\",\\"revision\\":\\"429f518978ab01db8bb6f44b66785088e7fba58b\\",\\"revisionTime\\":\\"2017-09-20T21:38:28Z\\"},{\\"checksumSHA1\\":\\"o5NrWoSkC+ugoK9D6ragLSrXHw0=\\",\\"path\\":\\"gopkg.in/square/go-jose.v2\\",\\"revision\\":\\"296c7f1463ec9b712176dc804dea0173d06dc728\\",\\"revisionTime\\":\\"2016-11-17T00:42:38Z\\",\\"version\\":\\"v2.0\\",\\"versionExact\\":\\"v2.0.1\\"},{\\"checksumSHA1\\":\\"j94zYNLTvPSnfnqVKJ4LUf++uX4=\\",\\"path\\":\\"gopkg.in/square/go-jose.v2/cipher\\",\\"revision\\":\\"296c7f1463ec9b712176dc804dea0173d06dc728\\",\\"revisionTime\\":\\"2016-11-17T00:42:38Z\\",\\"version\\":\\"v2.0\\",\\"versionExact\\":\\"v2.0.1\\"},{\\"checksumSHA1\\":\\"JFun0lWY9eqd80Js2iWsehu1gc4=\\",\\"path\\":\\"gopkg.in/square/go-jose.v2/json\\",\\"revision\\":\\"296c7f1463ec9b712176dc804dea0173d06dc728\\",\\"revisionTime\\":\\"2016-11-17T00:42:38Z\\",\\"version\\":\\"v2.0\\",\\"versionExact\\":\\"v2.0.1\\"}],\\"rootPath\\":\\"with-vuln\\"}',
        },
      },
    };

    /*
      it('Should test the vendor.json file', async () => {
        try {
          const res = await Test.testVendorFile({ requestBody });
          utilFunctions.expect200(res);
          console.log('Response: ', res.response);
        } catch (error) {
          console.error(error);
        }
      });
      */
  });

  describe('POST: Test yarn file', () => {
    const requestBody = {
      encoding: 'plain',
      files: {
        target: {
          contents:
            '{ "name": "shallow-goof", "version": "0.0.1", "description": "A vulnerable demo application", "homepage": "https://snyk.io/", "repository": { "type": "git", "url": "https://github.com/Snyk/shallow-goof" }, "dependencies": { "node-uuid": "1.4.0", "qs": "0.0.6" } }',
        },
        additional: [
          {
            contents:
              '# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\\r\\n# yarn lockfile v1\\r\\n\\r\\n\\r\\nnode-uuid@1.4.0:\\r\\n  version \\"1.4.0\\"\\r\\n  resolved \\"https:\\/\\/registry.yarnpkg.com\\/node-uuid\\/-\\/node-uuid-1.4.0.tgz#07f9b2337572ff6275c775e1d48513f3a45d7a65\\"\\r\\n  integrity sha1-B\\/myM3Vy\\/2J1x3Xh1IUT86RdemU=\\r\\n\\r\\nqs@0.0.6:\\r\\n  version \\"0.0.6\\"\\r\\n  resolved \\"https:\\/\\/registry.yarnpkg.com\\/qs\\/-\\/qs-0.0.6.tgz#481659b7e5bf6a5ea898010de5aed35eb469e124\\"\\r\\n  integrity sha1-SBZZt+W\\/al6omAEN5a7TXrRp4SQ=\\r\\n',
          },
        ],
      },
    };
    /*
      it('Should test yarn file', async () => {
        const res = await Test.testYarnFile({ requestBody });
        utilFunctions.expect200(res);
      });
      */
  });

  describe('GET: Test Ruby Gems package', () => {
    const gemName = 'rails-html-sanitizer';
    const version = '1.0.3';
    /* Have been encountering a lot of issues from the API for this
    it('Should test Ruby Gems package', async () => {
      const res = await Test.testRubyGemsPackage({ gemName, version });
      utilFunctions.expect200(res);
    });

    it('Should test Ruby Gems package with query parameter', async () => {
      const res = await Test.testRubyGemsPackage({ gemName, version }, { queryParams: { org: orgId } });
      utilFunctions.expect200(res);
    });
    */
  });

  describe('POST: Test gemlock.file', () => {});

  describe('GET: Test Gradle package', () => {
    const group = 'org.apache.flex.blazeds';
    const name = 'blazeds';
    const version = '4.7.2';

    it('Should return the results', async () => {
      const res = await Test.testGradlePacakge({ group, name, version });
      utilFunctions.expect200(res);
    });

    it('Should return the results with query parameters', async () => {
      const res = await Test.testGradlePacakge(
        { group, name, version },
        { queryParams: { org: orgId, repository: 'https://repo1.maven.org/maven2' } },
      );
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Test gradle file', () => {});

  describe('GET: Test SBT package', () => {
    const groupId = 'org.apache.flex.blazeds';
    const artifactId = 'blazeds';
    const version = '4.7.2';
    const repository = 'https://repo1.maven.org/maven2';
    const org = orgId;

    it('Should return the results', async () => {
      const res = await Test.testSBTPackage({ groupId, artifactId, version });
      utilFunctions.expect200(res);
    });

    it('Shoul return the results with the query parameters', async () => {
      const res = await Test.testSBTPackage(
        { groupId, artifactId, version },
        { queryParams: { repository, org: orgId } },
      );
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Test SBT file', () => {});

  describe('GET: Test pip package', () => {
    const packageName = 'rsa';
    const version = '3.3';
    const org = orgId;

    it('Should return the results', async () => {
      const res = await Test.testPipPackage({ packageName, version });
      utilFunctions.expect200(res);
    });

    it('Should return the results with query parameter', async () => {
      const res = await Test.testPipPackage({ packageName, version }, { queryParams: { org: orgId } });
      utilFunctions.expect200(res);
    });
  });

  describe('POST: Test pip file', () => {});

  describe('POST: Test Dep Graph', () => {
    const requestBody = {
      depGraph: {
        schemaVersion: '1.2.0',
        pkgManager: {
          name: 'maven',
        },
        pkgs: [
          {
            id: 'app@1.0.0',
            info: {
              name: 'app',
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
              pkgId: 'app@1.0.0',
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

    it('Should return the test results', async () => {
      const res = await Test.testDepGraph({ requestBody });
      utilFunctions.expect200(res);
    });
  });
});
