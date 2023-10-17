
import { Button } from '../widget/button'
import { Price } from '../widget/price'
import './index.css'

export const PDetails = () => {
    return <div >

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ padding: '10px 50px' }}>
                <img width={300} src='https://i5.walmartimages.com/seo/Hocus-Pocus-Girls-Halloween-Sweatshirt-Sizes-4-16_fb77048d-35b0-4e53-b9da-87c6864f48fd.5a65eaf861e4e665bddbf27c9dee6f60.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF' />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button style={{ padding: '0px 5px' }}>{'<'}</button>
                    <div className='detailimages-view'>
                        {
                            [1, 2, 3, 4, 5, 6].map(element => {
                                return <img style={{ border: '1px solid red', margin: '5px' }} height={80} width={80} src='https://i5.walmartimages.com/seo/Hocus-Pocus-Girls-Halloween-Sweatshirt-Sizes-4-16_fb77048d-35b0-4e53-b9da-87c6864f48fd.5a65eaf861e4e665bddbf27c9dee6f60.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF' />
                            })
                        }

                    </div>
                    <button style={{ padding: '0px 5px' }}>{'>'}</button>
                </div>
            </div>
            <div style={{ padding: '10px 80px' }}>
                <p style={{ color: '#46474a', padding: '10px 0px' }}>Wonder Nation Toddlers Unisex Halloween T-Shirt, Sizes 12M-5T</p>
                <Price unit='$' value={10.88} />

                <br />
                COLOR
                <PChartList colors={['#000000', 'red', 'green', 'yellow']} />
                <br />
                SIZE
                <PChartList data={['S', 'M', 'L', 'XL', 'XXL']} />
                <br />
                How do you want your item?

                <PShippingItemList data={['By Air', 'By Sea']} />
                <br />
                <Button title='Add to Cart' />


            </div>
        </div>
        <div style={{ height: '800px' }}></div>

    </div>
}


interface PChartListProps {

    data?: string[]
    colors?: string[]
}
export const PChartList = (props: PChartListProps) => {

    const { data = [], colors = [] } = props
    return <div>
        {
            data.map((element, index) => {
                return <button style={{ width: '30px', height: '30px', margin: '10px 10px 10px 0px' }}>{element}</button>
            })
        }
        {
            colors.map((element, index) => {
                return <button style={{ width: '30px', backgroundColor: colors[index], height: '30px', margin: '10px 10px 10px 0px' }}></button>
            })
        }
    </div>
}


interface PShippingItemListProps {

    data?: string[]
}
export const PShippingItemList = (props: PShippingItemListProps) => {

    const { data = [] } = props
    return <div>
        {
            data.map((element, index) => {
                return <button style={{ width: '80px', height: '80px', margin: '10px 10px 10px 0px' }}>{element}</button>
            })
        }

    </div>
}