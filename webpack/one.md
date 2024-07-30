# webpack

- What is webpack?
    - webpack is static module bundler.

- What does this bulder do?
    - A  bundler goes through the package and create a dependency graph which consist of modules which the webapp requires to function.
    - Then based on the dependency graph it create a new package, which consist of bare minimum number of files(often just one).
    - This new package can then be plugged into the html file easily and used for the application.

- What does it mean by static module?
    - Static means that webpack generates a package at compile/build time and not at runtime.
    - By doing that, it provides optimizations, so that the server don't have to do any processing later on. 


## Core Concept
- Entry
- Output
- Loaders
- Plugins
- Mode


### Entry:
- The entry point (the file) where webpack begins building the dependency graph from.
- By default it's  `./src/index.js`


### Output
- The output file/directory where the webpack outputs/emits the new bundeled package.
- By defaults it's `./dist/main.js` file and `./dist` directory.


### Loaders
- By default, webpack only processes JS and JSON files. Loaders allows to process other
type of files and convert them into valid modules that can be added to dependency graph and used by application.


### Plugins
- Plugin provides additional transformation capabilities to perform a wider range of tasks such such as:
    - bundle optimizations
    - asset management
    - injection of environment varaibles etc.
- Muliple plugins can be added to the property as an array elements.


### Mode
- Mode parameter allows bundling optimizations corresponding to each environment specified as `Mode`.
- The values can either be `'development` , `'production'`, or `'none'`
- This value is injected as `process.env.NODE_ENV` env var.


