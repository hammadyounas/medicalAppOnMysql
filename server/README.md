# Webserver Built With NodeJS + Typescript + Express

_clone it and use it as you want_


#### `src/App.ts`
```typescript
    private routes(): void {
        let router = express.Router();

        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });


        this.express.use('/', router);
        // this.express.use('/api/v1/data', DataRouter);
    }
```

Here is where you start defining your routes and route handlers.
Use the current example



Made with :love_letter: in London :uk: