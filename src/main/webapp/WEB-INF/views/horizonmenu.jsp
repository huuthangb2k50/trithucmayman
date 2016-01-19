<%@page contentType="text/html; charset=UTF-8" %>
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 <%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
 <%@taglib uri="http://www.springframework.org/security/tags" prefix="security" %>

		<!--Menu mobile-->
		<spring:url value="/" var="home"/>
		<div class="main-content">
            <div class="container">
                <div id="menu-mobile" class="navgoco" >
                    Menu
					<span class="icon-navgovo"></span>
					<ul class="nav">
						<li><a href='${home }' class='active' >
							<spring:url value="/resources/amedi/images/icon_home.png" var="icon_home_png"></spring:url>
							<img  src="${icon_home_png}" alt="Trang chủ" style="width:15px;height:15px;"></a>
						</li>
						<spring:url value="/dichvu/index" var="dichvu"></spring:url>
						<li class='has-sub'><a  href='${dichvu }'>Đăng ký</a></li>
						
						<spring:url value="/huongdan/index" var="huongdanurl"></spring:url>
						<li><a href="${huongdanurl }">Hướng dẫn</a></li>
						
						<spring:url value="/khuyenmai/index" var="khuyenmaiurl"></spring:url>
						<li><a href="${khuyenmaiurl }">Khuyến mãi</a></li>
						
						<spring:url value="/hoidap/index" var="hoidapurl"></spring:url>
						<li><a href="${hoidapurl }">Hỏi đáp</a></li>
							
						<spring:url value="/danhsachtrungthuong/index" var="danhsachtrungthuongurl"></spring:url>
						<li><a href="${danhsachtrungthuongurl }">Danh sách trúng thưởng</a></li>
							
					</ul>
                </div>
            </div>
        </div>
        <!--Menu mobile-->
		<!--Menu ngoài-->
		<div class="main-nav">
            <div class="container col-md-9" style="float: none;">
                <div id='cssmenu' >
                    <ul>
                        <li><a href='${home }' class='active' >
                            <img  src="${icon_home_png}" alt="Trang chủ" style="width:15px;height:15px;"></a>
                        </li>
                        
                        <spring:url value="/dichvu/index" var="dichvu"></spring:url>
						<li class='has-sub'><a  href='${dichvu }'>Đăng ký</a></li>
						
						<spring:url value="/huongdan/index" var="huongdanurl"></spring:url>
						<li><a href="${huongdanurl }">Hướng dẫn</a></li>
						
						<spring:url value="/khuyenmai/index" var="khuyenmaiurl"></spring:url>
						<li><a href="${khuyenmaiurl }">Khuyến mãi</a></li>
						
						<spring:url value="/hoidap/index" var="hoidapurl"></spring:url>
						<li><a href="${hoidapurl }">Hỏi đáp</a></li>
							
						<spring:url value="/danhsachtrungthuong/index" var="danhsachtrungthuongurl"></spring:url>
						<li><a href="${danhsachtrungthuongurl }">Danh sách trúng thưởng</a></li>
                    </ul>
                </div><!--end #cssmenu-->
			</div>
        </div>

