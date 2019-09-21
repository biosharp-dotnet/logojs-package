# Rendering Protein logos

## With React: ProteinLogo component

The `ProteinLogo` component renders a logo with the `ProteinAlphabet` (22 amino acids plus **B** and **Z**)
with accompanying x- and y-axes. The color scheme corresponds to the chemical properties of the amino acids:
acidic is red, basic is blue, non-polar is black, and ambiguous (**B** - **N** or **D** and **Z** - **Q** or **E**)
are gold. The logo can use either information content (0-4.5 bits) or amino acid frequency (0%-100%) for letter heights
at each position. If you need custom axes, custom colors, or a custom alphabet, use the `Logo` or `RawLogo` compoenent instead.
If you need negative letter heights, use the `LogoWithNegatives` component instead. The following is a logo for the
**helix turn helix** motif of the **catabolite activator protein** (CAP) family:

<img src="http://logosj.wenglab.org/svg/eyJwd20iOltbMC4wMSwwLDAuMDIsMCwwLDAuMDQsMCwwLDAuMjEsMCwwLjU1LDAsMCwwLDAsMCwwLDAsMC4wNywwLDAsMF0sWzAuMDMsMCwwLDAuMDMsMCwwLDAsMCwwLDAuMTksMCwwLDAuMDUsMC4zNSwwLjAxLDAuMTEsMC4wMiwwLjE2LDAuMDMsMCwwLjAxLDBdLFswLjAxLDAsMC4wMSwwLDAsMCwwLDAsMC4yLDAsMC4zNSwwLjM5LDAsMCwwLDAsMCwwLDAuMDUsMCwwLDBdLFswLjAyLDAsMC4wMSwwLDAuMDEsMCwwLjAxLDAsMCwwLjA0LDAsMCwwLjAxLDAuMDIsMCwwLDAuMzcsMC41MSwwLDAsMCwwXSxbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLjAyLDAuMDEsMCwwLDAsMCwwLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAuMDIsMCwwLDAsMC4wMSwwLDAsMCwwLDBdLFswLjAxLDAsMCwwLDAsMCwwLDAuMTYsMC4wMSwwLjAyLDAuMDIsMC4wMSwwLjAzLDAsMC4wOCwwLjYzLDAuMDEsMC4wMSwwLDAuMDEsMCwwXSxbMC4xMywwLDAsMC4wMSwwLjExLDAsMC4xOCwwLjAxLDAsMC4wNCwwLjAxLDAuMDEsMC4wNCwwLDAuNCwwLjA0LDAsMC4wMywwLDAsMCwwXSxbMC4wOSwwLDAsMC40NCwwLjQsMCwwLDAsMCwwLDAsMC4wMiwwLjAxLDAsMC4wMywwLDAsMCwwLjAxLDAsMC4wMSwwXSxbMCwwLDAsMCwwLDAsMCwwLDAuNzQsMCwwLjE4LDAuMDYsMCwwLDAsMCwwLDAuMDEsMC4wMSwwLDAsMF0sWzAuNTgsMCwwLDAsMCwwLDAuMzgsMCwwLDAsMCwwLDAsMCwwLDAsMC4wNCwwLDAsMCwwLDBdLFswLjAzLDAsMCwwLjI3LDAuMTQsMCwwLDAuMDEsMCwwLjA0LDAsMC4wMSwwLjI0LDAsMC4xNSwwLjA0LDAuMDcsMC4wMSwwLDAsMCwwXSxbMC4xMiwwLDAsMCwwLDAuMTUsMCwwLjA0LDAuMTEsMCwwLjA4LDAuMTEsMCwwLDAsMC4wMywwLjAxLDAsMC4wMSwwLDAuMzUsMF0sWzAsMCwwLjAzLDAsMCwwLDAsMCwwLjEzLDAsMC41MiwwLDAsMCwwLDAsMC4wNSwwLjA0LDAuMjMsMCwwLDBdLFswLjAzLDAsMCwwLDAsMCwwLjk1LDAsMCwwLDAsMCwwLDAsMCwwLDAuMDIsMCwwLDAsMCwwXSxbMC4wNywwLDAuMTQsMCwwLDAsMCwwLDAsMCwwLjUsMC4wMiwwLDAsMC4wMSwwLDAuMTIsMC4xMywwLjAyLDAsMCwwXSxbMC4wOSwwLDAuMDEsMCwwLDAsMCwwLDAsMC4wMiwwLDAsMCwwLDAsMC4wMSwwLjIxLDAuNjYsMCwwLDAsMF0sWzAuMDEsMCwwLDAsMCwwLDAsMCwwLjE5LDAsMC4xMSwwLDAuMDEsMC4wNiwwLDAuNDEsMCwwLjAxLDAuMjEsMCwwLDBdLFswLDAsMCwwLDAuNzcsMCwwLDAuMDMsMC4wMSwwLDAsMCwwLDAsMC4wNCwwLDAuMDIsMCwwLjEzLDAsMCwwXSxbMCwwLDAsMCwwLDAsMCwwLjAyLDAsMCwwLDAuMDMsMCwwLDAsMCwwLjAzLDAuOTEsMCwwLjAxLDAsMF0sWzAuMDQsMCwwLDAsMCwwLjAxLDAsMCwwLjI0LDAsMC4wMSwwLjAxLDAsMCwwLDAsMCwwLjAyLDAuNjcsMCwwLDBdLFswLjAyLDAsMC4wMSwwLDAsMCwwLjE0LDAsMC4wMSwwLDAsMCwwLjA4LDAsMCwwLDAuNTgsMC4xNiwwLDAsMCwwXSxbMC4wMSwwLDAsMCwwLDAsMCwwLjA0LDAsMC4wNCwwLDAuMDEsMCwwLDAsMC44OSwwLDAuMDEsMCwwLDAsMF0sWzAuMDUsMCwwLjAxLDAsMCwwLDAsMCwwLjE1LDAuMDUsMC4yNywwLjA1LDAsMCwwLjEsMCwwLjAyLDAuMTIsMC4xNSwwLDAsMF0sWzAsMCwwLDAsMCwwLjA5LDAsMCwwLjA4LDAsMC42NSwwLjA4LDAsMCwwLDAsMCwwLDAuMDYsMCwwLDBdLFswLjA0LDAsMCwwLDAsMCwwLjI4LDAsMCwwLjIyLDAsMCwwLjAzLDAsMCwwLjA0LDAuMTQsMC4yMiwwLDAsMCwwXSxbMC4wOCwwLDAsMC4xNCwwLjA2LDAsMC4wMSwwLDAuMDEsMC4xOCwwLjAzLDAuMTEsMCwwLDAuMDMsMC4yOSwwLjAxLDAsMC4wMSwwLDAuMDEsMF0sWzAsMCwwLDAsMCwwLjI3LDAsMCwwLDAsMC42NSwwLDAsMCwwLDAsMCwwLDAsMC4wNCwwLDBdLFswLjA4LDAsMCwwLDAuMjUsMCwwLjAxLDAuMDQsMCwwLjA4LDAsMCwwLDAsMC4yMiwwLjI3LDAuMDEsMC4wMSwwLDAsMCwwXSxbMC4wNywwLDAuMDEsMC4xMywwLjE2LDAsMC4wMSwwLjAyLDAsMC4yOCwwLDAsMC4wMSwwLDAuMTMsMC4wOCwwLjAyLDAuMDUsMCwwLDAsMF0sWzAuMDEsMCwwLDAuMTIsMC4xNywwLDAuMDIsMC4wMSwwLjAxLDAuMDcsMC4wNCwwLjAxLDAuMDYsMCwwLjE4LDAuMSwwLjE0LDAsMC4wMSwwLjAxLDAuMDEsMF0sWzAsMCwwLDAuMDEsMC4wNiwwLDAuNjIsMC4wMywwLDAuMDYsMCwwLDAuMTUsMCwwLjAyLDAsMC4wMSwwLDAsMCwwLDBdLFswLjAyLDAsMCwwLDAsMC4wMywwLDAsMC4wOSwwLjAxLDAuNDEsMC4xMiwwLDAsMCwwLjAxLDAsMC4wMSwwLjIxLDAuMDUsMC4wMSwwXSxbMCwwLDAsMCwwLDAsMCwwLDAuNjUsMCwwLjE3LDAsMCwwLDAsMCwwLDAsMC4xNCwwLDAsMF1dLCJ0eXBlaWQiOjIsInNjYWxlIjoxLCJpc2ZyZXEiOmZhbHNlLCJmaXJzdGJhc2UiOjEsImdseXBobWFwIjpbeyJyZWdleCI6IkEiLCJjb2xvciI6ImJsYWNrIn0seyJyZWdleCI6IkIiLCJjb2xvciI6IiNiYjg4MDAifSx7InJlZ2V4IjoiQyIsImNvbG9yIjoiIzAwODgxMSJ9LHsicmVnZXgiOiJEIiwiY29sb3IiOiIjZmYwMDAwIn0seyJyZWdleCI6IkUiLCJjb2xvciI6IiNmZjAwMjIifSx7InJlZ2V4IjoiRiIsImNvbG9yIjoiIzMzMzMzMyJ9LHsicmVnZXgiOiJHIiwiY29sb3IiOiIjMDA3NzAwIn0seyJyZWdleCI6IkgiLCJjb2xvciI6IiMyMjAwOTkifSx7InJlZ2V4IjoiSSIsImNvbG9yIjoiIzExMTExMSJ9LHsicmVnZXgiOiJLIiwiY29sb3IiOiIjMDAwMGFhIn0seyJyZWdleCI6IkwiLCJjb2xvciI6IiMwMDIyMjIifSx7InJlZ2V4IjoiTSIsImNvbG9yIjoiIzIyMDAyMiJ9LHsicmVnZXgiOiJOIiwiY29sb3IiOiIjMDA5OTExIn0seyJyZWdleCI6IlAiLCJjb2xvciI6IiMwODA4MDgifSx7InJlZ2V4IjoiUSIsImNvbG9yIjoiIzAwYWEwMCJ9LHsicmVnZXgiOiJSIiwiY29sb3IiOiIjMDAyMmFhIn0seyJyZWdleCI6IlMiLCJjb2xvciI6IiMwMDhmMDAifSx7InJlZ2V4IjoiVCIsImNvbG9yIjoiIzAwNjYwMCJ9LHsicmVnZXgiOiJWIiwiY29sb3IiOiIjMjIyMjAwIn0seyJyZWdleCI6IlciLCJjb2xvciI6IiMwODA4MDgifSx7InJlZ2V4IjoiWSIsImNvbG9yIjoiIzAwYTgwMCJ9LHsicmVnZXgiOiJaIiwiY29sb3IiOiIjYWFhYTAwIn1dfQ==" alt="protein logo" width="100%">

