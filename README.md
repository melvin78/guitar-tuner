
<p align="center"><a href="https://guitar-tuner.webmelvin.me" target="_blank">
<img src="https://github.com/melvin78/guitar-tuner/blob/master/blob/guitar.png?raw=true
" width="400"></a></p>


# Demo

Check out [here](https://guitar-tuner.webmelvin.me)

# Guitar Tuner

With the help of [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
its now possible for developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning) and much more 
all from the browser.

Guitars usually go off tune when they are played frequently or due to changes in temperature. Guitar tuner
apps help to bring the Guitar back into tune. This is a project i made to solve such an issue.
With the help of this [library](https://github.com/rserota/wad) i was able to detect pitch and get the notename
of every sound that comes out of the browser's microphone.

With this information from the browser's microphone, the pointer would either rotate left or right to let you know if the string being plucked
is in tune and help you adjust accordingly. 

## Requirements

- An out of tune guitar (something you never thought you would read on github lol) or an 
 out of tune musical instrument lying around.



## Procedure

- Assuming you have a guitar, First start with plucking the string you'd wish to tune. 
- Ensure you have allowed access for your microphone to be used. Once permission access is allowed
- You can test if the pitch is being updated accordingly by whistling into your microphone and you
will see the current pitch being updated.


## ScreenShots

Example of An in tune A string being plucked

<img src="https://github.com/melvin78/guitar-tuner/blob/master/blob/img.png?raw=true" alt="here">

Example of out of tune D string being plucked, notice the pointer hasn't moved to indicate that you need to adjust 
the tuning peg.

<img src="https://github.com/melvin78/guitar-tuner/blob/master/blob/img2.png?raw=true" alt="here">



## Installation

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
