# AssemblyScriptContract
NEAR Smart Contract Devlopment

WHat is Yarn:
arn is a package manager for JavaScript. It is similar to npm, the default package manager for the JavaScript runtime environment Node.js. Yarn was developed by Facebook, and is intended to be a faster and more reliable alternative to npm. It includes features such as offline mode, lockfile security, and faster dependency installation. Yarn is compatible with the npm registry, and can be used to install and manage packages from the npm registry in the same way that npm can.

Yarn is a modern package manager split into various packages. Its novel architecture allows to do things currently impossible with existing solutions:

Yarn supports plugins; adding a plugin is as simple as adding it into your repository
Yarn supports Node by default but isn't limited to it - plugins can add support for other languages
Yarn supports workspaces natively, and its CLI takes advantage of that
Yarn uses a bash-like portable shell to make package scripts portable across of Windows, Linux, and macOS
Yarn is first and foremost a Node API that can be used programmatically (via @yarnpkg/core)
Yarn is written in TypeScript and is fully type-checked

1. check if npm is installed
   $ npm -v

2. Initialize npm and fill in the details
   $ npm init

3. Check for yarn package manager
    $ yarn -v

4. Add NEAR SDK
     $ yarn add -D near-sdk-as

5. Create a new folder in root directory named "assembly" which compiler will search for smart contarct in this folder

6. create a file "asconfig.json" in the root directory. this will contain configurations for Assembly Split compiler. this extends asconfig.json




