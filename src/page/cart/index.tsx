
import { Button } from "../../widget/button"
import { Price } from "../../widget/price"


export const Cart = () => {

    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>

            {
                [1, 2, 3, 4, 5, 6].map(element => {
                    return <div style={{ display: 'flex', margin: '15px 0px' }}>
                        <img width={100} src='https://i5.walmartimages.com/seo/Hocus-Pocus-Girls-Halloween-Sweatshirt-Sizes-4-16_fb77048d-35b0-4e53-b9da-87c6864f48fd.5a65eaf861e4e665bddbf27c9dee6f60.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF' />

                        <div>
                            <p style={{ color: '#46474a' }}>Wonder Nation Toddlers Unisex Halloween T-Shirt, Sizes 12M-5T</p>
                            <span style={{ color: '#74767c', fontSize: '12px' }}>Actual Color: Orange</span>
                            <br />
                            <span style={{ color: '#74767c', fontSize: '12px' }}> Clothing Size: 18 Months</span>

                            <br />
                            <br />
                            <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Remove</span>
                        </div>
                        <Price unit='$' value={16} />
                    </div>
                })
            }


        </div>
        <div style={{ border: '1px solid #f5f5f5', margin: '0px 50px', textAlign: 'center' }}>
            <button style={{ padding: '10px 30px', width: '260px', border: 'none', background: '#409EFF', margin: '20px', borderRadius: '10px', color: 'white' }}>Check Out</button>



        </div>
    </div>
}
