BASES Website
=============

Built using [express.js](http://expressjs.com).

### Contributing

The best way to update content on the BASES website is with the fork-and-pull
model.  Contributing is the best way to ensure that your team's content gets
onto the site as fast as possible, i.e. you can contribute without involving
tech team until the very last step.

To contribute, make all the desired content changes on your local fork and then
submit a pull request. Note that all commands beginning with ``$:`` indicate
they should be executed on your terminal.

1. [Fork the repository](https://help.github.com/articles/fork-a-repo)
2. Clone the repository to your local machine
3. Configure your development environment to work on the site:
    * Install [Node.js](http://nodejs.org) - the JavaScript platform
      everyone's been talking about! Note that Node comes with "Node Package
      Manager" which you will often see abbreviated as ``npm``. This is a
      utility used to manage libraries.
4. Enter the bases website directory: ``$: cd bases_website``
5. Install dependencies: ``$: npm install``
6. Run the web application to develop: ``$: PORT=8000 node app``
7. Check that your local copy of the site is running by going to:
``localhost:8000`` on your web browser

All pages are found under the ``views`` directory. Note that this project uses
[Jade](http://jade-lang.com) as a templating language which is eventually
converted to the HTML served by the website. Using Jade should be relatively
straightforward if you just want to add content (i.e. just copy what already
exists). After making any changes, refresh the page on ``localhost`` (You may
have to clear the cache by using Cmd + Shift + R when you refresh) and make
sure that the website looks ok.
