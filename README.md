# Flyckt Coding Loaders

A package with customizable loaders for React applications, offering options for size, color, animation and more.

## Installation
Install the package via npm:

```bash
npm install @flycktcoding/loaders
```

## Usage

Import and use any loader in your React component.

<hr>

### 1. DotsLoader
A simple loader with animated dots in sequence.

**Example**
```ts
import { DotsLoader } from "@flycktcoding/loaders";

<DotsLoader
  wrapperClassName="custom-wrapper"
  loaderClassName="custom-dot"
  dotsNumbers={5}
  dotSize={12}
  dotColor="#3498db"
  dotPadding={2}
  dotMargin={4}
/>
```

**Props**

### DotsLoader Props

| Prop            | Type       | Default | Description                                  |
|-----------------|------------|---------|----------------------------------------------|
| `wrapperClassName` | `string`   | -       | Optional class name for the wrapper element. |
| `loaderClassName`  | `string`   | -       | Optional class name for each dot element.    |
| `dotsNumbers`      | `number`   | `3`     | Number of dots to display in the loader.     |
| `dotSize`          | `number`   | `10`    | Size of each dot in pixels.                  |
| `dotColor`         | `string`   | `gray`  | Color of each dot.                           |
| `dotPadding`       | `number`   | -       | Padding inside each dot.                     |
| `dotMargin`        | `number`   | -       | Margin between dots.       

<br>
<hr>

### 2. InfiniteBarLoader
A bar-loader with that moves infinitely inside it.

**Example**
```ts
import { InfiniteBarLoader } from "@flycktcoding/loaders";

<InfiniteBarLoader
  width="md"
  backgroundColor="#f0f0f0"
  loaderColor="#3498db"
  borderColor="#333"
  animationDuration={1.5}
/>
```
### InfiniteBarLoader Props

| Prop               | Type       | Default | Description                                           |
|--------------------|------------|---------|-------------------------------------------------------|
| `width`            | `"sm"`, `"md"`, `"lg"` | `"md"`  | Sets the width of the loader.                         |
| `loaderColor`      | `string`   | -       | Color of the moving bar.                              |
| `backgroundColor`  | `string`   | -       | Background color of the loader container.             |
| `borderColor`      | `string`   | -       | Color of the loader's border.                         |
| `animationDuration`| `number`   | -       | Duration of the animation in seconds.

<br>
<hr>

### 3. SpinnerLoader
A circular spinner loader with customizable size and colors.

**Example**
```ts
import { SpinnerLoader } from "@flycktcoding/loaders";

<SpinnerLoader
  size="lg"
  backgroundColor="#e0e0e0"
  spinnerColor="#3498db"
/>
```
### SpinnerLoader Props

| Prop               | Type       | Default | Description                                           |
|--------------------|------------|---------|-------------------------------------------------------|
| `size`             | `"sm"`, `"md"`, `"lg"` | `"md"`  | Sets the size of the spinner.                         |
| `spinnerColor`     | `string`   | -       | Color of the spinning portion of the loader.          |
| `backgroundColor`  | `string`   | -       | Background color of the spinner's border. 


## Styles
Each loader has default styling using CSS-in-JS with @emotion/react.<br> 
The styling and animations can in some cases be customized by adding your own classes to the loaders.



## License

This package is licensed under MIT.