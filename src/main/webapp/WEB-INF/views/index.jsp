 <%@page contentType="text/html; charset=UTF-8" %>
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 <%@taglib uri="http://www.springframework.org/tags" prefix="spring" %>
 

				
				<!-- Main content - START -->
				<div class="section box-shadows homebanner">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								
							<div id="banner-slider" class="carousel slide" data-ride="carousel">
								<!-- Indicators -->
								<ol class="carousel-indicators">
								<li data-target="#banner-slider" data-slide-to="0" class=""></li>
								<li class="active" data-target="#banner-slider" data-slide-to="1"></li>
								</ol>

								<!-- Wrapper for slides -->
								<div class="carousel-inner" role="listbox">
								<div class="item">
									<spring:url value="/resources/amedi/images/slide.jpg" var="lich_van_nien_jpg"/>
                                    <img class="bdr img-responsive" src="${lich_van_nien_jpg }">
								</div>
								<div class="item active">
									<spring:url value="/resources/amedi/images/slide2.jpg" var="lich_van_nien_jpg"/>
                                    <img class="bdr img-responsive" src="${lich_van_nien_jpg }">
								</div>
								 
								</div>
							</div>
						</div>
					</div>
				</div> 
				
				





