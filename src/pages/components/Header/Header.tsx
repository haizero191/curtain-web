import React, { useEffect, useState } from 'react'
import "./Header.scss";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';



const Header = (props: any) => {
  const [headerData, setHeaderData] = useState({
    status: false
  });

  const [searchIcon, setSearchIcon] = useState(false)


  const onClickSearch = () => {

    toggleSearchInput();
  }

  const toggleSearchInput = () => {
    setSearchIcon(searchIcon => searchIcon = !searchIcon)
  }

  useEffect(() => {
    setHeaderData({ status: props.status })
  }, [props])

  return (
    <div className={`Header ${headerData.status ? 'actived' : ''}`}>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <div className='logo'>
              <img src="https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg" alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"}>Trang chủ</Link>
              <Link to={"/product"}>Sản phẩm</Link>
              <Link to={"/service"}>Dịch vụ</Link>
              <Link to={"/contact"}>Liên hệ</Link>
            </Nav>
            <Nav>

              <div className='d-flex' style={{ "gap": "10px" }}>
                <div className='d-flex input-search'>
                  <input type="text" placeholder='Nhập nội dung tìm kiếm' />
                </div>
                <div className='search-icon' onClick={onClickSearch}>
                  <Icon.Search size={16} color="black" />
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header