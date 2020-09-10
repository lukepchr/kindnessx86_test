import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {

            // this script takes an array of strings (words) and performs a bubble sort
            // starting from the beginning via swapping two elements when necessary.

            let changes = false;
            let strings = ['gateau', 'reservoir', 'silhouette', 'watch', 'maisonette', 'xerox',
                'sabotage', 'ricochet', 'premiere', 'cliche', 'debris', 'facade'];

            let swapWords = () => {
                let s0 = strings[a];
                let s1 = strings[a + 1];
                strings[a] = s1;
                strings[a + 1] = s1;
                changes = true;
            };

            let compareLetters = (currentDepth = 0) => {
                let fromFirst = strings[a][currentDepth];
                let fromSecond = strings[a + 1][currentDepth];

                // do these chars exist at all?
                if (!fromSecond) { // char evaluates as null when past the end of a word
                    if (fromFirst) {
                        swapWords(); // i.e. word "app" goes before "apple"
                    }
                } else {
                    if (fromFirst > fromSecond) {
                        swapWords();
                    } else if (fromFirst == fromSecond) {
                        compareLetters(currentDepth + 1);
                    }
                }
            };

            do {
                changes = false;
                for (var a = 0; a <= strings.length; a++) {
                    if (a + 1 < strings.length) {
                        // take the string [a] to study the characters.
                        compareLetters();
                    }
                }
            }
            while (changes);
        
    return (
      <div>

        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
            <h2>Task #1/4: bubble sort</h2>
            <h3>What's wrong with this bubble sort? When it's fixed, go to [Fetch data] tab</h3>
            {strings.join(", ")}
        </div >

    );
  }
}
