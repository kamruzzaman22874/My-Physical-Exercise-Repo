import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div>
                <h4 className='blog-heading'>How does react work...?</h4>
                <p className='blog-pera'>Answer :ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.JSX is a JavaScript syntax extension used in React element creation. Developers employ it to embed HTML code in JavaScript objects. As JSX accepts valid JavaScript expressions and function embedding, it can simplify complex code structure.The Document Object Model (DOM) presents a web page in a data tree structure. ReactJS stores Virtual DOM trees in the memory. By doing so, React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree.</p>
                    
            </div>
            <div>
                <h4 className='blog-heading'>
                   What is Difference between UseState And props...?
                </h4>
                <p className='blog-pera'>
                Answer :Props : on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. They are equivalent to function parameters.Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data -- callback functions may be passed in as props. <br />
                useState : Most of your components should simply take some data from props and render it. However, sometimes you need to respond to user input, a server request or the passage of time. For this you use state.
                Try to keep as many of your components as possible stateless. By doing this you'll isolate the state to its most logical place and minimize redundancy, making it easier to reason about your application.
                </p>
            </div>
            <div>
                <h4 className='blog-heading'>
                    Which is work useEffect , without data load...?
                </h4>
                <p className='blog-pera'>
                Answer : The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.
                Pretty much anything you want to “do” in a React component other than return JSX (any sort of side effect), will go into a useEffect. (and you can have more than one useEffect per component, too)
                All this power comes with a tradeoff: useEffect can be confusing until you understand how it works.
                In this post, we’re going to look at lots of useEffect examples so that you understand the mental model and can use it effectively in your own code.
                </p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Blog;