`ProteinLogo` takes the following properties:

* **ppm**: a matrix containing amino acid frequencies at each position, ranging from 0.0 to 1.0.
Each row is a position in the logo, and the columns are alphabetical.
* **pfm**: a matrix containing the number of times each amino acid occurs at each position.
This is only used if **ppm** is not provided. Column and row orders are the same as for **ppm**.
* **mode**: determines how letter heights are computed; may be either
`"INFORMATION_CONTENT"` (default) or `"FREQUENCY"`.
* **startpos**: if set, the first base in the logo will be numbered with a
value other than the default of 1.
* **backgroundFrequencies**: optional; an array of background frequencies to use to
compute information content in place of the default 1/20 for each amino acid. The order of the
array is alphabetical. If **mode** is not INFORMATION_CONTENT, this is ignored.

```js
import { ProteinLogo } from 'logosj-react';

const CAP_PPM = [
  [0.09, 0.31, 0.08, 0.50], [0.18, 0.15, 0.45, 0.20], [0.30, 0.05, 0.49, 0.14],
  [0.06, 0.87, 0.02, 0.03], [0.00, 0.98, 0.00, 0.02], [0.81, 0.01, 0.07, 0.09], 
  [0.04, 0.57, 0.36, 0.01], [0.11, 0.47, 0.05, 0.35], [0.93, 0.01, 0.03, 0.01],
  [0.00, 0.00, 0.99, 0.01], [0.36, 0.00, 0.64, 0.00], [0.05, 0.01, 0.55, 0.37], 
  [0.03, 0.00, 0.97, 0.00], [0.06, 0.00, 0.85, 0.07], [0.11, 0.80, 0.00, 0.07],
  [0.40, 0.01, 0.55, 0.01], [0.09, 0.53, 0.33, 0.04], [0.12, 0.35, 0.08, 0.43], 
  [0.44, 0.19, 0.29, 0.06]
];

export const CAPLogo = props => (
    <ProteinLogo ppm={CAP_PPM} />
);
```

