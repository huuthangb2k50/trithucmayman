 <%@page contentType="text/html; charset=UTF-8" %>
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 <%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@page contentType="text/html; charset=UTF-8" %>
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 <%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>

 <div class="footer">
            <div class="container col-md-9 " style="float: none;" >
                <div class="section">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div class="logo">
                            	<spring:url value="/resources/amedi/images/logo.png" var="logo_vnp"></spring:url>
                            	<spring:url value="/" var="homepage"/>
                                <a href="${homepage }" title="Lì Xì Nhé"><img src="${logo_vnp }" alt="Vinaphone"></a>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div class="footer-menu hidden-xs">
                                <!-- <ul class="nav-footer-menu navbar-nav">
                                    <li>
                                        <a href="http://www.vinaphone.com.vn/">Trang chủ</a>
                                    </li>
                                    <li>
                                        <a href="http://www.vinaphone.com.vn/aboutus/gioithieu">Giới thiệu</a>
                                    </li>
                                    <li>
                                        <a href="http://www.vinaphone.com.vn/new/homepage">Tin tức</a>
                                    </li>
                                    <li>
                                        <a href="http://www.vinaphone.com.vn/services/homepage">Dịch vụ</a>
                                    </li>
                                    <li>
                                        <a href="http://vinaphone.com.vn/devices/homepage">Thiết bị</a>
                                    </li>
                                    <li>
                                        <a href="http://www.vinaphone.com.vn/products/homepage">Gói cước</a>
                                    </li>
                                    <li>
                                        <a href="http://vinaphone.com.vn/supports/homepage">Hỗ trợ</a>
                                    </li>
                                    <li>
                                        <a href="http://vinaphone.com.vn/supports/support">Liên hệ</a>
                                    </li>
                                    <li>
                                        <a href="http://vinaphone.com.vn/locale.do?language=en">English</a>
                                    </li>
                                </ul> -->
                            </div>
                            <div class="clearfix"></div>
                            <div class="copyright">
                                <p class="text-center">
                                    Phát triển bởi Amedi 2015.<br/>                                    
                                </p>
                            </div>
                        </div>
						
                    </div>
                </div>       
            </div>
        </div>

	<spring:url value="/resources/amedi/bootstrap/js/bootstrap.min.js" var="bootstrap_min_js"/>
	<script type="text/javascript" src="${bootstrap_min_js }"></script>
	
	<spring:url value="/resources/amedi/js/slick.min.js" var="slick_min_js"/>
	<script src="${slick_min_js }"></script>
	
	<spring:url value="/resources/amedi/js/jquery.navgoco.min.js" var="jquery_navgoco_min_js"/>
	<script src="${jquery_navgoco_min_js }"></script>
	
	<spring:url value="/resources/amedi/js/custom.js" var="custom_js"/>
	<script src="${custom_js }"></script>
	
	<spring:url value="/resources/amedi/js/jquery.newsTicker.min.js" var="jquery_newsticker_min_js"/>
	<script src="${jquery_newsticker_min_js }"></script>
	
	<spring:url value="/resources/amedi/js/tendina.min.js" var="tendina_min_js"/>
	<script src="${tendina_min_js}"></script>
	
	<spring:url value="/resources/amedi/js/jquery.desoslide.min.js" var="jquery_desoslide_min_js"/>
	<script src="${jquery_desoslide_min_js }"></script>
	
	<spring:url value="/resources/amedi/js/main.min.js" var="main_min_js"/>
	<script src="${main_min_js }"></script>
  
	
	
	  