# Vue.js & Koa.js SSR

SSR realization using **Vue.js**@^2.6.0 and **Koa.js**@2 with async/await

## Main Goal

To help newbies understand how to build SSR apps step-by-step

## Installation

Clone this project and go to the SSR realization step you are interested in

## Steps

### `vue-ssr-1`

A basic SSR implementation where the server responds to each request with a hardcoded HTML template showing the visited URL

### `vue-ssr-2`

The server responds with the visited URL using an interpolated page template (index.html) separated to own file

### `vue-ssr-3`

Now we expose a factory function separated to own file that can be repeatedly executed to create fresh app instances for each request to the server.

And we also use the Browser Platform-Specific API (window object) in the logic of our app to demonstrate that it's not working properly. It happens because Node.js can't handle and bind this API with our code at the time of rendering.
