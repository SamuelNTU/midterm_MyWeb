
## JS workflow

```
sketch.js
│___preload()
|   |   load_img()  load image
|   |___load_sound()  load sound
|     
|___setup()
    │   |___cvsWrapper()    flappy bird container
    │
    |____reset()
         |   createbutton()    create restart button when lose
         |   submitspeed()   setting user speed 
         |   initialize_var()    initialize  variable
         |
         |___draw()   
         |   |   bird_move()     specify bird position
         |   |   numbershow()    show score on top
         |   |   backimg_move()  moving background image and pillar
         |   |   start_page()    show start_page
         |   |___hit()           specify when do the bird be hitted 
         |
         |
         |___keyPressed()  event when space press

