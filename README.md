#Installation
You can install with npm:
npm install @rannk/jquery-simple-modal

or

download js file from [github](https://github.com/rannk/jquery-simple-modal)

#Opening
####Method 1: Automatically attaching to links
The simplest approach is to add `rel="modal"` to your links and use the `href` attribute to specify what to open in the modal.

Open an existing DOM element by ID:
```html
<div id="myModal" class="modal">
  ...
</div>

<a href="#myModal" rel="modal">Login</a>

```

#### Method 2: Manually

```js
$('#myModal').modal("show");
```
# Options

These are the supported options and their default values:

```js
$.modal.defaults = {
  panel: window,          // Set in which layer to display the modal
  clickClose: true,       // Allows the user to close the modal by clicking the overlay
};
```