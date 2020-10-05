This is the friction log of my experience building an integration with PaymentIntents - one time payments. It covers what I found to be great about the experience and also some areas that I think could be improved from a user perspective. 

## Strong areas

1. Overall I found the documentation to be of high quality, intuitive and with the end user in mind. Some examples include:  
    * Setting clear expectations about complexity, customization and maintenance between the prebuilt and custom options of the Checkout integration. 
    * The sections highlighting the end result in terms of the UX (e.g. what you’re building). Visuals and mocks are not only helpful, they also make the integration guide more delightful.  
    * Dynamic and personalized instead of static and dry which is often the case in developer documentation. I really liked the annotated guide 
    (https://stripe.com/docs/checkout/integration-builder), found it super easy to follow and I loved the interactivity and the step by step instructions. This is a great example of how to create an engaging experience for a task that can seem tedious at face value.  
2. Very easy to get started. I was able to easily copy paste parts of the integration code directly from the documentation and get parts of the integration running in a couple of hours. 
3. Great benefits of redirecting to a hosted page including development time, maintenance, out of the box security and fraud detection as well as immediate access to digital wallets in addition to card payments. 
4. Strong error design. Most of the times I ran into an issue the error message was clear and detailed, which made it easy to resolve. 
5. Good level of abstract design. 
6. Support for multiple languages with code examples. 
7. Prepopulated test API keys in code examples and documentation - a small detail that is delightful, makes life easier for the user and demonstrates user empathy. 
8. Test card details embedded in the preview (https://checkout.stripe.dev/preview) and readily available. 

## Areas for improvement

1. Addding an overview (aka Exec Summary but don't call it that:) at the top part of the documentation. The “this guide shows you how to” section could be a good start, as well as including the benefits. Something of sort "Stripe provides a secure payment experience for accepting Stripe payments on your website. You can accept payments from debit/credit cards, or digital wallet payment cards. This section provides an overview of how to integrate payments and a walkthrough with step-by-step instructions to set up an example.” This would allow the end user reading the documentation to very quickly understand the what/why/how of the integration without reading the full document.
2. Consider spinning out Payment Methods - important info, does it vary by country? 
3. Clarify platform compatibility. The prebuilt flow is only available on web - which makes sense from a technical perspective, but it would save me time to know this upfront. 
4. Outline steps (Step 1, 2,3) instead of storytelling. 
5. Consider testing the icon for copy-paste ability in the integration documentation - I accidentally found out what that was by clicking on it. I’m not sure whether the icon is intuitive for developers to understand what that does. One interesting test would be testing the current icon against an icon with the text “Copy” which I would hypothesize everyone understands. 
6. Create Checkout Session:
    * I was a little confused as to where to create the session - in the example provided in the main integration document (https://stripe.com/docs/payments/accept-a-payment) there is no filename contrary to the previous examples. The annotated version of the guide is much simpler and easy to follow.  
    * The info about payment methods was also sligthly confusing - i.e. it was not clear from the documentation which options are available and how to set them up. For example the main integration doc links to wallets and the add payment methods here (https://stripe.com/docs/payments) does not outline cards. 
    * The fact that the unit_amount for line_items is in cents is crucial and not easily evident. I had originally set this to 1 and had to dig deeper in the documentation to find it after getting an error (on a side-note the error message was excellent, I very quickly understood that something was not right about the price which led me to search the API documentation for line_items and that's how I found about that unit amount is in cents). If this is a frequent mistake users make consider adding a comment in the code example to highlight it. 
7. To avoid navigating multiple documentation pages it would be great to have easy inline access to a summary of the fields required for the integration directly from the code. 
8. Having an outline of common mistakes and pitfalls for each section/step would be helpful. 
9. Is there a way to test Apple/Google Pay? 
10. I'm curious about why taxes are not included in the prebuilt checkout implementation.   


## Other feedback (for the candidate experience)

Consider recommending using a framework like Next.js instead of the bare bones create-react-app. I initially tried create-react-app but ran into consiguration/setup issues and switched to Next.js. It saved me from a lot of time-consuming setup and configuration, it was really easy to build a production-ready application and the docs were very easy to follow. 
