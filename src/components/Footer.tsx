

const FooterPage = () => {
    return (
     <footer>
    <div className="footer-section">
      <h4>Player.com.vn</h4>
      <p>Số 33, Ngõ 349 Mỹ Đình 1, Hà Nội</p>
    </div>
    <div className="footer-section">
      <h4>Về chúng tôi</h4>
      <ul>
        <li><a href="#">Trang chủ</a></li>
        <br />
        <li><a href="#">Sản phẩm</a></li><br />
        <li><a href="#">Tin tức</a></li><br />
        <li><a href="#">Liên hệ</a></li><br />
      </ul>
    </div>
    <div className="footer-section">
      <h3>Hỗ trợ</h3>
      <ul>
        <li><a href="#">Phương thức thanh toán</a></li><br />
        <li><a href="#">Phản hồi</a></li>
      </ul>
    </div>
    <div className="footer-section newsletter">
      <h3>Thông tin liên hệ của bạn</h3>
      <form action="#">
        <input type="email" placeholder="Enter Your Email Address" />
        <button type="submit">Gửi đi</button>
      </form>
    </div>
  </footer>
  
  
    )
  }
  
  export default FooterPage