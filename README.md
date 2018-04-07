## Getting started
This package offers two different usages: [directive](#directive) or [component](#component). You can use them to create tooltips, popovers or all kinds of dropdowns.

1. Install the plugin:
```
npm install --save v-pop
```

2. Add the plugin into your app:
```javascript
import Vue from 'vue'
import Vpop from 'v-pop'

components: {
    Vpop
}
```

## Usage
1. Add the component wherever you need it.
```html
<vpop>
    <div slot="content">This is what goes inside the tooltip</div>
    <div slot="tooltip-text">Hover over me</div>
</vpop>
```

## Options
| Option             | Description                                                      | Value                  | Default  |
|--------------------|------------------------------------------------------------------|------------------------|----------|
| color            | text color of the tooltip                                  | String                | #FFF  |
| backgroundColor          | background color of the tooltip                              | String | #000         |
| fontSize         | font size of the tooltip                             | Number | 10          |
| textAlign             | text alignment within the tooltip                                     | String                 | left         |
| arrowPlacement              | position of the tooltip's arrow                | String                | left  |
| hOffset         | horizontal offset of the tooltip                                          | Number                 |  0        |
| vOffset         | vertical offset of the tooltip                                          | Number                 |  0        |
| arrowOffset  | horizontal offset of the arrow | Number                | 0  |
