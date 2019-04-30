# Example: `package-json-config`

> Read config from the `package.json` file of a parent module

## Scenario

You're writing an npm package and you want its users to be able to configure it by placing configuration options in the `package.json` file of their project. So your npm package needs to read its config out of their `package.json` file, which means you first need to find it and convert it to JSON.


## Implementation

This prototype has 2 folders: one that represents an npm package and one that represents the app using the package.


## Setup steps

1. Clone this Git repository.

1. Link `package-json-config`

    ```
    # From the example folder
    cd ..
    npm link
    ```

1. Link the npm package to avoid the need of publishing it

    ```
    cd example/my-package
    npm link
    npm link package-json-config
    ```

    You will `npm install package-json-config` (instead of `npm link`) in your npm package.

1. Install the linked npm package into the consuming application.

    ```
    cd ../your-app
    npm link my-package
    ```

## Run the scenarios

```
# From example/your-app
npm run root
npm run nested
```

Read `your-app/package.json` to see what these scripts do and to see the config (`npmPackageConfig`) that `my-package` will retrieve.


## Next steps

Write more scenarios to validate the prototype continues to work as expected.
