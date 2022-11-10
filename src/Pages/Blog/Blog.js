import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Blog| Foodies Cuisin</title>
            </Helmet>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    1. Difference between SQL and NoSQL?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>SQL databases are vertically scalable, while NoSQL databases are
                        horizontally scalable. SQL databases are table-based, while NoSQL
                        databases are document, key-value, graph, or wide-column stores.
                        SQL databases are better for multi-row transactions,
                        while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>


            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    2. What is JWT, and how does it work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for
                        securely transmitting information between parties as a JSON object.
                        WTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand.
                        For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                        Once decoded, you will get two JSON strings:

                        The header and the payload.
                        The signature.
                    </p>
                </div>
            </div>



            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    3. What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter
                        or execution environment for the JavaScript programming language.
                        Node.js is an open-source, cross-platform JavaScript runtime environment.
                    </p>
                </div>
            </div>



            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    4. How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop
                        which is an infinite loop that receives requests and processes them.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default Blog;