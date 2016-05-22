### To run

#### Step 1

If you have vagrant installed simply run:

```
vagrant up
```

That will provision a vagrant box, install node, install the required npm modules and run the tests!

#### Step 2

SSH onto the Vagrant box `vagrant ssh` and navigate to /vagrant `cd /vagrant/`.

#### Step 3

Start the server

```
node app
```

#### Step 4

Go to http://localhost:9000 to see the app.

#### To run the tests

`npm run test` will execute all the tests.
`npm run test:server` and `npm run test:client` will execute the server and client tests respectively.


> Thanks, Greg