## Without React: embedProteinLogo function

Outside of React, use the `logosj.embedProteinLogo` function to embed a `ProteinLogo` component in a `div`.
`logosj.embedProteinLogo` takes two arguments:

* **div**: HTML element in which to embed the Protein logo; its `innerHTML` will be
replaced by the rendered logo.
* **properties**: an object containing the above properties.

If you don't use React, the following code embeds the Protein logo in a `div` element:

```html
<!doctype html>
<html>
  <body>
    <script src="http://bundle.logosj.wenglab.org/bundle.js" type="text/javascript"></script>
    <div id="logo" style="width:500px"></div>
    <script type="text/javascript">
      const CAP_PPM = [
        [0.09, 0.31, 0.08, 0.50], [0.18, 0.15, 0.45, 0.20], [0.30, 0.05, 0.49, 0.14],
        [0.06, 0.87, 0.02, 0.03], [0.00, 0.98, 0.00, 0.02], [0.81, 0.01, 0.07, 0.09], 
        [0.04, 0.57, 0.36, 0.01], [0.11, 0.47, 0.05, 0.35], [0.93, 0.01, 0.03, 0.01],
        [0.00, 0.00, 0.99, 0.01], [0.36, 0.00, 0.64, 0.00], [0.05, 0.01, 0.55, 0.37], 
        [0.03, 0.00, 0.97, 0.00], [0.06, 0.00, 0.85, 0.07], [0.11, 0.80, 0.00, 0.07],
        [0.40, 0.01, 0.55, 0.01], [0.09, 0.53, 0.33, 0.04], [0.12, 0.35, 0.08, 0.43], 
        [0.44, 0.19, 0.29, 0.06]
      ];
      logosj.embedProteinLogo(document.getElementById("logo"), { ppm: CAP_PPM });
    </script>
  </body>
</html>
```