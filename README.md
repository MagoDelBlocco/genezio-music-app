# genezio-music-app
An example music player app that uses a REST API for playlist functionalities, and RPC for playing music.

## Prerequisites:
Install genezio using
`npm install genezio`

## The RPC part:
- Open a terminal and run `genezio login`. A browser window will be opened in order to log in with your genezio account.

- There is no need to initialize the `genezio` project, as the `genezio.yaml` is already provided. You may run `genezio init` again if you want to change the deployment parameters.

- Use the command `genezio addClass hello.js` to add the class to the bundle. Execute `genezio local` to test it locally or `genezio deploy –backend` to deploy it on the genezio infrastructure.

## The REST part:
- Run `genezio addClass index.js http` to add this class to the bundle. Run `genezio local` to deploy it locally, or `genezio deploy` to deploy it on the genezio infrastructure.

- You can now test both interfaces using the URLs returned by the deploy command used and the SDK and/or with our test interface that you can find on the dashboard.
