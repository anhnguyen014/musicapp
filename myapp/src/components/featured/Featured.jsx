import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/688831.webp?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1 className="featuredName">Da Lat</h1>
                <h2 className="featuredProperties">123 properties</h2>
            </div>
        </div>
        
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/688893.webp?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1 className="featuredName">Ho Chi Minh City</h1>
                <h2 className="featuredProperties">533 properties</h2>
            </div>
        </div>
        
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/688853.webp?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1 className="featuredName">Ha Noi</h1>
                <h2 className="featuredProperties">233 properties</h2>
            </div>
        </div>
        
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/square250/688956.webp?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1 className="featuredName">Vung Tau</h1>
                <h2 className="featuredProperties">133 properties</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Featured