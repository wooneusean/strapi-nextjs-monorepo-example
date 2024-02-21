# Strapi + Next.js Monorepo Example

- NPM workspaces
- Strapi v4
- Next.js 14

Simple monorepo example with Strapi v4 and Next.js 14.

## Important Notes

The purpose of this repo is to allow the Next.js project and Strapi project to have a shared folder where they can reference types, interface and whatnot from.

Doing this is easy for Next.js, simply add a `compilerOptions.paths` config in the Next.js `tsconfig.json` (`frontend/tsconfig.json`) file to point to the shared folder and it will work.

Doing this for Strapi is also somewhat easy, but not as straightforward as with Next.js. You must add the `shared` workspace (as declared in the root `package.json`) as a dependency to the Strapi `package.json` (`backend/package.json`) using the below command:

```sh
npm i ./shared -w backend # based on your root package.json
```

The reason behind why we can't use the `compilerOptions.paths` method in Strapi is because it needs the `compilerOptions.rootDir` to be set or else it will fail to run. Because of the `rootDir` option, adding a path that is above the level of the rootDir(in this case, our `shared` folder) will cause a `File is not under 'rootDir'` error.

This may not be the most perfect setup but do contribute if you feel like you can improve it.