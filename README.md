### To run

#### Step 1

If you have vagrant installed simply run:

```
vagrant up
```

That will provision a vagrant box, install node, install the required npm modules and run the tests and start the server!

#### Step 2

Go to http://localhost:9000 to see the app.

#### To run the tests

SSH onto the Vagrant box `vagrant ssh` and navigate to /vagrant `cd /vagrant/`.

`npm run test` will execute all the tests.
`npm run test:server` and `npm run test:client` will execute the server and client tests respectively.


#### To run the site

It should already be running but to start it manually `node app` will get things going.

> Thanks, Greg