import fs from 'fs';
import path from 'path';

export const graphqlPlugin = () => ({
  name: 'graphql-loader',  // Name of the plugin
  setup(build) {
    build.onLoad({ filter: /\.graphql$/ }, async (args) => {
      // Get the full path of the GraphQL file
      const filePath = path.resolve(args.path);

      // Read the file content
      const contents = fs.readFileSync(filePath, 'utf8');

      // Match GraphQL queries and mutations by their names
      const operations = {};
      const queryRegex = /(?:query|mutation)\s+(\w+)/g;
      let match;

      while ((match = queryRegex.exec(contents)) !== null) {
        const operationName = match[1];
        operations[operationName] = `export const ${operationName} = \`${contents}\`;`;
      }

      // Combine all the named exports into one string
      const exportContents = Object.values(operations).join('\n');

      // Return the content as JavaScript with named exports
      return {
        contents: exportContents,  // Export each operation as a named export
        loader: 'js',  // Treat it as a JavaScript file (this makes it importable)
      };
    });
  },
});
