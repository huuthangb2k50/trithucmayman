package com.newway.web;
import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import edu.yale.its.tp.cas.client.filter.CASFilter;

@RequestMapping("/login/sso/**")
@Controller
public class SSO {
	private Logger log = Logger.getLogger(SSO.class.getName());
	
    @RequestMapping(method = RequestMethod.POST, value = "{id}")
    public void post(@PathVariable Long id, ModelMap modelMap, HttpServletRequest request, HttpServletResponse response) {
    }

    @RequestMapping
    public String index(HttpServletRequest request) {
    	 Collection<? extends GrantedAuthority> authorities = AuthorityUtils.createAuthorityList("ROLE_USER");
         Authentication auth;
    	
         String msisdn = (String)request.getSession().getAttribute(CASFilter.CAS_FILTER_USER);
         log.debug("SSO VinaID:"+msisdn);
         if(msisdn!=null && !msisdn.isEmpty()){
         
	         auth = new UsernamePasswordAuthenticationToken(msisdn, "admin@123", authorities);
	         SecurityContextHolder.getContext().setAuthentication(auth);
	         
	         
	         Authentication myauth =SecurityContextHolder.getContext().getAuthentication();
	         log.debug("Auth OK");
         }
        
         return "redirect:/";
         
        //return "sso/index";
    }
}
