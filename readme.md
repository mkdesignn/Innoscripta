## Innoscripta Project

To run the migration, You can use
```
php artisan migrate
```

- [You can define your env file or use the following file](https://github.com/laravel/laravel/blob/master/.env.example)

After running the migration, you can seed the database. by running 
```
php artisan db:seed
```

**I'm using Mysql for the development and sqlite for the tests, But you can freely change the drivers to any driver laravel supports**

If you want to access to all of the endpoints you can visit [https://innoscriptaa.herokuapp.com/api/documentation](swagger-api)


If you want to run the BE server then you can run 
```
php artisan serve
```

You can also run the tests by using 
```
vendor/bin/phpunit
```

And to see the code-coverage, you can use 
```
phpdbg -qr vendor/bin/phpunit
```
If you run the above code, a new clover.xml will generated and then you can use the following code

```
php coverage-checker.php clover.xml 80
```

To see the code-coverage percentage which is around 80%. 

If you want to run the FE tests, you can simply run 
```
npm run test
```

if you want to run the FE watcher, then you can use
```
npm run watch
```

**You should always run the BE server first then you can use the FE**
