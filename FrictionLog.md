## Positive: 


* Documentation: 
    * Setting clear expectations about complexity, customization and maintenance. -> This helps me (the developer/business) determine which of the two options (prebuilt or custom) is best for my needs. 
    * End result - what you’re building. Super helpful to have the visuals!
    * Option for immersive guide. 
    * Client side/server side. 
    * Out of the box fraud detection and maintenance through the stripe.js. 
    * Benefits of redirecting to a hosted page 
    * Ability to easily copy paste parts of the integration code from the documentation
* Very easy to create a product and price from the dashboard.


Areas for improvement: 

* Exec summary. Consider moving the “this guide shows you how to” up the page and expanding on the benefits. E.g. For integrating Stripe  payments in your website, Stripe provides a secure, PCI-compliant, customizable payment experience for accepting payments. You can accept payments from sources such as debit cards, credit cards, or digital wallet payment cards. This section provides an overview of how to integrate payments in your website and provides a walkthrough with step-by-step instructions to set up an example website with Square payments integrated.”
* Consider spinning out Payment Methods - important info, does it vary by country? 
* Clarify platform compatibility. The prebuilt flow is only available on web - which makes sense from a technical perspective (it would not be possible to build a hosted checkout flow for native apps) but it would save me time. 
* Step 1, 2,3 instead of storytelling. 
* Consider testing the icon for copy-paste ability in the integration documentation - I accidentally found out what that was by clicking on it. I’m not sure whether the icon is intuitive for developers to understand what that does. One interesting test would be testing the current icon against an icon with the text “Copy” which I would hypothesize everyone understands. 
* Step 3. Create a Checkout Session
    * Do I need to watch the video for the Sinatra framework? Why? 
    * Where am I creating the session - in the index.js file or somewhere else? In the example provided there’s no filename contrary to the previous examples 
    * =>Reco: create a new ruby file to create your session 
    * =>Reco: how many currencies do you need to support? create  
* Price is in cents 



Other feedback (for the candidate experience)

1. Installing Ruby (in order to install the Stripe gem bc the default ruby by Apple does not allow you to do that “You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory.”): https://stackoverflow.com/questions/51126403/you-dont-have-write-permissions-for-the-library-ruby-gems-2-3-0-directory-ma
