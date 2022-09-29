import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div>
                <h4 className='blog-heading'>How does react work...?</h4>
                <p className='blog-pera'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                    
            </div>
            <div>
                <h4 className='blog-heading'>
                   What is Difference between UseState And props...?
                </h4>
                <p className='blog-pera'>
                Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data -- callback functions may be passed in as props.
                </p>
            </div>
            <div>
                <h4 className='blog-heading'>
                    Which is work useEffect and without data load...?
                </h4>
                <p className='blog-pera'>
                The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.
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