import React from 'react'

const Brands = () => {

  return (
    <div className='mt-[10rem]'>
        <h4 className='bold text-center text-[2rem] mb-[5rem]'>Easily Integrates With</h4>
        <div className='flex gap-[10rem] justify-center'>
            <div>
                <img src="/static/brands/shopify.png" alt="shopify" />
            </div>
            <div>
                <img src="/static/brands/wix.png" alt="shopify" />
            </div>
            <div>
                <img src="/static/brands/webflow.png" alt="shopify" />
            </div>
            <div>
                <img src="/static/brands/wordpress.png" alt="shopify" />
            </div>
            <div>
                <img src="/static/brands/blogger.png" alt="shopify" />
            </div>
            <div>
                <img src="/static/brands/squarespace.png" alt="shopify" />
            </div>
        </div>
    </div>
  )
}

export default Brands