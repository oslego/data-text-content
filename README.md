# data-text-content

JavaScript component to clone an HTML element's text content to a data attribute called `data-text-content`. Keep in sync automatically.

For use in CSS as content for pseduo-elements with `content: attr(data-text-content)`.

## Example

```html
<script src="data-text-content.js"></script>
<style>
  /* create reflection effect */
  p::after{
      content: attr(data-text-content);
      transform: rotateX(180deg);
      display: block;
  }
</style>

<p data-text-content>Reflect this</p>

```

## Usage

1.  Load the JavaScript component
```html
<script src="data-text-content.js"></script>
```
2.  Set the `data-text-content` attribute on target elements
```html
<p data-text-content>Reflect this</p>
```

The target elements will have their `data-text-content` attribute automatically updated and synchronized with the element's text content.

In CSS, you can reference the `data-text-content` attribute and use its value. For example, as content for pseduo-elements:

```css
p::after{
  content: attr(data-text-content);
}
```
