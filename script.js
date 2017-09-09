var AC = {};
AC.paint = {
    interests: {
        initial: [
            {
                name: 'painting',
                text: 'painting',
                image: 'test.png'
            },
            {
                name: 'biking',
                text: 'exploring Cleveland by bike',
                image: 'flowers.jpg'
            }
        ]
    }
};

AC.canvas = {
    out:{
        interestText: document.getElementsByClassName('js_interest'),
        displayFrames: document.getElementsByClassName('js_frame')
    }
    in:{
        changeInterests: document.getElementsByClassName('js_changeInterest')
    }
};

AC.brush = {

};
