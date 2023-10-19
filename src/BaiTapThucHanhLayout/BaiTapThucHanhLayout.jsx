import { Banner } from "./Banner"
import { Body } from "./Body"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Item } from "./Item"


export const BaiTapThucHanhLayout = () => {
  return (
    <div className="div">
        <div className="header">
            <Header />
        </div>
        <div className="body">
            <Body />
            <div className="Banner">
            <Banner />
            </div>
            <div className="Item">
                <Item />
            </div>
        </div>
        <div className="Footer">
            <Footer />
        </div>
    </div>
    
    
    
    
  )
}
