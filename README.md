# Unhandled Error: Missing Request Body in Express.js

This repository demonstrates a common error in Express.js applications where requests without a body are not handled correctly.  The code attempts to access `req.body` without checking if it exists. This can lead to unexpected behavior and application crashes if a request is made without a body.

## Bug Description

The `bug.js` file contains an Express.js application with a POST route `/users`. This route attempts to access `req.body` without verifying its existence, which will throw an error if the incoming request does not have a body.

## Bug Solution

The `bugSolution.js` demonstrates the correct approach. It checks if `req.body` is defined before accessing it and includes appropriate error handling to return a more informative response in case of an error.