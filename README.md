# Polyrhythmic Rings

<img  src="https://raw.githubusercontent.com/abjt14/polyrhythmic-rings/main/preview_720x450.gif"  width=100%  height=100%>

Relaxing tunes and visuals to help you focus, meditate, or sleep. Project inspired by [Hyperplexed's video](https://www.youtube.com/watch?v=Kt3DavtVGVE) on their YouTube channel.

You can read more about the project [here](https://www.abjt.dev/lab/polyrhythmic-rings) on my website.

## Built Using

- [Next.js](https://nextjs.org/)
- [SVGs](https://developer.mozilla.org/en-US/docs/Web/SVG)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)

## Installation

> Note: You need to have Node.js and npm installed on your machine before following these steps.

```
git clone https://github.com/abjt14/polyrhythmic-rings.git
cd polyrhythmic-rings
npm install
npm run dev
```

Now, open your browser and navigate to `http://localhost:3000` to see the application running.

## Cross-Browser Caveats & Performance Issues

One of the most performance intensive parts of the application is the horizontal strings that trigger when the white circles hit them. I faced severe performance issue in Safari and Firefox. I tried two methods to solve this.

First by using SVG filters on an SVG `<line />` element, and the second, using the same filters on a `<div />`. The first method performs well for Safari, but is very sluggish for Firefox, however the second method is very sluggish for Safari, and just marginally better for Firefox. We're currently using the SVG version, but both versions are available in the project files.

I'll continue to work on this, I have a few new ideas to try out.
