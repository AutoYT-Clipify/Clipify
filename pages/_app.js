import Container from '@/components/Container'

import { sanityClient } from '@/sanity'
import '@/styles/globals.css'
import { useEffect } from "react"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    (function() {
      // Create the fb-root div
      var fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.appendChild(fbRoot);    // Create the fb-customer-chat div
      var fbCustomerChat = document.createElement('div');
      fbCustomerChat.id = 'fb-customer-chat';
      fbCustomerChat.className = 'fb-customerchat';
      fbCustomerChat.style.position = 'fixed';   // Make it fixed
      fbCustomerChat.style.bottom = '10px';      // Position it at the bottom
      fbCustomerChat.style.right = '10px';       // Position it to the right
      fbCustomerChat.style.zIndex = '999999';    // High z-index so it appears on top
      document.body.appendChild(fbCustomerChat);    // Set the attributes
      fbCustomerChat.setAttribute("page_id", "122105349284001952");
      fbCustomerChat.setAttribute("attribution", "biz_inbox");    // Inject the SDK script
      var js, fjs = document.getElementsByTagName('script')[0];
      if (!document.getElementById('facebook-jssdk')) {
          js = document.createElement('script');
          js.id = 'facebook-jssdk';
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
      }    // Initialize the Facebook SDK
      window.fbAsyncInit = function() {
          FB.init({
              xfbml: true,
              version: 'v17.0'
          });
      };
  })();
  }, []);

  return (
    <>
      <Container>
        <Component {...pageProps} />
        {/* <div className="fb-customerchat" 
         >
    </div> */}
      </Container>
    </>

  )

}
