<%@page contentType="text/html; charset=UTF-8" %>
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 <%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
 <%@taglib uri="http://www.springframework.org/security/tags" prefix="security" %> 
 <%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>


        <div class="page-header header3"  id="header" >
            <div class="container col-md-9" style="float: none;">
                <div class="row">
                <div class="col-md-3 col-sm-3 hidden-xs">
					<div class="logo">
						<spring:url value="/resources/amedi/images/logo.png" var="logo_png"/>
                        <a href="#" title=" ">
                            <img src="${logo_png}" alt="Vinaphone">
                        </a>
                    </div>
                </div>
                <!---begin banner--->
                <div class="col-md-6 col-sm-6 col-xs-12 topbanner pdr5 pdl5">
                	<spring:url value="/resources/amedi/images/banner-design.jpg" var="banner_design_jpg"></spring:url>
					<img class="img-responsive" src="${banner_design_jpg}" alt="Banner"  />
				</div>
                <!---end banner--->
                
                <c:choose>
				<c:when test="${pageContext['request'].userPrincipal != null}">
					<spring:url value="/resources/j_spring_security_logout"
						var="logout" />

					<div class="col-md-3 col-sm-3 col-xs-12 ">
						<div class="header-inner-right-wrapper clearfix">
							<div class="header-top-dropdowns pull-right ">
								<div class="btn-group dropdown-hotline">
									<div class="btn dropdown-toggle">
										<button style="background-color: #48A248; color: white;"
											type="button" class="btn btn-custom dropdown-toggle"
											data-toggle="dropdown">
											<span class="hide-for-xs"><i class="fa fa-user"></i>&nbsp;Chào 
												${pageContext.request.userPrincipal.name} <span class="caret"></span></span>
										</button>
										<ul class="dropdown-menu pull-right" role="menu" z-index="-1">
											<!-- <li><a href="">Quản trị tài khoản</a></li>
											<li><a href="">Cập nhật thông tin</a></li>
											<li><a href="">Đổi mật khẩu</a></li> -->
											<!-- <li><a href="">Thoát</a></li> -->
											<li><a href="${logout}"> Thoát </a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>


				</c:when>
				<c:otherwise>
					<div class="col-md-3 col-sm-3 col-xs-12 ">
						
					
						<div class="header-inner-right-wrapper clearfix">
							<div class="header-top-dropdowns pull-right">
								<div class="btn-group dropdown">
									<div class="btn dropdown-toggle">
										<a href="#" >Đăng ký</a>&nbsp;&nbsp;|&nbsp;&nbsp;
										<spring:url value="/login" var="login"></spring:url>
										<a href="#" data-toggle="modal" data-target="#DangNhap">Đăng nhập</a>
									</div>
																	
								</div>
	                        </div>
                        
						</div>
					</div>
					
					
					<!-- Form dang nhap -->
					<div class="modal fade" id="DangNhap" tabindex="-1" role="dialog"
								aria-labelledby="myModalLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-body">
											<div id="" class="panel panel-primary">
												<div class="panel-heading">
													<h3 class="panel-title">ĐĂNG NHẬP HỆ THỐNG</h3>
												</div>
												<div class="panel-body">
												 <spring:url value="/resources/j_spring_security_check" var="form_url" />
													<form name="f" class="form-horizontal" id="login-form" role="form" method="post" action="${fn:escapeXml(form_url)}" >
                                                        <div class="form-group">
                                                            <label for="inputEmail" class="col-sm-3 control-label" style="font-size: 13px;">Số điện thoại</label>
                                                            <div class="col-sm-9">
                                                                <input class="form-control" id="j_username" name="j_username" placeholder="Số điện thoại" required value="" type="text">
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="inputPassword" class="col-sm-3 control-label" style="font-size: 13px;">Password</label>
                                                            <div class="col-sm-9">
                                                                <input class="form-control" id="j_password" name="j_password" placeholder="Password" required value="" type="password">
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="forgotPass" class="col-sm-3 control-label"></label>
                                                            <div class="col-sm-9">
                                                            	<spring:url value="https://vinaphone.com.vn/auth/login?service=http%3A%2F%2Ftrithucmayman.vn%2Fsso" var="amedisso"></spring:url>
                                                                <a href="${amedisso }">VinaID</a>&nbsp;|&nbsp;
                												<a href="#">Lấy mã OTP</a>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="col-sm-offset-3 col-sm-9">
                                                                <input type="submit" class="btn btn-danger btn-sm" id="login-form-submit" style="padding:10px;border-radius:5px;"  value="Đăng nhập" />
                                                            </div>
                                                        </div>
                                                    </form>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
					<!-- End Form dang nhap -->
				</c:otherwise>


			</c:choose>
                                
            </div>
            </div>
        </div>
